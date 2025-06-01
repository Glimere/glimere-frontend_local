"use client";

import GradientBg from "@/components/gradient/gradientBg";
import {
  Center,
  Environment,
  Float,
  OrbitControls,
  useGLTF,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import dynamic from "next/dynamic";

// const SignupPage = dynamic(() => import("../components/Signup"), {
//   ssr: false,
// });
const SigninPage = dynamic(() => import("../components/Signin"), {
  ssr: false,
});

function FashionModel() {
  const FashionModelGLB =
    "https://res.cloudinary.com/dwnvlaitr/image/upload/v1748328816/High-Neck-Asymmetrical-Bodice-Sleeveless-Womens-Flare-Dress_fktdzi.glb";
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
  return (
    <div className="z-[3] flex h-screen w-full flex-row p-5">
      <div
        className={`relative z-10 flex h-full flex-grow items-center justify-center overflow-hidden rounded-[20px] bg-alabaster bg-cover bg-center bg-no-repeat p-6 duration-500 ease-in-out sm:flex`}
      >
        <GradientBg />
        <Canvas
          camera={{ position: [6, 3, 6], fov: 45 }}
          style={{ background: "transparent" }}
          className="z-[2]"
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
      {/* Brand overlay */}
      <div className="absolute bottom-10 left-10 z-10">
        <div className="rounded-2xl border border-transparent-white-300 bg-transparent-white-200 p-6 backdrop-blur-lg">
          <h2 className="glimere-text-gradient mb-2 text-2xl font-bold">
            Welcome to Glimere
          </h2>
          <p className="max-w-xs text-sm text-dark/70">
            Discover custom fashion made just for you. Explore unique styles and
            try them on virtually before you buy.
          </p>
        </div>
      </div>
      <div className="flex h-full w-[450px] flex-row items-center justify-center">
        <SigninPage />
      </div>
    </div>
  );
}
