import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
} from "@react-three/drei";

import Pokemon3DModel from "./Pokemon3DModel";

function Pokemon3DViewer({
  modelUrl,
}) {
  return (
    <Canvas
      camera={{
        position: [0, 1.5, 10],
        fov: 100,
      }}
    >
      <ambientLight intensity={2} />

      <directionalLight
        position={[5, 5, 5]}
        intensity={3}
      />

      <Pokemon3DModel
        modelUrl={modelUrl}
      />

      <Environment preset="city" />

      <OrbitControls
        enablePan={false}
        enableZoom={false}
        minDistance={8}
        maxDistance={8}
        autoRotate
        autoRotateSpeed={2}
      />
    </Canvas>
  );
}

export default Pokemon3DViewer;