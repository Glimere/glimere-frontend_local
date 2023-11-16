import React, { useRef, useState, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from "three"






const Model = ({ gltf, initialScale, canvasRef, setIsLoading, isInteracting}) => {

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
        { max: new THREE.Vector3(20000, 1000, -3000), min: new THREE.Vector3(-1000, -1000, -1000) } :
        { max: new THREE.Vector3(7400, 1000, -3000), min: new THREE.Vector3(-1000, -1000, -1000) }; // Adjust bounding box based on screen size
    const meshPosition = isDesktop ? [0, -2.5, 0] : [0, -2, 0]; // Adjust mesh position based on screen size


    console.log('boundingBoxConfig', boundingBoxConfig)

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
        <mesh position={meshPosition}>
            <primitive object={gltf.scene} children-0-castShadow scale={[modelScale, modelScale, modelScale]} />
        </mesh>
    )
}

export default Model