"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, Text } from "@react-three/drei";
import * as THREE from "three";
import { MotionValue, useMotionValueEvent } from "framer-motion";
import { pipelineLayers } from "./pipelineData";

// ─── Shared scroll ref (avoids re-renders) ───
const scrollRef = { current: 0 };

// ─── Camera Rig: flies through the scene based on scroll ───
function CameraRig() {
  const { camera } = useThree();

  useFrame((_, delta) => {
    const t = scrollRef.current;

    // Camera path: starts pulled back, flies forward through nodes, then pulls back
    const targetZ = 12 - t * 28; // from z=12 to z=-16
    const targetY = 1.5 + Math.sin(t * Math.PI) * 1.2; // gentle arc up then down
    const targetX = Math.sin(t * Math.PI * 2) * 0.8; // subtle side sway

    camera.position.x += (targetX - camera.position.x) * 3 * delta;
    camera.position.y += (targetY - camera.position.y) * 3 * delta;
    camera.position.z += (targetZ - camera.position.z) * 3 * delta;

    // Look slightly ahead of current position
    const lookZ = camera.position.z - 4;
    camera.lookAt(0, 0.5, lookZ);
  });

  return null;
}

// ─── Floating Data Particles ───
function DataParticles({ count = 200 }: { count?: number }) {
  const meshRef = useRef<THREE.InstancedMesh>(null!);
  const dummy = useMemo(() => new THREE.Object3D(), []);

  const particles = useMemo(() => {
    const arr = [];
    for (let i = 0; i < count; i++) {
      arr.push({
        position: new THREE.Vector3(
          (Math.random() - 0.5) * 8,
          (Math.random() - 0.5) * 6,
          (Math.random() - 0.5) * 40,
        ),
        speed: 0.2 + Math.random() * 0.8,
        offset: Math.random() * Math.PI * 2,
        scale: 0.015 + Math.random() * 0.03,
      });
    }
    return arr;
  }, [count]);

  useFrame((state) => {
    const time = state.clock.elapsedTime;
    const t = scrollRef.current;

    particles.forEach((p, i) => {
      // Particles flow in the -Z direction (same as camera movement)
      const flowSpeed = p.speed * (0.5 + t * 2);
      let z = p.position.z - time * flowSpeed * 0.3;
      // Wrap around
      if (z < -22) z += 44;
      if (z > 22) z -= 44;

      const x = p.position.x + Math.sin(time * 0.5 + p.offset) * 0.3;
      const y = p.position.y + Math.cos(time * 0.3 + p.offset) * 0.2;

      dummy.position.set(x, y, z);
      const s = p.scale * (0.8 + Math.sin(time * 2 + p.offset) * 0.4);
      dummy.scale.set(s, s, s);
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
    });

    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <sphereGeometry args={[1, 8, 8]} />
      <meshBasicMaterial color="#6366f1" transparent opacity={0.6} />
    </instancedMesh>
  );
}

// ─── Glowing Connection Beams between nodes ───
function ConnectionBeam({
  start,
  end,
  color = "#4f46e5",
}: {
  start: THREE.Vector3;
  end: THREE.Vector3;
  color?: string;
}) {
  const ref = useRef<THREE.Mesh>(null!);

  const { midpoint, length, rotation } = useMemo(() => {
    const mid = new THREE.Vector3().addVectors(start, end).multiplyScalar(0.5);
    const len = start.distanceTo(end);
    const dir = new THREE.Vector3().subVectors(end, start).normalize();
    const rot = new THREE.Euler();
    const quat = new THREE.Quaternion().setFromUnitVectors(
      new THREE.Vector3(0, 1, 0),
      dir,
    );
    rot.setFromQuaternion(quat);
    return { midpoint: mid, length: len, rotation: rot };
  }, [start, end]);

  useFrame((state) => {
    if (ref.current) {
      const mat = ref.current.material as THREE.MeshBasicMaterial;
      mat.opacity = 0.15 + Math.sin(state.clock.elapsedTime * 2) * 0.1;
    }
  });

  return (
    <mesh ref={ref} position={midpoint} rotation={rotation}>
      <cylinderGeometry args={[0.008, 0.008, length, 4]} />
      <meshBasicMaterial color={color} transparent opacity={0.2} />
    </mesh>
  );
}

// ─── Single Pipeline Node (3D box with glow) ───
function PipelineNode3D({
  position,
  layer,
  index,
}: {
  position: [number, number, number];
  layer: (typeof pipelineLayers)[0];
  index: number;
}) {
  const groupRef = useRef<THREE.Group>(null!);
  const glowRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const time = state.clock.elapsedTime;
    const t = scrollRef.current;

    // Calculate distance from camera to this node
    const camZ = 12 - t * 28;
    const dist = Math.abs(camZ - position[2]);

    // Node pulses when camera is close
    const proximity = Math.max(0, 1 - dist / 6);
    const pulseScale = 1 + proximity * 0.12 * Math.sin(time * 3);

    if (groupRef.current) {
      groupRef.current.scale.setScalar(pulseScale);
      // Gentle rotation
      groupRef.current.rotation.y =
        Math.sin(time * 0.4 + index) * 0.08 + proximity * 0.1;
    }

    // Glow intensity based on proximity
    if (glowRef.current) {
      const mat = glowRef.current.material as THREE.MeshBasicMaterial;
      mat.opacity = 0.05 + proximity * 0.25;
    }
  });

  // Colors per layer
  const colors = ["#818cf8", "#6366f1", "#4f46e5", "#4338ca", "#3730a3"];
  const color = colors[index % colors.length];

  return (
    <group ref={groupRef} position={position}>
      <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.3}>
        {/* Main box */}
        <mesh>
          <boxGeometry args={[2.4, 1.4, 0.15]} />
          <meshStandardMaterial
            color="#0a0a0a"
            metalness={0.8}
            roughness={0.2}
            emissive={color}
            emissiveIntensity={0.15}
          />
        </mesh>

        {/* Edge glow frame */}
        <mesh>
          <boxGeometry args={[2.5, 1.5, 0.05]} />
          <meshBasicMaterial
            color={color}
            transparent
            opacity={0.12}
            wireframe
          />
        </mesh>

        {/* Inner glow sphere */}
        <mesh ref={glowRef} scale={[3, 2, 1]}>
          <sphereGeometry args={[1, 16, 16]} />
          <meshBasicMaterial color={color} transparent opacity={0.08} />
        </mesh>

        {/* Layer number */}
        <Text
          position={[-0.95, 0.45, 0.09]}
          fontSize={0.1}
          color="#666"
          anchorX="left"
          anchorY="top"
        >
          {`LAYER ${layer.number}`}
        </Text>

        {/* Title */}
        <Text
          position={[0, 0.1, 0.09]}
          fontSize={0.22}
          color="white"
          anchorX="center"
          anchorY="middle"
          maxWidth={2}
        >
          {layer.title}
        </Text>

        {/* Description */}
        <Text
          position={[0, -0.2, 0.09]}
          fontSize={0.1}
          color="#888"
          anchorX="center"
          anchorY="middle"
          maxWidth={2}
        >
          {layer.description}
        </Text>

        {/* Tech tags as a single line */}
        <Text
          position={[0, -0.48, 0.09]}
          fontSize={0.07}
          color="#555"
          anchorX="center"
          anchorY="middle"
          maxWidth={2.2}
        >
          {layer.technologies.join("  ·  ")}
        </Text>
      </Float>
    </group>
  );
}

