import { useState, useRef, useEffect, useCallback } from "react";
import * as THREE from "three";
import { Canvas, useFrame, ThreeEvent } from "@react-three/fiber";
import {
  useGLTF,
  ContactShadows,
  Environment,
  OrbitControls,
} from "@react-three/drei";
import { proxy, useSnapshot } from "valtio";
import { HexColorPicker } from "react-colorful";
import SaveBar from "./saveBar";
import { Button } from "../ui/button";
import { useTextureChangeStore } from "@/store/textureChangeStore";

interface ApparelViewerProps {
  modelUrl: string;
  editToggle?: boolean | undefined;
}

export const state = proxy({
  current: null as string | null,
  items: {} as Record<string, string>,
});

const ApparelViewer: React.FC<ApparelViewerProps> = ({
  modelUrl,
  editToggle,
}) => {
  const [hoveredMesh, setHoveredMesh] = useState<string | null>(null);
  const [colorPickerVisible, setColorPickerVisible] = useState(false);
  const [pickerPosition, setPickerPosition] = useState({ x: 0, y: 0 });
  const [selectedMesh, setSelectedMesh] = useState<string | null>(null);
  const [texture, setTexture] = useState<THREE.Texture | null>(null);
  const { nodes, materials } = useGLTF(modelUrl) as any;
  const snap = useSnapshot(state);
  const textureFile = useTextureChangeStore((state) => state.texture);

  const handlePointerOver = (e: ThreeEvent<PointerEvent>) => {
    if (editToggle) {
      e.stopPropagation();
      setHoveredMesh((e.object as THREE.Object3D).name);
    }
  };

  const handlePointerOut = () => {
    if (editToggle) {
      setHoveredMesh(null);
    }
  };

  const handlePointerDown = (e: ThreeEvent<PointerEvent>) => {
    if (editToggle) {
      e.stopPropagation();
      setSelectedMesh((e.object as THREE.Object3D).name);
      setPickerPosition({ x: e.clientX, y: e.clientY });
      setColorPickerVisible(true);
    }
  };

  const handleColorChange = (color: string) => {
    if (selectedMesh) {
      state.items[selectedMesh] = color;
    }
  };

  const handlePickerMouseLeave = () => {
    setColorPickerVisible(false);
  };

  useEffect(() => {
    if (nodes && texture) {
      Object.keys(nodes).forEach((key) => {
        const material = nodes[key].material;
        if (material && texture) {
          (material as THREE.MeshStandardMaterial).map = texture; // Apply texture to the material
          (material as THREE.MeshStandardMaterial).needsUpdate = true;
        }
      });
    }
  }, [texture, nodes]);

  return (
    <>
      {colorPickerVisible && (
        <div
          className="z-[4]"
          style={{
            position: "absolute",
            top: pickerPosition.y,
            left: pickerPosition.x,
          }}
          onMouseLeave={handlePickerMouseLeave}
        >
          <HexColorPicker
            color={snap.items[selectedMesh ?? ""]}
            onChange={handleColorChange}
          />
        </div>
      )}

      <div className="relative h-full w-full flex flex-col items-center">
        {editToggle ? <SaveBar /> : null}
        <Canvas
          shadows
          camera={{ position: [0, 0, 95], fov: 45 }}
          style={{ height: "100%", width: "100%" }}
        >
          <ambientLight intensity={0.7} />
          <spotLight
            intensity={0.5}
            angle={0.1}
            penumbra={1}
            position={[10, 15, 10]}
            castShadow
          />
          <Apparel
            modelUrl={modelUrl}
            onPointerOver={handlePointerOver}
            onPointerOut={handlePointerOut}
            onPointerDown={handlePointerDown}
            hoveredMesh={hoveredMesh}
            editToggle={editToggle ?? false}
          />
          <Environment preset="city" />
          <ContactShadows
            position={[0, -0.8, 0]}
            opacity={0.25}
            scale={10}
            blur={1.5}
            far={0.8}
          />
          <OrbitControls
            minPolarAngle={Math.PI / 2}
            maxPolarAngle={Math.PI / 2}
            enableZoom
            enablePan
          />
        </Canvas>
      </div>
    </>
  );
};

interface ApparelProps {
  modelUrl: string;
  onPointerOver: (e: ThreeEvent<PointerEvent>) => void;
  onPointerOut: () => void;
  onPointerDown: (e: ThreeEvent<PointerEvent>) => void;
  hoveredMesh: string | null;
  editToggle: boolean;
}

const Apparel: React.FC<ApparelProps> = ({
  modelUrl,
  onPointerOver,
  onPointerOut,
  onPointerDown,
  hoveredMesh,
  editToggle,
}) => {
  const ref = useRef<THREE.Group>(null);
  // const { nodes, materials } = useGLTF(modelUrl) as any;
  const { nodes, materials } = useGLTF(modelUrl) as any;
  const snap = useSnapshot(state);

  useEffect(() => {
    if (!nodes || !materials) return;

    // Initialize state.items with material colors from the GLTF model
    Object.keys(nodes).forEach((key) => {
      const material = nodes[key].material;
      if (material && typeof material.color !== "undefined") {
        state.items[key] = material.color.getStyle();
      }
    });
  }, [nodes, materials]);

  return (
    <group ref={ref} position={[0, -35, -68]}>
      {Object.keys(nodes).map((key, index) => (
        <mesh
          key={index}
          receiveShadow
          castShadow
          geometry={nodes[key]?.geometry}
          material={materials[nodes[key]?.material?.name]}
          material-color={snap.items[key]}
          onPointerOver={onPointerOver}
          onPointerOut={onPointerOut}
          onPointerDown={onPointerDown}
          name={key}
        >
          {editToggle && hoveredMesh === key && (
            <meshStandardMaterial
              emissive={"#ffffff"}
              emissiveIntensity={0.1}
            />
          )}{" "}
        </mesh>
      ))}
    </group>
  );
};

export default ApparelViewer;
