import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  Float,
  ContactShadows,
  Html,
} from "@react-three/drei";

import PokemonModel from "./pokemonModel";

function SceneLoader() {
  return (
    <Html center>
      <div
        className="
          h-14
          w-14
          rounded-full
          border-4
          border-red-500
          border-t-transparent
          animate-spin
        "
      />
    </Html>
  );
}

function PokemonTypesScene() {
  return (
    <Canvas
      camera={{
        position: [0, 0, 7],
        fov: 40,
      }}
    >
      {/* Ambient */}
      <ambientLight intensity={1.8} />

      {/* Main Light */}
      <directionalLight
        position={[5, 5, 5]}
        intensity={3}
      />

      {/* Rim Light */}
      <directionalLight
        position={[-5, 2, -5]}
        intensity={1.5}
        color="#60a5fa"
      />

      {/* Accent Light */}
      <pointLight
        position={[0, 3, 2]}
        intensity={2}
        color="#ef4444"
      />

      <Suspense fallback={<SceneLoader />}>
        <Float
          speed={2}
          rotationIntensity={0.4}
          floatIntensity={0.8}
        >
          <PokemonModel
            scale={3.5}
            position={[0, -1.5, 0]}
          />
        </Float>

        <Environment
          preset="night"
        />
      </Suspense>

      {/* Ground Shadow */}
      <ContactShadows
        position={[0, -2.5, 0]}
        opacity={0.35}
        blur={2.5}
        scale={12}
      />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={1.2}
      />
    </Canvas>
  );
}

export default PokemonTypesScene;