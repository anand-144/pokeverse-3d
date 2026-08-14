import { useEffect, useRef, useState } from "react";
import { LoopOnce } from "three";
import {
  useGLTF,
  useAnimations,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

function PokeballModel({
  onGenerate,
}) {
  const group = useRef();

  const animating = useRef(false);

  const [hovered, setHovered] =
    useState(false);

  const { scene, animations } =
    useGLTF(
      "/models/pokeball/pokeball_ani.glb"
    );

  const { actions } =
    useAnimations(
      animations,
      group
    );

  useFrame(() => {
    if (!group.current) return;

    const targetScale =
      hovered && !animating.current
        ? 1.5
        : 1.4;

    group.current.scale.lerp(
      {
        x: targetScale,
        y: targetScale,
        z: targetScale,
      },
      0.08
    );

    if (
      hovered &&
      !animating.current
    ) {
      group.current.rotation.y +=
        0.01;
    }
  });

  useEffect(() => {
    const action =
      actions?.["Pokeballanim"];

    if (!action) return;

    const handleFinished = () => {
      animating.current = false;

      onGenerate?.();
    };

    action
      .getMixer()
      .addEventListener(
        "finished",
        handleFinished
      );

    return () => {
      action
        .getMixer()
        .removeEventListener(
          "finished",
          handleFinished
        );
    };
  }, [actions, onGenerate]);

  const handleClick = () => {
    if (animating.current)
      return;

    const action =
      actions?.["Pokeballanim"];

    if (!action) {
      onGenerate?.();
      return;
    }

    animating.current = true;

    action.reset();

    action.setLoop(
      LoopOnce,
      1
    );

    action.clampWhenFinished =
      true;

    action.play();
  };

  return (
    <primitive
      ref={group}
      object={scene}
      scale={1.4}
      position={[0, -0.4, 0]}
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
  "/models/pokeball/pokeball_ani.glb"
);