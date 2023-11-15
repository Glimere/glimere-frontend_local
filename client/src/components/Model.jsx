import React, { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from "three"

const Model = ({ gltf, initialScale, canvasRef, setIsLoading }) => {

    const min = new THREE.Vector3(-1000, -1000, -1000);
    const max = new THREE.Vector3(7400, 1000, -3000);
    const boundingBox = new THREE.Box3(min, max);


    if (gltf) {
        setIsLoading(false);
    }

    const [modelScale, setModelScale] = useState(initialScale)

    console.log('gltf', gltf)

    useFrame(() => {
        if (!gltf) return;

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
        <mesh position={[0, -2, 0]}>
            <primitive object={gltf.scene} children-0-castShadow scale={[modelScale, modelScale, modelScale]} />
        </mesh>
    )
}

export default Model