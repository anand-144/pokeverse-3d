import { Canvas } from "@react-three/fiber";
import {
  Environment,
  Float,
  OrbitControls,
  Sparkles,
} from "@react-three/drei";
import { Suspense, Component } from "react";

import Pokeball from "./Pokeball";

class CanvasErrorBoundary extends Component {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex h-full items-center justify-center text-slate-400">
          Model unavailable
        </div>
      );
    }

    return this.props.children;
  }
}

function Loader() {
  return (
    <div className="flex h-full items-center justify-center text-slate-400">
      Loading model...
    </div>
  );
}

function PokeballCanvas() {
  return (
    <div className="relative h-full w-full overflow-hidden">
      <CanvasErrorBoundary>
        <Suspense fallback={<Loader />}>
          <Canvas
            camera={{
              position: [0, 0, 7],
              fov: 38,
            }}
          >
            <ambientLight intensity={2} />

            <directionalLight
              position={[5, 5, 5]}
              intensity={5}
            />

            <pointLight
              position={[3, 3, 2]}
              intensity={10}
              color="#E23B2E"
            />

            <pointLight
              position={[-3, -2, 2]}
              intensity={6}
              color="#ffffff"
            />

            <pointLight
              position={[-4, 2, -2]}
              intensity={3}
              color="#4C7CFF"
            />

            <pointLight
              position={[0, 0, 2]}
              intensity={15}
              color="#ef4444"
            />

            <Environment preset="city" />

            <Float
              speed={1.3}
              rotationIntensity={0.25}
              floatIntensity={0.8}
            >
              <Pokeball />
            </Float>

            <OrbitControls
              enableZoom={false}
              enablePan={false}
              autoRotate
              autoRotateSpeed={0.45}
              enableDamping
              dampingFactor={0.08}
            />
          </Canvas>
        </Suspense>
      </CanvasErrorBoundary>
    </div>
  );
}

export default PokeballCanvas;