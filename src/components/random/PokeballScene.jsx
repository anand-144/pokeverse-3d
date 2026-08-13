import { Canvas } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
} from "@react-three/drei";

import PokeballModel from "./PokeballModel";

function PokeballScene({
  loading,
  onGenerate,
}) {
  return (
    <div className="h-full w-full">
      <Canvas
        camera={{
          position: [0, 0, 6],
          fov: 40,
        }}
      >
        <ambientLight intensity={2} />

        <directionalLight
          position={[5, 5, 5]}
          intensity={3}
        />

        <directionalLight
          position={[-5, 5, 5]}
          intensity={2}
        />

        <PokeballModel
          loading={loading}
          onGenerate={onGenerate}
        />

        <Environment preset="city" />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
        />
      </Canvas>
    </div>
  );
}

export default PokeballScene;