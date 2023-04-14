import React, { Suspense, useEffect, useMemo, useRef, RefObject } from "react";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { PMREMGenerator, SpotLightHelper, UnsignedByteType } from "three";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader";
import { useTheme } from "../ThemeWrapper/ThemeWrapper";
import { Physics } from "@react-three/cannon";
import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
  SpotLight,
  useGLTF,
  useHelper,
} from "@react-three/drei";
import * as THREE from "three";
import { useFullscreenToggle } from "../FullScreenToggle/FullScreenToggle";
type ModelProps = JSX.IntrinsicElements["group"];
import "./portCredit.scss";

function Model(props: ModelProps) {
  const { darkMode } = useTheme();
  const gltfPath = useMemo(
    () =>
      darkMode
        ? "/PortCredit2-PreBakeNightTime3.glb"
        : "/PortCredit2-PreBake3.glb",
    [darkMode]
  );
  const gltf = useGLTF(gltfPath);
  const groupRef = useRef<THREE.Group>(null);

  useEffect(() => {
    if (groupRef.current && gltf.scene) {
      const clonedScene = gltf.scene.clone();

      clonedScene.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          child.receiveShadow = true;
          child.castShadow = true;

          if (
            child.material instanceof THREE.MeshStandardMaterial ||
            child.material instanceof THREE.MeshPhysicalMaterial
          ) {
            child.material.roughness = 1;
            child.material.metalness = 0;

            if (child.material.map) {
              child.material.map.encoding = THREE.sRGBEncoding;
            }

            child.material.needsUpdate = true;
          }
        }
      });

      groupRef.current.add(clonedScene);
    }

    return () => {
      if (groupRef.current) {
        groupRef.current.children.forEach((child) => {
          child.parent?.remove(child);
          if (child instanceof THREE.Mesh) {
            child.geometry.dispose();
            child.material.dispose();

            if (child.material.map) {
              child.material.map.dispose();
            }
          }
        });
      }
    };
  }, [gltf.scene, darkMode]);
  return <group ref={groupRef as RefObject<THREE.Group>} {...props} />;
}

function EnvironmentManager() {
  const { darkMode } = useTheme();
  const { gl, scene } = useThree();

  useEffect(() => {
    const pmremGenerator = new PMREMGenerator(gl);
    pmremGenerator.compileEquirectangularShader();

    const loadEnvironment = (path: string) => {
      new RGBELoader().load(path, (texture: THREE.Texture) => {
        const envMap = pmremGenerator.fromEquirectangular(texture).texture;
        scene.environment = envMap;
        texture.dispose();
      });
    };

    // Dispose the environment map when darkMode changes
    const disposeEnvMap = () => {
      if (scene.environment) {
        scene.environment.dispose();
      }
    };

    // Call the disposeEnvMap function
    disposeEnvMap();

    // Load the environment map
    loadEnvironment(
      darkMode ? "/shanghai_bund_1k.hdr" : "/kloppenheim_06_puresky_1k.hdr"
    );

    // Call the disposeEnvMap function when the component is unmounted
    return () => {
      disposeEnvMap();
    };
  }, [darkMode, gl, scene]);

  return null;
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

function LimitedCamera() {
  return <PerspectiveCamera makeDefault position={[50, 20, -40]} />;
}

function GLTFViewer() {
  const { darkMode } = useTheme();
  const { containerRef, handleDoubleClick, handleTouch } =
    useFullscreenToggle();

  return (
    <div
      ref={containerRef}
      onDoubleClick={handleDoubleClick}
      onTouchStart={handleTouch}
      className="canvas-container"
    >
      <Canvas
        linear
        onCreated={({ gl }) => {
          gl.setPixelRatio(window.devicePixelRatio);
          gl.toneMapping = THREE.CineonToneMapping;
          gl.toneMappingExposure = 0.5;
          gl.outputEncoding = THREE.sRGBEncoding;
        }}
        shadows
      >
        {/* <Physics> */}
        <OrbitControls
          enablePan={false} // Disable panning
          minPolarAngle={Math.PI / 4} // Minimum polar angle (up-down movement)
          maxPolarAngle={(3 * Math.PI) / 4} // Maximum polar angle (up-down movement)
          // minAzimuthAngle={-Math.PI / 2} // Minimum azimuth angle (left-right movement)
          // maxAzimuthAngle={Math.PI / 2} // Maximum azimuth angle (left-right movement)
          target={[10, 5, -5]}
        />
        <LimitedCamera />

        <ambientLight
          intensity={darkMode ? 1 : 2}
          color={darkMode ? "#2F4F4F" : "#ADD8E6"}
        />
        {/* <DirectionalLightWithHelper /> */}
        <directionalLight
          color={darkMode ? "#96c1ff" : "#FFA500"}
          castShadow={true}
          intensity={darkMode ? 2 : 5}
          position={darkMode ? [10, 30, 20] : [40, 20, 30]} // Adjust the position to control the light direction
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
        <EnvironmentManager />
        <ColorBackground color={darkMode ? "#152238" : "#D1EFFF"} />

        {/* <Physics>
            <PhysicsLetters gltfPath="/Letters.glb" />
          </Physics> */}

        <OrbitControls />
        {/* </Physics> */}
      </Canvas>
    </div>
  );
}

export default GLTFViewer;
