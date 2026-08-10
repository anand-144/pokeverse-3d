import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import PokemonModel from "./PokemonModel";

function PokemonCanvas({
  model,
  scale = 1,
  position = [0, -1.5, 0],
  animation = null,
}) {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
      <ambientLight intensity={2} />

      <directionalLight
        position={[5, 5, 5]}
        intensity={2}
      />

      <PokemonModel
        model={model}
        scale={scale}
        position={position}
        animation={animation}
      />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate={false}
      />
    </Canvas>
  );
}

export default PokemonCanvas;