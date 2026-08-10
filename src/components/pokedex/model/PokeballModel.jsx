import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useMemo, useRef, useState } from "react";
import * as THREE from "three";

function Ball({
  path,
  position,
  scale = 1,
  speed = 1,
  correctionRotation = [0, 0, 0],
}) {
  const group = useRef();

  const [dragging, setDragging] = useState(false);
  const [clicked, setClicked] = useState(false);

  const lastMouse = useRef({
    x: 0,
    y: 0,
  });

  const rotationTarget = useRef({
    x: 0,
    y: 0,
  });

  const { scene } = useGLTF(path);

  const normalizedScene = useMemo(() => {
    const clone = scene.clone();

    const box = new THREE.Box3().setFromObject(clone);
    const size = box.getSize(new THREE.Vector3());

    const maxAxis = Math.max(
      size.x,
      size.y,
      size.z
    );

    clone.scale.setScalar(1 / maxAxis);

    return clone;
  }, [scene]);

  const handlePointerDown = (e) => {
    e.stopPropagation();

    setDragging(true);

    document.body.style.cursor = "grabbing";

    lastMouse.current = {
      x: e.clientX,
      y: e.clientY,
    };
  };

  const handlePointerUp = () => {
    setDragging(false);

    document.body.style.cursor = "grab";
  };

  const handlePointerMove = (e) => {
    if (!dragging) return;

    const deltaX =
      e.clientX - lastMouse.current.x;

    const deltaY =
      e.clientY - lastMouse.current.y;

    rotationTarget.current.y += deltaX * 0.01;
    rotationTarget.current.x += deltaY * 0.01;

    lastMouse.current = {
      x: e.clientX,
      y: e.clientY,
    };
  };

  const handleClick = (e) => {
    e.stopPropagation();

    setClicked(true);

    setTimeout(() => {
      setClicked(false);
    }, 350);
  };

  useFrame((state) => {
    if (!group.current) return;

    const t = state.clock.elapsedTime;

    // Floating
    const hoverY =
      Math.sin(t * speed) * 0.18;

    // Click bounce
    const bounce =
      clicked
        ? Math.sin(t * 25) * 0.3
        : 0;

    group.current.position.y =
      position[1] +
      hoverY +
      bounce;

    // Drag rotation
    group.current.rotation.x +=
      (rotationTarget.current.x -
        group.current.rotation.x) *
      0.08;

    group.current.rotation.y +=
      (rotationTarget.current.y -
        group.current.rotation.y) *
      0.08;

    // Click spin
    if (clicked) {
      group.current.rotation.z += 0.08;
    }

    // Idle pulse
    const pulse =
      1 +
      Math.sin(t * 2 + speed) * 0.04;

    const clickScale = clicked
      ? 1.25
      : 1;

    const finalScale =
      scale *
      pulse *
      clickScale;

    group.current.scale.lerp(
      new THREE.Vector3(
        finalScale,
        finalScale,
        finalScale
      ),
      0.15
    );
  });

  return (
    <group
      ref={group}
      position={position}
      onClick={handleClick}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
      onPointerMove={handlePointerMove}
    >
      <group rotation={correctionRotation}>
        <primitive object={normalizedScene} />
      </group>
    </group>
  );
}

function PokeballModel() {
  return (
    <>
      {/* Center Pokeball */}
      <Ball
        path="/models/pokeball/pokeball.glb"
        position={[0, 0.3, 2]}
        scale={4.5}
        speed={1}
        correctionRotation={[
          -Math.PI / 2.6,
          0,
          0,
        ]}
      />

      {/* Great Ball */}
      <Ball
        path="/models/pokeball/greatball.glb"
        position={[0, 3.6, 0]}
        scale={2.6}
        speed={1.4}
        correctionRotation={[
          -Math.PI / 2.1,
          0,
          0,
        ]}
      />

      {/* Master Ball */}
      <Ball
        path="/models/pokeball/master_ball.glb"
        position={[-3.5, 0, 0]}
        scale={2.8}
        speed={1.2}
      />

      {/* Ultra Ball */}
      <Ball
        path="/models/pokeball/ultraball.glb"
        position={[3.8, 0, 0]}
        scale={2.8}
        speed={1.6}
      />

      {/* Premier Ball */}
      <Ball
        path="/models/pokeball/premierball.glb"
        position={[0, -4, 0]}
        scale={1.9}
        speed={1.3}
      />
    </>
  );
}

useGLTF.preload("/models/pokeball/pokeball.glb");
useGLTF.preload("/models/pokeball/greatball.glb");
useGLTF.preload("/models/pokeball/master_ball.glb");
useGLTF.preload("/models/pokeball/ultraball.glb");
useGLTF.preload("/models/pokeball/premierball.glb");

export default PokeballModel;