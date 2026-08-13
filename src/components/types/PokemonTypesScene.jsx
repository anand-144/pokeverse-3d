import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
} from "@react-three/drei";

import PokemonModel from './pokemonModel';

function PokemonTypesScene() {
  return (
    <Canvas camera={{ position: [0, 0, 6] }}>
      <ambientLight intensity={2} />

      <directionalLight
        position={[5, 5, 5]}
        intensity={3}
      />

      <PokemonModel
        scale={4.5}
        position={[0, -1, 0]}
      />

      <Environment preset="city" />

      <OrbitControls
        enableZoom={false}
        autoRotate
        autoRotateSpeed={2}
      />
    </Canvas>
  );
}

export default PokemonTypesScene;