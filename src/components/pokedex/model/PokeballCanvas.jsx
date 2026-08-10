import { Canvas } from "@react-three/fiber";
import {
  Environment,
  Sparkles,
} from "@react-three/drei";
import { Suspense } from "react";

import PokeballModel from "./PokeballModel";

function PokeballCanvas() {
  return (
    <Canvas
      camera={{
        position: [0, 0, 12],
        fov: 45,
      }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={2} />

        <directionalLight
          position={[5, 5, 5]}
          intensity={5}
        />

        <pointLight
          position={[0, 0, 4]}
          intensity={20}
          color="#ef4444"
        />

        <pointLight
          position={[-5, 2, 2]}
          intensity={8}
          color="#4C7CFF"
        />

        <pointLight
          position={[5, -2, 2]}
          intensity={8}
          color="#ffffff"
        />

        <Environment preset="city" />

        <Sparkles
          count={150}
          scale={15}
          size={3}
          speed={0.3}
        />

        <PokeballModel />
      </Suspense>
    </Canvas>
  );
}

export default PokeballCanvas;