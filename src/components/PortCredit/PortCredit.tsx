import React, { Suspense, useEffect, useMemo, useRef, RefObject } from "react";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { Physics, useBox, usePlane } from "@react-three/cannon";
import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
  SpotLight,
  useGLTF,
} from "@react-three/drei";
import * as THREE from "three";
import { Mesh, Vector3 } from "three";
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

type ColorBackgroundProps = {
  color: string;
};

function ColorBackground({ color }: ColorBackgroundProps) {
  const { scene } = useThree();

  useEffect(() => {
    const originalBackground = scene.background;
    scene.background = new THREE.Color(color);

    return () => {
      scene.background = originalBackground;
    };
  }, [scene, color]);

  return null;
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

// type PhysicsLetterProps = {
//   mesh: THREE.Mesh;
// };

// function PhysicsLetter({ mesh }: { mesh: Mesh }) {
//   // Ensure the bounding box is computed
//   if (!mesh.geometry.boundingBox) {
//     mesh.geometry.computeBoundingBox();
//   }

//   // Calculate the dimensions of the bounding box
//   const size = new Vector3();
//   mesh.geometry.boundingBox.getSize(size);

//   const mass = 98; // Adjust the mass as needed

//   const [ref] = useBox(() => ({
//     mass,
//     args: [size.x, size.y, size.z],
//     position: mesh.position.toArray(),
//   }));

//   return (
//     <mesh
//       ref={ref as RefObject<Mesh>}
//       geometry={mesh.geometry}
//       material={mesh.material}
//       castShadow
//       receiveShadow
//     />
//   );
// }

// type PhysicsLettersProps = {
//   gltfPath: string;
// };

// function PhysicsLetters({ gltfPath }: PhysicsLettersProps) {
//   const { scene } = useGLTF(gltfPath);

//   return (
//     <>
//       {scene.children.map((child, index) => {
//         if (child instanceof THREE.Mesh) {
//           return <PhysicsLetter key={index} mesh={child} />;
//         }
//         return null;
//       })}
//     </>
//   );
// }

function LimitedCamera() {
  return <PerspectiveCamera makeDefault position={[50, 20, -40]} />;
}

function GLTFViewer() {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Canvas
        linear
        onCreated={({ gl }) => {
          gl.toneMapping = THREE.CineonToneMapping;
          gl.toneMappingExposure = 0.5;
          gl.outputEncoding = THREE.sRGBEncoding;
        }}
        shadows
      >
        <Physics>
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
            intensity={5} // Adjust the intensity to make the sunlight look more natural
            position={[40, 20, 30]} // Adjust the position to control the light direction
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

          <Model receiveShadow castShadow />
          <Environment files={"/kloppenheim_06_puresky_1k.hdr"} />
          <ColorBackground color="#D1EFFF" />

          <Physics>
            <PhysicsLetters gltfPath="/Letters.glb" />
          </Physics>

          <OrbitControls />
        </Physics>
      </Canvas>
    </div>
  );
}

export default GLTFViewer;
