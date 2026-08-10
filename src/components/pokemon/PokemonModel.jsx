import { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { LoopOnce } from "three";

function PokemonModel({
  model,
  scale = 1,
  position = [0, -1.5, 0],
  animation = null,
}) {
  const group = useRef();

  const attackSound = useRef(
    new Audio("/audio/pokemon/charizard.ogg")
  );

  const { scene, animations } = useGLTF(model);

  const { actions } = useAnimations(
    animations,
    group
  );

  useEffect(() => {
    console.log(
      "Animations:",
      animations.map(
        (animation) => animation.name
      )
    );

    // Pikachu Dance
    if (animation && actions[animation]) {
      actions[animation].reset();
      actions[animation].fadeIn(0.5);
      actions[animation].play();

      return () => {
        actions[animation]?.fadeOut(0.5);
      };
    }

    // Charizard Idle
    const idle =
      actions["pm0006_00_00_20010_defaultidle01"];

    idle?.reset();
    idle?.fadeIn(0.5);
    idle?.play();

    return () => {
      idle?.fadeOut(0.5);
    };
  }, [actions, animations, animation]);

  const handleAttack = () => {
    // Prevent Pikachu from attacking
    if (animation) return;

    const idle =
      actions["pm0006_00_00_20010_defaultidle01"];

    const attack =
      actions["pm0006_00_00_20410_attack02"];

    if (!attack) return;

    // Sync roar with animation
    setTimeout(() => {
      attackSound.current.currentTime = 0;
      attackSound.current.volume = 0.7;
      attackSound.current.play();
    }, 150);

    idle?.fadeOut(0.2);

    attack.reset();
    attack.setLoop(LoopOnce, 1);
    attack.clampWhenFinished = true;
    attack.play();

    const mixer = attack.getMixer();

    const onFinished = () => {
      attack.stop();

      idle?.reset();
      idle?.fadeIn(0.3);
      idle?.play();

      mixer.removeEventListener(
        "finished",
        onFinished
      );
    };

    mixer.addEventListener(
      "finished",
      onFinished
    );
  };

  return (
    <primitive
      ref={group}
      object={scene}
      scale={scale}
      position={position}
      onClick={handleAttack}
    />
  );
}

export default PokemonModel;