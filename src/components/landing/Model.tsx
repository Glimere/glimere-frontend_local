import React, { useState, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from "three"
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { GLTFLoader, GLTF } from 'three/examples/jsm/loaders/GLTFLoader.js'


interface ModelProps {
    models: { path: string; boxSize: { desktop: { max: number[]; min: number[] }; mobile: { max: number[]; min: number[] } }; modelPosition: { desktop: number[]; mobile: number[] }; cameraPosition: { desktop: number[]; mobile: number[] } }[];
    onSwitchModel: () => void;
    initialScale: number;
    canvasRef: React.RefObject<HTMLCanvasElement>;
    setIsLoading: (isLoading: boolean) => void;
    isInteracting: boolean;
    currentIndex: number;
    setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Model: React.FC<ModelProps> = ({ models, onSwitchModel, initialScale, canvasRef, setIsLoading, isInteracting, currentIndex, setCurrentIndex }) => {

    const [isDesktop, setIsDesktop] = useState(true);
    const [model, setModel] = useState<ModelProps['models'][number] | null>(null);


    const [gltf, setGltf] = useState<THREE.Group | null>(null);

    useEffect(() => {
        const loadModel = async () => {
            const loadedGltf = await new Promise<GLTF>((resolve) => {
                new GLTFLoader().load(models[currentIndex].path, resolve, undefined, (error: unknown) =>
                    console.error(error)
                );
            });

            setGltf(loadedGltf.scene);
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
        { max: new THREE.Vector3(...(model?.boxSize?.desktop?.max || [0, 0, 0])), min: new THREE.Vector3(...(model?.boxSize?.desktop?.min || [0, 0, 0])) } :
        { max: new THREE.Vector3(...(model?.boxSize?.mobile?.max || [0, 0, 0])), min: new THREE.Vector3(...(model?.boxSize?.mobile?.min || [0, 0, 0])) }; // Adjust bounding box based on screen size
    const meshPosition = isDesktop ? model?.modelPosition?.desktop : model?.modelPosition?.mobile; // Adjust mesh position based on screen size
    const cameraPosition: [number, number, number] = isDesktop ? model?.cameraPosition?.desktop as [number, number, number] || [0, 0, 0] : model?.cameraPosition?.mobile as [number, number, number] || [0, 0, 0];


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
        gltf.rotation.y += rotationSpeed;

        if (!canvasRef.current) return;

        const canvasWidth = canvasRef.current.clientWidth;
        const canvasHeight = canvasRef.current.clientHeight;
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
                    setCurrentIndex((prevIndex: number) => (prevIndex + 1) % models.length);
                  }
            }, 15000);

            return () => clearInterval(interval);
       
    }, [isInteracting]);

    return gltf ? (
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

            <mesh position={meshPosition ? new THREE.Vector3(...meshPosition) : undefined}>
                <primitive object={gltf} children-0-castShadow scale={[modelScale, modelScale, modelScale]} />
            </mesh>

            {/* <Circle args={circleSize} position={meshPosition} rotation-x={rotation} receiveShadow>
                <meshStandardMaterial color="#ffedbc" />
            </Circle> */}


        </>

    ) : null;
}

export default Model