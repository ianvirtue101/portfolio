import React, { Suspense } from "react";
import { Canvas, Object3DProps } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, useGLTF } from "@react-three/drei";

function Model(props: Object3DProps) {
  const { scene } = useGLTF("/cubicity_assembly_v01.glb");
  return <primitive object={scene} {...props} />;
}

function GLTFViewer() {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <ambientLight intensity={0.5} />
        <directionalLight intensity={0.8} position={[1, 1, 1]} />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default GLTFViewer;
