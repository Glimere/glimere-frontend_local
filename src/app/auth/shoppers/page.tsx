"use client";

import {
  Center,
  Environment,
  Float,
  OrbitControls,
  useGLTF,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import dynamic from "next/dynamic";
import { useState } from "react";

// @ts-expect-error: Importing a GLB file which TypeScript does not recognize as a module
import FashionModelGLB from "../../../../public/3D/High-Neck-Asymmetrical-Bodice-Sleeveless-Womens-Flare-Dress.glb";

const SignupPage = dynamic(() => import("../components/Signup"), {
  ssr: false,
});
const SigninPage = dynamic(() => import("../components/Signin"), {
  ssr: false,
});

function FashionModel() {
  const { scene } = useGLTF(FashionModelGLB);

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <Center>
        <primitive object={scene} scale={0.1} />
      </Center>
    </Float>
  );
}

export default function AuthPage() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="z-[3] h-[100vh] w-full">
      <div
        className={`card absolute inset-0 z-10 hidden h-full w-[50%] bg-cover bg-center bg-no-repeat p-6 duration-500 ease-in-out sm:flex ${
          isVisible ? "ml-[50%]" : "mr-[50%]"
        }`}
      >
        <Canvas
          camera={{ position: [6, 3, 6], fov: 45 }}
          style={{ background: "transparent" }}
        >
          <ambientLight intensity={0.6} />
          <directionalLight
            position={[10, 10, 5]}
            intensity={1.2}
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
          />
          <pointLight position={[-5, 5, 5]} intensity={0.5} color="#ED7534" />
          <pointLight position={[5, -5, -5]} intensity={0.3} color="#D4AF37" />
          <FashionModel />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.8}
            maxPolarAngle={Math.PI / 1.8}
            minPolarAngle={Math.PI / 3}
          />
          <Environment preset="studio" />
        </Canvas>
      </div>

      <div className="flex h-full w-full flex-row lg:px-[6.8rem]">
        {/* Signup Section */}
        <div
          className={`sm:w-[50%] sm:flex-[1] sm:p-[40px] ${
            isVisible ? "w-full" : "w-[0%] flex-[0] overflow-hidden p-0"
          } flex flex-col items-center justify-center`}
        >
          <SignupPage isVisible={isVisible} setIsVisible={setIsVisible} />
        </div>

        {/* Login Section */}
        <SigninPage isVisible={isVisible} setIsVisible={setIsVisible} />
      </div>
    </div>
  );
}
