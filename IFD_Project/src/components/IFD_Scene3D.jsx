import React, { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import * as THREE from 'three';

function CameraController({ currentSlide }) {
    const { camera } = useThree();
    const targetPos = useRef(new THREE.Vector3(0, 0, 10));

    useEffect(() => {
        // Dramatic distinct camera positions for IFD Cinematic feel
        switch (currentSlide) {
            case 0: // Title
                targetPos.current.set(0, 0, 14);
                break;
            case 1: // WhatIs
                targetPos.current.set(8, 5, 18);
                break;
            case 2: // ASEAN
                targetPos.current.set(-5, 8, 12);
                break;
            case 3: // Cambodia
                targetPos.current.set(-10, -2, 14);
                break;
            case 4: // Vietnam
                targetPos.current.set(10, -5, 16);
                break;
            case 5: // Laos
                targetPos.current.set(0, 5, 25);
                break;
            case 6: // Quiz
                targetPos.current.set(-15, 0, 15);
                break;
            case 7: // SkitWalkway
                targetPos.current.set(0, 0, 8); // Very close, flying inside
                break;
            case 8: // GuessLanguage
                targetPos.current.set(5, 5, 12);
                break;
            case 9: // Conclusion
                targetPos.current.set(0, 15, 20); // Top down view of galaxy
                break;
            default:
                targetPos.current.set(0, 0, 14);
        }
    }, [currentSlide]);

    useFrame((state, delta) => {
        state.camera.position.lerp(targetPos.current, 1.5 * delta);
        // Look at origin but slowly drift it to give a handheld cinematic feel
        const time = state.clock.getElapsedTime();
        const lookX = Math.sin(time * 0.2) * 1;
        const lookY = Math.cos(time * 0.3) * 1;
        state.camera.lookAt(lookX, lookY, 0);
    });

    return null;
}

function MorphingParticles({ currentSlide }) {
    const meshRef = useRef();
    const count = 600;

    const dummy = useMemo(() => new THREE.Object3D(), []);
    const particles = useMemo(() => {
        const temp = [];
        for (let i = 0; i < count; i++) {
            const t = Math.random() * 100;
            const factor = 20 + Math.random() * 100;
            const speed = 0.005 + Math.random() / 300;
            const xFactor = -50 + Math.random() * 100;
            const yFactor = -50 + Math.random() * 100;
            const zFactor = -50 + Math.random() * 100;
            // Introduce color variation
            const color = new THREE.Color();
            color.lerpColors(
                new THREE.Color('#FFD166'), 
                new THREE.Color('#FF6B6B'), 
                Math.random()
            );
            temp.push({ t, factor, speed, xFactor, yFactor, zFactor, color });
        }
        return temp;
    }, [count]);

    const colorArray = useMemo(() => {
        const arr = new Float32Array(count * 3);
        particles.forEach((p, i) => {
            arr[i * 3 + 0] = p.color.r;
            arr[i * 3 + 1] = p.color.g;
            arr[i * 3 + 2] = p.color.b;
        });
        return arr;
    }, [particles, count]);

    useFrame((state) => {
        particles.forEach((particle, i) => {
            let { t, factor, speed, xFactor, yFactor, zFactor } = particle;
            t = particle.t += speed;
            const time = state.clock.getElapsedTime();

            if (currentSlide === 0) { // Globe
                const phi = Math.acos(-1 + (2 * i) / count);
                const theta = Math.sqrt(count * Math.PI) * phi + time * 0.2;
                const radius = 6;
                dummy.position.set(
                    radius * Math.cos(theta) * Math.sin(phi),
                    radius * Math.sin(theta) * Math.sin(phi),
                    radius * Math.cos(phi)
                );
            } else if (currentSlide === 1) { // Ring
                const radius = 8 + Math.sin(t * 5) * 0.5;
                const angle = (i / count) * Math.PI * 2 + time * 0.5;
                dummy.position.set(
                    Math.cos(angle) * radius,
                    Math.sin(angle) * radius,
                    Math.sin(time + angle) * 2
                );
            } else if (currentSlide === 2) { // Flat Map/Grid
                const perRow = Math.ceil(Math.sqrt(count));
                const ix = i % perRow;
                const iy = Math.floor(i / perRow);
                const wave = Math.sin(ix * 0.5 + time) + Math.cos(iy * 0.5 + time);
                dummy.position.set(
                    (ix - perRow/2) * 1.5,
                    wave * 1.5 - 5,
                    (iy - perRow/2) * 1.5
                );
            } else if (currentSlide === 3) { // Cambodia (Temple / Pillars)
                const pillar = i % 3;
                const height = pillar === 1 ? 15 : 10; // Center taller
                const xOffset = (pillar - 1) * 6;
                const yPos = ((i / count) * height * 3) - height/2;
                dummy.position.set(
                    xOffset + Math.sin(yPos + time)*0.5,
                    yPos,
                    Math.cos(yPos + time)*0.5
                );
            } else if (currentSlide === 4) { // Vietnam (Floating lanterns)
                dummy.position.set(
                    (xFactor/5) * Math.sin(time * speed * 10),
                    (t * 10 % 20) - 10,
                    (zFactor/5) * Math.cos(time * speed * 10)
                );
            } else if (currentSlide === 5) { // Laos (Baci Strings / DNA)
                const strand = i % 2 === 0 ? 1 : -1;
                const yPos = ((i / count) * 40) - 20; 
                const angle = (yPos * 0.5) + time; 
                dummy.position.set(
                    Math.cos(angle) * 4 * strand,
                    yPos,
                    Math.sin(angle) * 4 * strand
                );
            } else if (currentSlide === 6) { // Quiz (Chaotic swirl)
                const angle = (i / count) * Math.PI * 20 + time * 2;
                const radius = Math.random() * 15;
                dummy.position.set(
                    Math.cos(angle) * radius,
                    Math.sin(angle) * radius,
                    Math.tan(Math.sin(t*10))*2
                );
            } else if (currentSlide === 7) { // Walkway (Tunnel)
                const zPos = ((i / count) * -100) + (time * 10 % 100); 
                const waveX = Math.cos(zPos * 0.1) * 8;
                const waveY = Math.sin(zPos * 0.1) * 8;
                dummy.position.set(waveX, waveY, zPos > 0 ? zPos - 100 : zPos);
            } else if (currentSlide === 8) { // Guess Language (Sound waves)
                const waveGroup = i % 5;
                const radius = 3 + waveGroup * 2;
                const angle = (i / count) * Math.PI * 2 * 5 + time;
                const pulse = Math.sin(time * 5 + waveGroup) * 2;
                dummy.position.set(
                    Math.cos(angle) * (radius + pulse),
                    Math.sin(angle) * (radius + pulse),
                    Math.sin(angle * 3) * pulse
                );
            } else if (currentSlide === 9) { // Conclusion (Galaxy)
                const angle = i * 0.2 + time * 0.1;
                const radius = 1 + (i / count) * 15;
                dummy.position.set(
                    Math.cos(angle) * radius,
                    Math.sin(t*2) * 1.5,
                    Math.sin(angle) * radius
                );
            }

            // Slowly rotate the individual particles
            dummy.rotation.set(t, t, t);
            dummy.scale.setScalar(0.5 + Math.sin(t * 10) * 0.2);
            dummy.updateMatrix();
            meshRef.current.setMatrixAt(i, dummy.matrix);
        });
        meshRef.current.instanceMatrix.needsUpdate = true;
    });

    return (
        <instancedMesh ref={meshRef} args={[null, null, count]}>
            <dodecahedronGeometry args={[0.2, 0]} />
            <meshStandardMaterial 
                roughness={0.2}
                metalness={0.8}
                emissive="#220000"
                emissiveIntensity={0.2}
                toneMapped={false}
                vertexColors={true}
            />
            <instancedBufferAttribute attach="instanceColor" args={[colorArray, 3]} />
        </instancedMesh>
    );
}

export default function IFD_Scene3D({ currentSlide }) {
    return (
        <div className="fixed inset-0 z-0 bg-ifd-navy">
            <Canvas camera={{ position: [0, 0, 14], fov: 60 }}>
                <CameraController currentSlide={currentSlide} />
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1.5} color="#FFD166" />
                <pointLight position={[-10, -10, -10]} intensity={1} color="#FF6B6B" />
                <pointLight position={[0, -5, 5]} intensity={2} color="#06D6A0" />
                
                <Stars radius={100} depth={50} count={3000} factor={4} saturation={1} fade speed={0.5} />
                
                <MorphingParticles currentSlide={currentSlide} />
            </Canvas>
        </div>
    );
}
