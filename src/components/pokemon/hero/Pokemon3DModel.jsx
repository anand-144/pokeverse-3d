import { useGLTF } from "@react-three/drei";
import { useMemo } from "react";
import * as THREE from "three";

function Pokemon3DModel({
    modelUrl,
}) {
    const { scene } =
        useGLTF(modelUrl);

    const model =
        useMemo(() => {
            const clone =
                scene.clone(true);

            const box =
                new THREE.Box3().setFromObject(
                    clone
                );

            const size =
                box.getSize(
                    new THREE.Vector3()
                );

            const center =
                box.getCenter(
                    new THREE.Vector3()
                );

            const maxAxis = Math.max(
                size.x,
                size.y,
                size.z
            );

            // Same visual size for every Pokémon
            const TARGET_SIZE = 1.2;

            const scale =
                TARGET_SIZE / maxAxis;

            clone.scale.setScalar(
                scale
            );

            // Recalculate after scaling
            const scaledBox =
                new THREE.Box3().setFromObject(
                    clone
                );

            const scaledCenter =
                scaledBox.getCenter(
                    new THREE.Vector3()
                );

            const scaledSize =
                scaledBox.getSize(
                    new THREE.Vector3()
                );

            // Perfect center
            clone.position.set(
                -scaledCenter.x,
                -scaledCenter.y +
                scaledSize.y * 0.15,
                -scaledCenter.z
            );

            clone.traverse((child) => {
                if (child.isMesh) {
                    child.castShadow = true;
                    child.receiveShadow = true;
                }
            });

            return clone;
        }, [scene]);

    return (
        <group position={[0, -3, 0]}>
            <primitive object={model} />
        </group>
    );
}

export default Pokemon3DModel;