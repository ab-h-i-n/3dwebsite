"use client";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Modal from "./Modal";
import { ScrollControls } from "@react-three/drei";

export default function Scene() {
  return (
    <div className="h-screen">
      <Canvas
        className="relative h-svh"
        gl={{ antialias: true }}
        dpr={[1, 1.5]}
      >
        <directionalLight position={[-5, -5, 5]} intensity={4} />
        // Add your 3D models here
        <Suspense fallback={null}>
          <ScrollControls damping={0.5} pages={3}>
            <Modal />
          </ScrollControls>
        </Suspense>
      </Canvas>
    </div>
  );
}
