import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

function PokeballModel({
  onGenerate,
}) {
  const group = useRef();

  const { scene } = useGLTF(
    "/models/pokeball/pokeball.glb"
  );

  useFrame((state) => {
    group.current.rotation.y =
      state.clock.elapsedTime * 0.6;
  });

  const handleClick = () => {
    onGenerate();
  };

  return (
    <primitive
      ref={group}
      object={scene}
      scale={2.4}
      onClick={handleClick}
      position={[0, -1, 0]}
    />
  );
}

export default PokeballModel;