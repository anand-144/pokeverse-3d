import { useRef } from "react";
import { LoopOnce } from "three";
import {
  useGLTF,
  useAnimations,
} from "@react-three/drei";

function PokeballModel({
  onGenerate,
}) {
  const group = useRef();
  const animating = useRef(false);

  const { scene, animations } =
    useGLTF(
      "/models/pokeball/pokeball_ani.glb"
    );

  const { actions } =
    useAnimations(
      animations,
      group
    );

  const handleClick = () => {
    if (animating.current) return;

    animating.current = true;

    const action =
      actions?.["Pokeballanim"];

    if (action) {
      action.reset();
      action.setLoop(
        LoopOnce,
        1
      );
      action.clampWhenFinished =
        true;

      action.play();
    }

    setTimeout(() => {
      onGenerate();
      animating.current = false;
    }, 1200);
  };

  return (
    <primitive
      ref={group}
      object={scene}
      scale={1.4}
      position={[0, -0.4, 0]}
      onClick={handleClick}
    />
  );
}

export default PokeballModel;

useGLTF.preload(
  "/models/pokeball/pokeball_ani.glb"
);