import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, ContactShadows, Sparkles } from '@react-three/drei';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';

function Vada() {
  const group = useRef<THREE.Group>(null);
  const pointer = useRef({ x: 0, y: 0 });
  const geometry = useMemo(() => {
    const geo = new THREE.SphereGeometry(1, 96, 72);
    const pos = geo.attributes.position as THREE.BufferAttribute;
    const v = new THREE.Vector3();
    for (let i = 0; i < pos.count; i++) {
      v.fromBufferAttribute(pos, i);
      const noise = Math.sin(v.x * 13 + v.y * 7) * Math.cos(v.z * 11 + v.y * 9);
      const rough = Math.sin(v.x * 25) * Math.cos(v.y * 19) * Math.sin(v.z * 23);
      const scale = 1 + noise * 0.035 + rough * 0.012;
      pos.setXYZ(i, v.x * scale, v.y * scale, v.z * scale);
    }
    geo.computeVertexNormals();
    return geo;
  }, []);

  useFrame((state, delta) => {
    if (!group.current) return;
    pointer.current.x = THREE.MathUtils.lerp(pointer.current.x, state.pointer.x, 0.035);
    pointer.current.y = THREE.MathUtils.lerp(pointer.current.y, state.pointer.y, 0.035);
    group.current.rotation.y += delta * 0.19;
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, pointer.current.y * 0.22, 0.035);
    group.current.rotation.z = THREE.MathUtils.lerp(group.current.rotation.z, -pointer.current.x * 0.16, 0.035);
  });

  return <group ref={group} rotation={[0.2, 0.2, -0.15]}>
    <mesh geometry={geometry} scale={[1.28, 0.78, 1.12]} castShadow receiveShadow>
      <meshStandardMaterial color="#bd6424" roughness={0.72} metalness={0.02} />
    </mesh>
    <mesh position={[0, 0.69, 0.03]} scale={[0.42, 0.13, 0.38]}>
      <sphereGeometry args={[1, 32, 24]} /><meshStandardMaterial color="#e59a45" roughness={0.82} />
    </mesh>
    {Array.from({ length: 22 }).map((_, i) => {
      const a = i * 2.399;
      const r = 0.48 + (i % 4) * 0.13;
      return <mesh key={i} position={[Math.cos(a) * r, Math.sin(a * 1.7) * 0.36, Math.sin(a) * r]} scale={0.025 + (i % 3) * 0.009}>
        <sphereGeometry args={[1, 12, 10]} /><meshStandardMaterial color={i % 2 ? '#f4bd69' : '#633416'} roughness={0.9} />
      </mesh>;
    })}
  </group>;
}

export default function VadaScene() {
  return <div className="scene-wrap" aria-label="A floating 3D golden vada">
    <Canvas camera={{ position: [0, 0, 4.7], fov: 38 }} dpr={[1, 1.6]} gl={{ antialias: true, alpha: true }}>
      <ambientLight intensity={1.25} />
      <spotLight position={[4, 5, 5]} intensity={95} angle={0.45} penumbra={1} color="#ffd59b" />
      <pointLight position={[-4, -2, 3]} intensity={28} color="#d65d1d" />
      <Float speed={1.25} rotationIntensity={0.12} floatIntensity={0.35}><Vada /></Float>
      <Sparkles count={35} scale={4.2} size={2.2} speed={0.25} opacity={0.55} color="#ffc77c" />
      <ContactShadows position={[0, -1.25, 0]} opacity={0.4} scale={4.5} blur={2.6} far={3} />
      <Environment preset="studio" />
    </Canvas>
  </div>;
}
