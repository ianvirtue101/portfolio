import React, { Suspense, useEffect, useMemo, useRef } from "react";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
  useGLTF,
} from "@react-three/drei";
import * as THREE from "three";

type ModelProps = JSX.IntrinsicElements["group"];

function Model(props: ModelProps) {
  const { scene } = useGLTF("/cubicity_assembly_v17.gltf");

  useEffect(() => {
    scene.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.receiveShadow = true;
        child.castShadow = true;

        // Ensure that the material is a MeshStandardMaterial or a MeshPhysicalMaterial
        if (
          child.material instanceof THREE.MeshStandardMaterial ||
          child.material instanceof THREE.MeshPhysicalMaterial
        ) {
          // Set roughness and metalness to improve shadow quality
          child.material.roughness = 1;
          child.material.metalness = 0;

          if (child.material.map) {
            child.material.map.encoding = THREE.sRGBEncoding;
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
//       color={0xffa726}
//       castShadow
//       receiveShadow
//       intensity={2}
//       position={[10, 20, -30]}
//       shadow-mapSize-width={10120}
//       shadow-mapSize-height={10120}
//       // shadow-bias={10}
//       {...props}
//     />
//   );
// }

// function RotatingCamera() {
//   const cameraRef = useRef<THREE.PerspectiveCamera>(null);

//   useFrame(({ clock }) => {
//     if (cameraRef.current) {
//       const radius = 25;
//       const speed = 0.05; // Adjust this value to control the rotation speed
//       const angle = clock.getElapsedTime() * speed;
//       cameraRef.current.position.set(
//         radius * Math.sin(angle),
//         15,
//         // Adjust this value to control the camera height
//         radius * Math.cos(angle)
//       );
//       cameraRef.current.lookAt(0, 0, 0);
//     }
//   });

//   return <PerspectiveCamera ref={cameraRef} makeDefault position={[0, 0, 0]} />;
// }

function GLTFViewer() {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Suspense fallback={null}>
        <Canvas
          linear
          onCreated={({ gl }) => {
            gl.toneMapping = THREE.ACESFilmicToneMapping;
            gl.toneMappingExposure = 0.75;
            gl.outputEncoding = THREE.sRGBEncoding;
            gl.autoClear = true;
          }}
          shadows
        >
          {/* <RotatingCamera /> */}
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          <ambientLight intensity={0.75} />
          {/* <DirectionalLightWithHelper /> */}
          <directionalLight
            color={0xffeedd} // Sunlight color
            castShadow={true} // Enable shadow casting
            intensity={5} // Adjust the intensity to make the sunlight look more natural
            position={[10, 20, -40]} // Adjust the position to control the light direction
            shadow-mapSize-width={4096}
            shadow-mapSize-height={4096}
            shadowBias={0.005}
            shadow-camera-far={50}
            shadow-camera-near={1}
            shadow-camera-top={60}
            shadow-camera-bottom={-60}
            shadow-camera-left={-60}
            shadow-camera-right={60}
          />
          {/* <directionalLight
            castShadow
            position={[2.5, 8, 5]}
            shadow-mapSize={[1024, 1024]}
          >
            +{" "}
            <orthographicCamera
              attach="shadow-camera"
              args={[-10, 10, 10, -10]}
            />
            +{" "}
          </directionalLight> */}

          <Model receiveShadow castShadow />
          {/* <Environment preset="night" /> */}
          <GradientBackground />
          <OrbitControls />
        </Canvas>
      </Suspense>
    </div>
  );
}

export default GLTFViewer;