// ─── Background Grid Floor ───
function GridFloor() {
  return (
    <gridHelper
      args={[60, 60, "#1a1a2e", "#1a1a2e"]}
      position={[0, -2, 0]}
      rotation={[0, 0, 0]}
    />
  );
}

// ─── Ambient floating geometry (background decoration) ───
function FloatingGeometry() {
  const groupRef = useRef<THREE.Group>(null!);

  const shapes = useMemo(() => {
    const arr = [];
    for (let i = 0; i < 15; i++) {
      arr.push({
        position: [
          (Math.random() - 0.5) * 12,
          (Math.random() - 0.5) * 6,
          (Math.random() - 0.5) * 40,
        ] as [number, number, number],
        rotation: Math.random() * Math.PI,
        scale: 0.1 + Math.random() * 0.2,
        speed: 0.2 + Math.random() * 0.5,
        type: Math.random() > 0.5 ? "oct" : "ico",
      });
    }
    return arr;
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <group ref={groupRef}>
      {shapes.map((s, i) => (
        <Float
          key={i}
          speed={s.speed}
          rotationIntensity={0.4}
          floatIntensity={0.5}
        >
          <mesh
            position={s.position}
            rotation={[s.rotation, s.rotation, 0]}
            scale={s.scale}
          >
            {s.type === "oct" ? (
              <octahedronGeometry args={[1]} />
            ) : (
              <icosahedronGeometry args={[1]} />
            )}
            <meshStandardMaterial
              color="#4338ca"
              transparent
              opacity={0.08}
              wireframe
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

// ─── Main Scene ───
function Scene() {
  // Node positions along Z axis (camera flies through these)
  const nodePositions: [number, number, number][] = [
    [0, 0, 6], // Application - closest to start
    [-0.5, 0.3, 0], // Business Logic
    [0.5, -0.2, -6], // Data Layer
    [-0.3, 0.1, -12], // Infrastructure
    [0, 0, -18], // Architecture - furthest
  ];

  // Connection beams between sequential nodes
  const connections = nodePositions.slice(0, -1).map((pos, i) => ({
    start: new THREE.Vector3(...pos),
    end: new THREE.Vector3(...nodePositions[i + 1]),
  }));

  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.15} />
      <pointLight position={[5, 5, 5]} intensity={0.5} color="#818cf8" />
      <pointLight position={[-5, 3, -10]} intensity={0.3} color="#6366f1" />
      <pointLight position={[0, -2, -5]} intensity={0.2} color="#4f46e5" />

      {/* Fog for depth */}
      <fog attach="fog" args={["#000000", 8, 30]} />

      {/* Camera controller */}
      <CameraRig />

      {/* Pipeline nodes */}
      {pipelineLayers.map((layer, i) => (
        <PipelineNode3D
          key={layer.id}
          position={nodePositions[i]}
          layer={layer}
          index={i}
        />
      ))}

      {/* Connection beams */}
      {connections.map((conn, i) => (
        <ConnectionBeam key={i} start={conn.start} end={conn.end} />
      ))}

      {/* Particles */}
      <DataParticles count={150} />

      {/* Background decoration */}
      <FloatingGeometry />
      <GridFloor />
    </>
  );
}

// ─── Exported Component (receives scroll progress) ───
interface PipelineSceneProps {
  scrollProgress: MotionValue<number>;
}

const PipelineScene: React.FC<PipelineSceneProps> = ({ scrollProgress }) => {
  // Sync framer-motion scroll value to the shared ref (no re-renders)
  useMotionValueEvent(scrollProgress, "change", (v) => {
    scrollRef.current = v;
  });

  return (
    <Canvas
      camera={{ position: [0, 1.5, 12], fov: 50, near: 0.1, far: 100 }}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      }}
      dpr={[1, 1.5]}
      style={{ background: "transparent" }}
    >
      <Scene />
    </Canvas>
  );
};

export default PipelineScene;
