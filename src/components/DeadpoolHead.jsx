import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function DeadpoolHead({
  wireframeMode = false,
  mousePos = { x: 0, y: 0 },
  ...props
}) {
  const { nodes, materials } = useGLTF(
    "/deadpool/deadpoolmask.glb",
  );
  const meshGroupRef = useRef();

  useFrame((state, delta) => {
    if (meshGroupRef.current) {
      const targetRotationY = mousePos.x * 0.01;
      const targetRotationX = -mousePos.y * 0.01;

      meshGroupRef.current.rotation.y = THREE.MathUtils.lerp(
        meshGroupRef.current.rotation.y,
        targetRotationY,
        delta * 3,
      );
      meshGroupRef.current.rotation.x = THREE.MathUtils.lerp(
        meshGroupRef.current.rotation.x,
        targetRotationX,
        delta * 3,
      );
    }
  });

  const renderMaterial = (originalMaterial) => {
    if (wireframeMode) {
      return (
        <meshBasicMaterial
          wireframe
          color="#ffffff"
          transparent
          opacity={0.08}
        />
      );
    }
    return <primitive object={originalMaterial} attach="material" />;
  };

  return (
    <group {...props} dispose={null}>
      <group ref={meshGroupRef}>
        <mesh 
          rotation={[-0.15, 0, 0]} 
          position={[0, 0.5, 0]}
          geometry={nodes.mesh_0.geometry}
        >
          {renderMaterial(nodes.mesh_0.material)}
        </mesh>
      </group>
    </group>
  );
}

useGLTF.preload("/deadpool/deadpoolmask.glb");
