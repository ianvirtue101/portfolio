import React, { Suspense, useEffect, useMemo } from "react";
import { Canvas, Object3DProps } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
  useGLTF,
} from "@react-three/drei";
import * as THREE from "three";

type ModelProps = JSX.IntrinsicElements["group"];

function Model(props: ModelProps) {
  const { scene } = useGLTF("/cubicity_assembly_v04.gltf");

  useEffect(() => {
    scene.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.castShadow = true;
        child.receiveShadow = true;

        if (
          child.material instanceof THREE.MeshStandardMaterial &&
          child.material.map
        ) {
          child.material.map.encoding = THREE.sRGBEncoding;
          child.material.needsUpdate = true;
        }
      }
    });
  }, [scene]);

  return <primitive object={scene} {...props} />;
}

function GradientBackground() {
  const texture = useMemo(() => {
    const size = new THREE.Vector2(window.innerWidth, window.innerHeight);
    const gradient = new THREE.CanvasTexture(document.createElement("canvas"));
    gradient.image.width = size.x;
    gradient.image.height = size.y;
    const ctx = gradient.image.getContext("2d");
    if (ctx) {
      const grd = ctx.createLinearGradient(0, 0, 0, size.y);
      grd.addColorStop(0, "#4A90E2");
      grd.addColorStop(1, "#1A3B59");
      ctx.fillStyle = grd;
      ctx.fillRect(0, 0, size.x, size.y);
    }
    return gradient;
  }, []);

  return (
    <mesh>
      <boxGeometry args={[1000, 1000, 1000]} />
      <meshBasicMaterial map={texture} side={THREE.BackSide} />
    </mesh>
  );
}

function GLTFViewer() {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Canvas
        linear
        onCreated={({ gl }) => {
          gl.toneMapping = THREE.ACESFilmicToneMapping;
          gl.toneMappingExposure = 2;
          gl.outputEncoding = THREE.sRGBEncoding;
        }}
        shadows={true}
      >
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <ambientLight intensity={0.5} />
        <directionalLight
          castShadow
          intensity={1}
          position={[1, 1, 1]}
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
          shadow-camera-far={20}
          shadow-camera-near={0.1}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
          shadow-camera-left={-10}
          shadow-camera-right={10}
        />
        <Suspense fallback={null}>
          <Model />
          <Environment preset="city" />
        </Suspense>
        <GradientBackground />
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default GLTFViewer;
