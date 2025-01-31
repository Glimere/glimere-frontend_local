import { useState, useRef, useEffect } from "react";
import * as THREE from "three";
import { Canvas, ThreeEvent } from "@react-three/fiber";
import {
  useGLTF,
  ContactShadows,
  Environment,
  OrbitControls,
} from "@react-three/drei";
import { proxy, useSnapshot } from "valtio";
import { HexColorPicker } from "react-colorful";
import SaveBar from "./saveBar";
import SpinnerLoader from "../loader/spinnerLoader";
import { useTextureChangeStore } from "@/store/textureChangeStore";
import { useMeshSelectionStore } from "@/store/meshSelectStore";

interface ApparelViewerProps {
  modelUrl: string;
  editToggle?: boolean | undefined;
}

export const state = proxy({
  current: null as string | null,
  items: {} as Record<string, string>,
});

const ApparelViewer: React.FC<ApparelViewerProps> = ({ modelUrl, editToggle }) => {
  const [loading, setLoading] = useState(true);
  const [hoveredMesh, setHoveredMesh] = useState<string | null>(null);
  const [colorPickerVisible, setColorPickerVisible] = useState(false);
  const [pickerPosition, setPickerPosition] = useState({ x: 0, y: 0 });
  const { texture } = useTextureChangeStore();
  const {selectedMesh, setSelectedMesh} = useMeshSelectionStore()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { nodes } = useGLTF(modelUrl) as any;

  const snap = useSnapshot(state);

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
      setSelectedMesh(e.object.name);
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

  const handleCanvasClick = () => {
    if (editToggle && !selectedMesh) {
      setSelectedMesh(null);
      setColorPickerVisible(false);
    }
  };


  useEffect(() => {
    if (nodes && texture ) {
      const loader = new THREE.TextureLoader();
      loader.load(texture, (loadedTexture) => {
        const tex = loadedTexture.clone();
        tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
        tex.repeat.set(10, 10);

        const mesh = selectedMesh ? nodes[selectedMesh] : null;
        if (mesh && mesh.material) {
          const material = mesh.material.clone();
          material.map = tex;
          material.color.set("#ffffff");
          material.needsUpdate = true;
          mesh.material = material;
        }
      });
    }
  }, [texture, nodes]);

  useEffect(() => {
    if (nodes) {
      setLoading(false); // ✅ Mark as loaded when nodes are available
    }
  }, [nodes]);

  console.log("selectedMesh",selectedMesh)

  return (
    <>
      {loading ? (
        <div className="h-full w-full flex justify-center items-center">
          <SpinnerLoader />
        </div>
      ) : (
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
          {editToggle && <SaveBar />}

            <Canvas
              shadows
              camera={{ position: [0, 0, 95], fov: 45 }}
              style={{ height: "100%", width: "100%" }}
              onPointerDown={handleCanvasClick}
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
                selectedMesh={selectedMesh}
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
      )}
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
  selectedMesh: string | null;
}

const Apparel: React.FC<ApparelProps> = ({
  modelUrl,
  onPointerOver,
  onPointerOut,
  onPointerDown,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  hoveredMesh,
  editToggle,
  selectedMesh,
}) => {
  const ref = useRef<THREE.Group>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { nodes } = useGLTF(modelUrl) as any;
  const snap = useSnapshot(state);

  useEffect(() => {
    if (nodes) {
      Object.keys(nodes).forEach((key) => {
        const material = nodes[key].material;
        if (material && material.color) {  // Check if color exists
          state.items[key] = material.color.getStyle();
        }
      });
    }
  }, [nodes]);

  return (
    <group ref={ref} position={[0, -35, -68]}>
      {Object.keys(nodes).map((key, index) => (
        <mesh
          key={index}
          receiveShadow
          castShadow
          geometry={nodes[key]?.geometry}
          material={nodes[key]?.material?.clone()}
          material-color={snap.items[key]}
          onPointerOver={onPointerOver}
          onPointerOut={onPointerOut}
          onPointerDown={onPointerDown}
          name={key}
        >
          {editToggle && selectedMesh === key && (
            <meshStandardMaterial
              attach="material"
              emissive="#ffffff"
              emissiveIntensity={0.3}
              transparent
              opacity={0.3}
            />
          )}
        </mesh>
      ))}
    </group>
  );
};

export default ApparelViewer;

