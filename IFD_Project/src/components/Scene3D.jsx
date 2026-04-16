import React, { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, Stars, Text3D, Center } from '@react-three/drei';
import * as THREE from 'three';

function CameraController({ currentSlide }) {
    const { camera } = useThree();
    const targetPos = useRef(new THREE.Vector3(0, 0, 10));

    useEffect(() => {
        // Define camera positions for each slide
        switch (currentSlide) {
            case 0: // Title
                targetPos.current.set(0, 0, 10);
                break;
            case 1: // WhatIs
                targetPos.current.set(8, 3, 18);
                break;
            case 2: // Problem
                targetPos.current.set(-5, 2, 15);
                break;
            case 3: // Solution
                targetPos.current.set(5, -2, 12);
                break;
            case 4: // Unique
                targetPos.current.set(-8, -4, 16);
                break;
            case 5: // Process
                targetPos.current.set(0, 8, 12);
                break;
            case 6: // MakingOf
                targetPos.current.set(0, -6, 20);
                break;
            case 7: // Prototype (Gallery)
                targetPos.current.set(0, 0, 15);
                break;
            case 8: // Demo
                targetPos.current.set(10, 0, 10);
                break;
            case 9: // Summary
                targetPos.current.set(0, 5, 20);
                break;
            default:
                targetPos.current.set(0, 0, 10);
        }
    }, [currentSlide]);

    useFrame((state, delta) => {
        state.camera.position.lerp(targetPos.current, 2 * delta);
        state.camera.lookAt(0, 0, 0);
    });

    return null;
}

function MorphingShapes({ currentSlide }) {
    const meshRef = useRef();
    const count = 300;

    const dummy = useMemo(() => new THREE.Object3D(), []);
    const particles = useMemo(() => {
        const temp = [];
        for (let i = 0; i < count; i++) {
            const t = Math.random() * 100;
            const factor = 20 + Math.random() * 100;
            const speed = 0.01 + Math.random() / 200;
            const xFactor = -50 + Math.random() * 100;
            const yFactor = -50 + Math.random() * 100;
            const zFactor = -50 + Math.random() * 100;
            temp.push({ t, factor, speed, xFactor, yFactor, zFactor, mx: 0, my: 0 });
        }
        return temp;
    }, [count]);

    useFrame((state) => {
        particles.forEach((particle, i) => {
            let { t, factor, speed, xFactor, yFactor, zFactor } = particle;
            t = particle.t += speed / 2;
            const a = Math.cos(t) + Math.sin(t * 1) / 10;
            const b = Math.sin(t) + Math.cos(t * 2) / 10;
            const s = Math.cos(t);

            if (currentSlide === 1) { // WhatIs: Pulsing Ring
                const radius = 8 + Math.sin(t * 2);
                const angle = (i / count) * Math.PI * 2 + t * 0.5;
                dummy.position.set(
                    Math.cos(angle) * radius,
                    Math.sin(angle) * radius,
                    -5 + Math.sin(t + angle) * 2
                );
            } else if (currentSlide === 2) { // Problem: Chaotic/Split
                dummy.position.set(
                    (particle.mx / 10) * a + xFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10,
                    (particle.my / 10) * b + yFactor + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10,
                    (particle.my / 10) * b + zFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 10
                );
            } else if (currentSlide === 3) { // Solution: Organized/Swirl
                const radius = 10;
                const angle = (i / count) * Math.PI * 2 + t;
                dummy.position.set(
                    Math.cos(angle) * radius,
                    Math.sin(angle) * radius + Math.sin(t) * 2,
                    Math.sin(angle * 2) * 5
                );
            } else if (currentSlide === 4) { // Unique: Three Pillars
                const pillar = i % 3;
                const xOffset = (pillar - 1) * 8;
                const yPos = ((i / count) * 40) - 20 + Math.sin(t * 2 + pillar) * 2;
                dummy.position.set(
                    xOffset + Math.cos(t + yPos) * 2,
                    yPos,
                    -10 + Math.sin(t + yPos) * 2
                );
            } else if (currentSlide === 5) { // Process: Sine Wave Tunnel
                const zPos = ((i / count) * -50); 
                const waveX = Math.cos(zPos * 0.2 + t) * 5;
                const waveY = Math.sin(zPos * 0.2 + t) * 5;
                dummy.position.set(waveX, waveY, zPos);
            } else if (currentSlide === 6) { // Making Of: Expanding Grid
                const perRow = Math.ceil(Math.pow(count, 1/3));
                const spacing = 4;
                const ix = i % perRow;
                const iy = Math.floor((i / perRow)) % perRow;
                const iz = Math.floor(i / (perRow * perRow));
                const expand = 1 + Math.sin(t * 0.5) * 0.2;
                dummy.position.set(
                    (ix - perRow/2) * spacing * expand,
                    (iy - perRow/2) * spacing * expand,
                    (iz - perRow/2) * spacing * expand - 15
                );
            } else if (currentSlide === 7) { // Prototype: DNA Helix (Pushed Back)
                const strand = i % 2 === 0 ? 1 : -1;
                const yPos = ((i / count) * 40) - 20; // Vertical spread
                const angle = (yPos * 0.5) + t; // Twist
                const radius = 6;

                dummy.position.set(
                    Math.cos(angle) * radius * strand,
                    yPos,
                    Math.sin(angle) * radius * strand - 20 // Pushed way back z = -20
                );
                dummy.rotation.set(t, yPos, 0);
            } else if (currentSlide === 9) { // Summary: Galaxy / Dispersed
                // Spiral Galaxy
                const angle = i * 0.1 + t * 0.2;
                const radius = 2 + i * 0.05;
                const spiralX = Math.cos(angle) * radius;
                const spiralZ = Math.sin(angle) * radius;
                const spiralY = (particle.yFactor / 50); // Stable flattened disc

                dummy.position.set(spiralX, spiralY, spiralZ);
                dummy.rotation.set(0, angle, 0);
            } else if (currentSlide === 8) { // Demo: Floating
                dummy.position.set(
                    (particle.mx / 10) * a + xFactor,
                    (particle.my / 10) * b + yFactor,
                    (particle.my / 10) * b + zFactor
                );
            } else { // Default: Floating
                dummy.position.set(
                    (particle.mx / 10) * a + xFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10,
                    (particle.my / 10) * b + yFactor + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10,
                    (particle.my / 10) * b + zFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 10
                );
            }

            dummy.scale.set(s, s, s);
            dummy.rotation.set(s * 5, s * 5, s * 5);
            dummy.updateMatrix();
            meshRef.current.setMatrixAt(i, dummy.matrix);
        });
        meshRef.current.instanceMatrix.needsUpdate = true;
    });

    return (
        <instancedMesh ref={meshRef} args={[null, null, count]}>
            <dodecahedronGeometry args={[0.2, 0]} />
            <meshPhongMaterial color="#00f2ff" />
        </instancedMesh>
    );
}

export default function Scene3D({ currentSlide }) {
    return (
        <div className="fixed inset-0 z-0 bg-void-black">
            <Canvas>
                <CameraController currentSlide={currentSlide} />
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <pointLight position={[-10, -10, -10]} color="#ff9f1c" intensity={1} />
                <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
                <MorphingShapes currentSlide={currentSlide} />
            </Canvas>
        </div>
    );
}
