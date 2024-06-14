import React, { useRef, useState, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from "three"
import { OrbitControls, Circle, PerspectiveCamera } from '@react-three/drei'
import { useTexture } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useLoader } from '@react-three/fiber';




const Model = ({ models, onSwitchModel, initialScale, canvasRef, setIsLoading, isInteracting, currentIndex, setCurrentIndex }) => {

    const [isDesktop, setIsDesktop] = useState(true);
    const [model, setModel] = useState();


    const [gltf, setGltf] = useState(null);

    useEffect(() => {
        const loadModel = async () => {
            const loadedGltf = await new Promise((resolve) => {
                new GLTFLoader().load(models[currentIndex].path, resolve, undefined, (error) =>
                    console.error(error)
                );
            });

            setGltf(loadedGltf);
            setModel(models[currentIndex]);
            setIsLoading(false);
        };

        loadModel();
    }, [currentIndex, setIsLoading]);

    console.log('gltf', gltf)

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
        { max: new THREE.Vector3(model?.boxSize?.desktop?.max), min: new THREE.Vector3(model?.boxSize?.desktop?.min) } :
        { max: new THREE.Vector3(model?.boxSize?.mobile?.max), min: new THREE.Vector3(model?.boxSize?.mobile?.min) }; // Adjust bounding box based on screen size
    const meshPosition = isDesktop ? model?.modelPosition?.desktop : model?.modelPosition?.mobile; // Adjust mesh position based on screen size
    const cameraPosition = isDesktop ? model?.cameraPosition?.desktop : model?.cameraPosition?.mobile


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

    useEffect(() => {

 
            const interval = setInterval(() => {
                if (!isInteracting) {
                    setCurrentIndex((prevIndex) => (prevIndex + 1) % models.length);
                  }
            }, 15000);

            return () => clearInterval(interval);
       
    }, [isInteracting]);

    return gltf && gltf.scene ? (
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

    ) : null;
}

export default Model