import React, { Suspense, useEffect, useMemo, useRef } from "react";
import { Canvas, Object3DProps, useThree } from "@react-three/fiber";
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

        if (child.material instanceof THREE.MeshStandardMaterial) {
          if (child.material.map) {
            child.material.map.encoding = THREE.sRGBEncoding;
          }
          if (child.material.roughnessMap) {
            child.material.roughnessMap.encoding = THREE.LinearEncoding;
          }
          if (child.material.metalnessMap) {
            child.material.metalnessMap.encoding = THREE.LinearEncoding;
          }
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
// HELPER FUNCTION FOR 
// function DirectionalLightWithHelper(props) {
//   const dirLightRef = useRef<THREE.DirectionalLight>(null);
//   const { scene } = useThree();

//   useEffect(() => {
//     if (dirLightRef.current) {
//       const helper = new THREE.DirectionalLightHelper(dirLightRef.current, 5);
//       scene.add(helper);

//       // Clean up the helper when the component unmounts
//       return () => {
//         scene.remove(helper);
//         helper.dispose();
//       };
//     }
//   }, [scene]);

//   return (
//     <directionalLight
//       ref={dirLightRef}
//       castShadow
//       intensity={1.2}
//       position={[-5, 10, 10]}
//       shadow-mapSize-width={2048}
//       shadow-mapSize-height={2048}
//       shadow-camera-far={50} // Increase the shadow camera far plane to capture more shadows.
//       shadow-camera-near={0.1}
//       shadow-camera-top={30} // Increase the shadow camera's top and bottom planes.
//       shadow-camera-bottom={-30}
//       shadow-camera-left={-30} // Increase the shadow camera's left and right planes.
//       shadow-camera-right={30}
//       {...props}
//     />
//   );
// }

function GLTFViewer() {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Canvas
        linear
        onCreated={({ gl }) => {
          gl.toneMapping = THREE.ACESFilmicToneMapping;
          gl.toneMappingExposure = 0.8;
          gl.outputEncoding = THREE.sRGBEncoding;
        }}
        shadows={true}
      >
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <ambientLight intensity={0.25} />

        <directionalLight
          castShadow
          intensity={2}
          position={[-20, 10, -20]}
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
          shadow-camera-far={50} // Increase the shadow camera far plane to capture more shadows.
          shadow-camera-near={0.1}
          shadow-camera-top={30} // Increase the shadow camera's top and bottom planes.
          shadow-camera-bottom={-30}
          shadow-camera-left={-30} // Increase the shadow camera's left and right planes.
          shadow-camera-right={30}
        />
        <Suspense fallback={null}>
          <Model />
          <Environment preset="sunset" />
        </Suspense>
        <GradientBackground />
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default GLTFViewer;
