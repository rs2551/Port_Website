import React, { Suspense, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, useAnimations } from "@react-three/drei";
import * as THREE from 'three';
import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const { scene, animations } = useGLTF("./planet/scene.gltf");
  const { actions } = useAnimations(animations, scene);
  const [isAnimationStarted, setAnimationStarted] = useState(false);

  useEffect(() => {
    if (actions && actions[Object.keys(actions)[0]]) {
      const action = actions[Object.keys(actions)[0]];
      action.reset().play();
      action.paused = true;

      setTimeout(() => {
        action.paused = false;
        setAnimationStarted(true);
      }, 100);
    }
  }, [actions]);

  useFrame((state) => {
    if (isAnimationStarted) {
      state.invalidate();
    }
  });

  return (
    <mesh>
      <ambientLight intensity={0.7} />
      <pointLight position={[10, 10, 10]} intensity={0.8} />
      <primitive
        object={scene}
        scale={isMobile ? 0.92 : 1.1} // Smaller scale for mobile
        position={isMobile ? [-0.5, -1.5, -0.5] : [-2, -1.25, -0.7]} // Adjusted position for mobile
        rotation={[0, 1.3, 0]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: isMobile ? 35 : 25 }} // Slightly larger FOV for mobile
      gl={{
        preserveDrawingBuffer: true,
        toneMapping: THREE.ACESFilmicToneMapping,
        outputEncoding: THREE.sRGBEncoding,
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          autoRotate={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;