import { useAnimations, useGLTF, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
useGLTF.preload("/robot_playground.glb");

export default function Modal() {
  const group = useRef();
  const scroll = useScroll();
  const { nodes, materials, animations, scene } = useGLTF(
    "/robot_playground.glb"
  );
  const { actions, clips } = useAnimations(animations, group);

  useEffect(() => {
    actions["Experiment"].play().paused = true;
    group.current.position.y = -2.5;
  }, []);

  useFrame(
    () =>
      (actions["Experiment"].time =
        (actions["Experiment"].getClip().duration * scroll.offset) / 4)
  );

  return (
    <group ref={group}>
      <primitive object={scene} />
    </group>
  );
}
