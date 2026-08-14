import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

function PokeballModel({
  onGenerate,
}) {
  const group = useRef();

  const [hovered, setHovered] =
    useState(false);

  const [clicked, setClicked] =
    useState(false);

  const { scene } = useGLTF(
    "/models/pokeball/pokeball.glb"
  );

  useFrame((state) => {
    if (!group.current) return;

    const time =
      state.clock.elapsedTime;

    // Rotation
    group.current.rotation.y =
      time * 0.8;

    // Floating animation
    group.current.position.y =
      -1 +
      Math.sin(time * 2) * 0.15;

    // Hover scale
    const targetScale =
      clicked
        ? 2.1
        : hovered
        ? 2.6
        : 2.4;

    group.current.scale.x +=
      (targetScale -
        group.current.scale.x) *
      0.08;

    group.current.scale.y +=
      (targetScale -
        group.current.scale.y) *
      0.08;

    group.current.scale.z +=
      (targetScale -
        group.current.scale.z) *
      0.08;
  });

  const handleClick = () => {
    setClicked(true);

    setTimeout(() => {
      setClicked(false);
      onGenerate?.();
    }, 250);
  };

  return (
    <primitive
      ref={group}
      object={scene}
      scale={2.4}
      position={[0, -1, 0]}
      onClick={handleClick}
      onPointerOver={() =>
        setHovered(true)
      }
      onPointerOut={() =>
        setHovered(false)
      }
    />
  );
}

export default PokeballModel;

useGLTF.preload(
  "/models/pokeball/pokeball.glb"
);