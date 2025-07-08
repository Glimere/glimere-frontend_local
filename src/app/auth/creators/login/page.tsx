"use client";

import GradientBg from "@/components/gradient/gradientBg";
import { Center, Environment, Float, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";



import SigninCreator from "../components/Signin";


// Enhanced 3D Fashion Model Component using imported GLB
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

const Login = () => {
  return (
    <div className="relative z-[3] flex h-screen w-full flex-row items-end justify-center p-5 sm:items-center sm:justify-normal">
      {/* Left Side - 3D Model Section */}{" "}
      <div className="relative z-[2] flex h-full flex-grow items-center justify-center overflow-hidden rounded-[20px] bg-alabaster bg-cover bg-center bg-no-repeat p-6 duration-500 ease-in-out sm:flex">
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
      <div className="absolute top-10 z-10 w-[80%] sm:bottom-10 sm:left-10 sm:w-auto sm:self-end">
        <div className="rounded-2xl border border-transparent-white-300 bg-transparent-white-200 p-6 backdrop-blur-md">
          <h2 className="glimere-text-gradient mb-2 text-2xl font-bold">
            Glimere Creator Studio
          </h2>
          <p className="max-w-xs text-sm text-dark/70">
            Design, create, and showcase your fashion masterpieces with our
            cutting-edge tools.
          </p>
        </div>
      </div>
      <div className="absolute z-[11] mb-[20px] flex h-auto w-[80%] flex-row items-center justify-center rounded-[20px] bg-transparent-white-300 py-[20px] backdrop-blur-lg sm:relative sm:mb-0 sm:h-full sm:w-[450px] sm:rounded-none sm:py-0">
        <SigninCreator />
      </div>
    </div>
  );
};

export default Login;