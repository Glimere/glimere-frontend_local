"use client";

import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Center, Float } from '@react-three/drei';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Eye, EyeOff, Sparkles, ArrowRight } from 'lucide-react';
import GradientBg from '@/components/gradient/gradientBg';
import { useGLTF } from '@react-three/drei';

// @ts-expect-error: Importing a GLB file which TypeScript does not recognize as a module
import FashionModelGLB from "../../../../public/3D/High-Neck-Asymmetrical-Bodice-Sleeveless-Womens-Flare-Dress.glb"; 

// Enhanced 3D Fashion Model Component using imported GLB
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

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempted with:', { email, password });
  };

  return (
    <div className="min-h-screen bg-alabaster flex relative overflow-hidden">
      <GradientBg/>
      {/* Left Side - 3D Model Section */}
      <div className="flex-1 z-[2] relative bg-gradient-to-br from-primary-100/20 via-beige/30 to-palePink/40">
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-primary-100 animate-pulse" />
          <div className="absolute bottom-20 left-1/4 w-24 h-24 rounded-full bg-beige animate-float" />
          <div className="absolute top-1/3 right-1/4 w-16 h-16 rounded-full bg-palePink animate-bounce" />
        </div>
        
        {/* 3D Canvas */}
        <div className="absolute inset-0">
          <Canvas
            camera={{ position: [6, 3, 6], fov: 45 }}
            style={{ background: 'transparent' }}
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
          <div className="backdrop-blur-lg bg-transparent-white-200 rounded-2xl p-6 border border-transparent-white-300">
            <h2 className="text-2xl font-bold glimere-text-gradient mb-2">
              Glimere Creator Studio
            </h2>
            <p className="text-dark/70 text-sm max-w-xs">
              Design, create, and showcase your fashion masterpieces with our cutting-edge tools.
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="flex-1 z-[2] flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* Glass Form Card */}
          <Card className="backdrop-blur-xl bg-transparent-white-200/80 border border-transparent-white-300 shadow-2xl rounded-2xl overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-transparent-white-100 to-transparent border-b border-transparent-white-300">
              <CardTitle className="text-2xl font-semibold text-dark text-center flex items-center justify-center gap-2">
                <Sparkles className="w-6 h-6 text-primary-100" />
                Creator Login
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-dark font-semibold text-sm uppercase tracking-wide">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your.email@example.com"
                    className="backdrop-blur-sm bg-transparent-white-100/50 border-transparent-white-300 text-dark placeholder:text-dark/50 focus:bg-transparent-white-200/70 transition-all duration-300 h-12 rounded-xl"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password" className="text-dark font-semibold text-sm uppercase tracking-wide">
                    Password
                  </Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your password"
                      className="backdrop-blur-sm bg-transparent-white-100/50 border-transparent-white-300 text-dark placeholder:text-dark/50 focus:bg-transparent-white-200/70 transition-all duration-300 h-12 rounded-xl pr-12"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-dark/60 hover:text-primary-100 transition-colors"
                    >
                      {showPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <label className="flex items-center space-x-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      className="w-5 h-5 rounded border-transparent-white-300 bg-transparent-white-100 text-primary-100 focus:ring-primary-100 focus:ring-2"
                    />
                    <span className="text-dark/70 group-hover:text-dark transition-colors">Remember me</span>
                  </label>
                  <a
                    href="#"
                    className="text-primary-100 hover:text-primary-100/80 transition-colors font-semibold"
                  >
                    Forgot password?
                  </a>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary-100 to-primary-100/80 hover:from-primary-100/90 hover:to-primary-100/70 text-light font-bold py-4 rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl flex items-center justify-center gap-2 text-lg"
                >
                  Enter Studio
                  <ArrowRight className="w-5 h-5" />
                </Button>

                <div className="text-center pt-4">
                  <span className="text-dark/60">
                    New creator?{' '}
                    <a
                      href="#"
                      className="text-primary-100 hover:text-primary-100/80 transition-colors font-semibold"
                    >
                      Join Glimere
                    </a>
                  </span>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Footer */}
          <div className="mt-6 text-center">
            <p className="text-dark/50 text-xs">
              By signing in, you agree to our{' '}
              <a href="#" className="text-primary-100 hover:underline">
                Terms
              </a>{' '}
              and{' '}
              <a href="#" className="text-primary-100 hover:underline">
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
