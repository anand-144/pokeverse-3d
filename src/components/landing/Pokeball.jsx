import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { useRef, useState } from "react";

function Pokeball({ onBurst }) {
  const group = useRef();

  const { scene } = useGLTF(
    "/models/pokeball/pokeball.glb"
  );

  const [burst, setBurst] = useState(false);

  const triggerBurst = () => {
    if (burst) return;

    setBurst(true);

    onBurst?.();

    setTimeout(() => {
      setBurst(false);
    }, 900);
  };

  useFrame((state, delta) => {
    if (!group.current) return;

    const t = state.clock.elapsedTime;

    group.current.position.y =
      Math.sin(t * 1.2) * 0.18;

    group.current.rotation.y = t * 0.22;

    if (burst) {
      group.current.rotation.z =
        Math.sin(t * 35) * 0.25;

      easing.damp3(
        group.current.scale,
        [20, 20, 20],
        0.2,
        delta
      );
    } else {
      easing.damp3(
        group.current.scale,
        [18, 18, 18],
        0.2,
        delta
      );

      easing.damp(
        group.current.rotation,
        "z",
        0,
        0.15,
        delta
      );
    }
  });

  return (
    <primitive
      ref={group}
      object={scene}
      position={[0, -0.1, 0]}
      rotation={[0.15, Math.PI, 0]}
      onClick={triggerBurst}
    />
  );
}

useGLTF.preload(
  "/models/pokeball/pokeball.glb"
);

export default Pokeball;