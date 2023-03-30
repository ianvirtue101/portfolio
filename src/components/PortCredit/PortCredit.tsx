import React, { Suspense, useEffect, useMemo, useRef } from "react";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
  SpotLight,
  useGLTF,
} from "@react-three/drei";
import * as THREE from "three";

type ModelProps = JSX.IntrinsicElements["group"];

function Model(props: ModelProps) {
  const { scene } = useGLTF("/PortCredit2-PreBake2.glb");

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
      grd.addColorStop(0, "#FFA8A8"); // Peach Puff color for the top part of the gradient
      grd.addColorStop(0.5, "#FFC5A1"); // Navajo White for the middle of the gradient
      grd.addColorStop(1, "#6A89F3"); // Lavender for the bottom part of the gradient
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

// function easeInOutQuart(t) {
//   return t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2;
// }

// function RotatingCamera() {
//   const cameraRef = useRef<THREE.PerspectiveCamera>(null);

//   useFrame(({ clock }) => {
//     if (cameraRef.current) {
//       const radius = 50;
//       const baseSpeed = 0.05;
//       const changeDirectionInterval = 5;

//       const elapsedTime = clock.getElapsedTime();
//       const progress =
//         (elapsedTime % changeDirectionInterval) / changeDirectionInterval;
//       const easedProgress = easeInOutQuart(progress);
//       const speed =
//         baseSpeed *
//         (Math.floor(elapsedTime / changeDirectionInterval) % 2 === 0
//           ? easedProgress
//           : 1 - easedProgress);

//       const initialAngle = Math.PI / 10;
//       const angle = elapsedTime * speed + initialAngle;

//       cameraRef.current.position.set(
//         radius * Math.sin(angle),
//         10,
//         radius * Math.cos(angle)
//       );
//       cameraRef.current.lookAt(0, 0, 0);
//     }
//   });

//   return <PerspectiveCamera ref={cameraRef} makeDefault position={[0, 0, 0]} />;
// }

function LimitedCamera() {
  return <PerspectiveCamera makeDefault position={[50, 20, -40]} />;
}

function GLTFViewer() {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Suspense fallback={null}>
        <Canvas
          linear
          onCreated={({ gl }) => {
            gl.toneMapping = THREE.CineonToneMapping;
            gl.toneMappingExposure = 0.5;
            gl.outputEncoding = THREE.sRGBEncoding;
          }}
          shadows
        >
          {/* <RotatingCamera /> */}
          {/* <PerspectiveCamera makeDefault position={[60, 25, -30]} /> */}

          <OrbitControls
            enablePan={false} // Disable panning
            minPolarAngle={Math.PI / 4} // Minimum polar angle (up-down movement)
            maxPolarAngle={(3 * Math.PI) / 4} // Maximum polar angle (up-down movement)
            // minAzimuthAngle={-Math.PI / 2} // Minimum azimuth angle (left-right movement)
            // maxAzimuthAngle={Math.PI / 2} // Maximum azimuth angle (left-right movement)
            target={[10, 5, -5]}
          />
          <LimitedCamera />

          <ambientLight intensity={2} color={"#87CEFA"} />
          {/* <DirectionalLightWithHelper /> */}
          <directionalLight
            color={"#FFA500"} // Sunlight color
            castShadow={true} // Enable shadow casting
            intensity={8} // Adjust the intensity to make the sunlight look more natural
            position={[10, 20, -30]} // Adjust the position to control the light direction
            shadow-mapSize-width={4096} // Increased shadow map resolution
            shadow-mapSize-height={4096} // Increased shadow map resolution
            shadow-camera-far={100}
            shadow-camera-near={0.1}
            shadow-camera-top={60}
            shadow-camera-bottom={-60}
            shadow-camera-left={-60}
            shadow-camera-right={60}
            shadow-bias={-0.005} // Adjusted shadow bias to reduce artifacts
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
          <Environment preset="dawn" />
          <GradientBackground />
          <OrbitControls />
        </Canvas>
      </Suspense>
    </div>
  );
}

export default GLTFViewer;
