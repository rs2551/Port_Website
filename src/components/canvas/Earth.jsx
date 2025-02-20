import React, { Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, useAnimations } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Earth = () => {
  const { scene, animations } = useGLTF("./desktop_pc/scene.gltf");
  const { actions } = useAnimations(animations, scene);

  useEffect(() => {
    if (actions && animations.length > 0) {
      const defaultAction = actions[Object.keys(actions)[0]];
      defaultAction.setEffectiveTimeScale(1.0); // Slightly faster for smoothness
      defaultAction.play();
    }
  }, [actions, animations]);

  return (
    <primitive
      object={scene}
      scale={0.0015}
      position={[2.2, -1.25, -1.5]}
    />
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      dpr={[0.8, 1]} // Slightly increased DPR for quality
      gl={{ antialias: true, preserveDrawingBuffer: false }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 7, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <ambientLight intensity={0.9} /> {/* Balanced lighting for performance */}
        
        <OrbitControls
          autoRotate={false}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;