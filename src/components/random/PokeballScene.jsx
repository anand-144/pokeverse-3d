import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  Float,
} from "@react-three/drei";

import PokeballModel from "./PokeballModel";

function PokeballScene({
  loading,
  onGenerate,
}) {
  return (
    <div className="h-full w-full">
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{
          position: [0, 0, 6],
          fov: 40,
        }}
      >
        {/* Scene Background */}
        <color
          attach="background"
          args={["#020617"]}
        />

        {/* Ambient Fill */}
        <ambientLight intensity={1.8} />

        {/* Main Light */}
        <directionalLight
          position={[6, 8, 6]}
          intensity={4}
          castShadow
        />

        {/* Red Accent */}
        <pointLight
          position={[4, 2, 3]}
          intensity={35}
          color="#ef4444"
        />

        {/* Blue Accent */}
        <pointLight
          position={[-4, 2, 3]}
          intensity={30}
          color="#3b82f6"
        />

        {/* Top Glow */}
        <spotLight
          position={[0, 8, 0]}
          angle={0.4}
          penumbra={1}
          intensity={25}
          color="#ffffff"
        />

        <Suspense fallback={null}>
          <Float
            speed={2}
            rotationIntensity={0.3}
            floatIntensity={0.8}
          >
            <PokeballModel
              loading={loading}
              onGenerate={onGenerate}
            />
          </Float>

          <Environment preset="night" />
        </Suspense>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={!loading}
          autoRotateSpeed={1.5}
          minPolarAngle={
            Math.PI / 2.3
          }
          maxPolarAngle={
            Math.PI / 1.8
          }
        />
      </Canvas>
    </div>
  );
}

export default PokeballScene;