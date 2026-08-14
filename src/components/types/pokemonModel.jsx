import { useRef } from "react";
import { LoopOnce } from "three";
import {
  useGLTF,
  useAnimations,
} from "@react-three/drei";

function PokemonModel(props) {
  const group = useRef();

  const { scene, animations } =
    useGLTF(
      "/models/pokemon/typlosion_hisuian.glb"
    );

  const { actions } =
    useAnimations(
      animations,
      group
    );

  const handleClick = () => {
    const action =
      actions[
        "Armature|Armature|pm0157_00_41_ba21_tokusyu01|Base Layer"
      ];

    if (!action) return;

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
      onClick={handleClick}
      onPointerOver={() => {
        document.body.style.cursor =
          "pointer";
      }}
      onPointerOut={() => {
        document.body.style.cursor =
          "default";
      }}
      {...props}
    />
  );
}

useGLTF.preload(
  "/models/pokemon/typlosion_hisuian.glb"
);

export default PokemonModel;