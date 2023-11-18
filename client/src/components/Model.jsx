import React, { useRef, useState, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from "three"
import { OrbitControls, Circle, PerspectiveCamera } from '@react-three/drei'
import { useTexture } from '@react-three/drei';



const Model = ({ gltf, initialScale, canvasRef, setIsLoading, isInteracting }) => {

    const [isDesktop, setIsDesktop] = useState(true);

    useEffect(() => {
        const updateScreenMode = () => {
            const screenWidth = window.innerWidth;
            const isDesktopMode = screenWidth >= 768; // Set breakpoint for desktop/mobile
            setIsDesktop(isDesktopMode);
        };

        updateScreenMode(); // Initial check
        window.addEventListener('resize', updateScreenMode); // Listen for resize events

        return () => {
            window.removeEventListener('resize', updateScreenMode); // Clean up event listener
        };
    }, []); // Run effect only once

    const boundingBoxConfig = isDesktop ?
        { max: new THREE.Vector3(15000, 1000, -3000), min: new THREE.Vector3(-1000, -1000, -1000) } :
        { max: new THREE.Vector3(8000, 1000, -3000), min: new THREE.Vector3(-1000, -1000, -1000) }; // Adjust bounding box based on screen size
    const meshPosition = isDesktop ? [0, -2.5, 0] : [0, -2, 0]; // Adjust mesh position based on screen size
    const circleSize = isDesktop ? [1.4] : [1]
    const rotation = isDesktop ? -Math.PI / 1.7 : -Math.PI / 1.7
    const cameraPosition = isDesktop ? [0, 0, 9.5] : [0, 0, 11]


    const min = boundingBoxConfig.min
    const max = boundingBoxConfig.max
    const boundingBox = new THREE.Box3(min, max);



    if (gltf) {
        setIsLoading(false);
    }

    const [modelScale, setModelScale] = useState(initialScale)

    useFrame(() => {
        if (!gltf) return;


        const rotationSpeed = isInteracting ? 0 : 0.02;
        // Update the rotation of the model
        gltf.scene.rotation.y += rotationSpeed;

        const canvasWidth = canvasRef.current.clientWidth
        const canvasHeight = canvasRef.current.clientHeight
        const modelWidth = boundingBox.max.x - boundingBox.min.x;
        const modelHeight = boundingBox.max.y - boundingBox.min.y;

        const scaleX = canvasWidth / modelWidth
        const scaleY = canvasHeight / modelHeight

        const scale = Math.min(scaleX, scaleY)
        setModelScale(scale)
    })

    return (
        <>
            <PerspectiveCamera makeDefault position={cameraPosition} />
            <OrbitControls
                target={[0, 1, 0]}
                enableZoom={false}
                enablePan={false}
                enableRotate={true}
                enableDamping={true}
                dampingFactor={0.25}
                rotateSpeed={0.4}
                maxPolarAngle={Math.PI / 2}
                minPolarAngle={Math.PI / 2}
            />

            <directionalLight position={[3.3, 1.0, 4.4]} castShadow intensity={5} />
            {/* Point Light */}
            <pointLight position={[-3, 1, 4]} intensity={2} color="white" />

            {/* Ambient Light */}
            <ambientLight intensity={1.8} />

            <mesh position={meshPosition}>
                <primitive object={gltf.scene} children-0-castShadow scale={[modelScale, modelScale, modelScale]} />
            </mesh>

            {/* <Circle args={circleSize} position={meshPosition} rotation-x={rotation} receiveShadow>
                <meshStandardMaterial color="#ffedbc" />
            </Circle> */}


        </>

    )
}

export default Model