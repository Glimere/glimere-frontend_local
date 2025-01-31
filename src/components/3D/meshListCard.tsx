import { useSnapshot } from "valtio";
import { state } from "./apparelView";
import { HexColorPicker } from "react-colorful";
import { useEffect } from "react";
import { useMeshSelectionStore } from "@/store/meshSelectStore";

const MeshListCard: React.FC = () => {

  const {selectedMesh, setSelectedMesh} = useMeshSelectionStore();
  const snap = useSnapshot(state);

  useEffect(() => {
    if (selectedMesh) {
      state.current = snap.items[selectedMesh] || "#ffffff";
    }
  }, [selectedMesh]);

  return (
    <div className="w-full bg-[#ffffff6b] p-[10px] h-full overflow-y-scroll">
      <h2>Mesh List</h2>
      {Object.keys(snap.items).map((key) => (
        <div key={key} className="flex items-center justify-between my-2">
          <h3>{key}</h3>
          <button
            onClick={() => setSelectedMesh(key)}
            className="bg-blue-500 text-white p-1 rounded"
          >
            Edit
          </button>
        </div>
      ))}
      {selectedMesh && (
        <div className="mt-4">
          <h3>Editing: {selectedMesh}</h3>
          <HexColorPicker
            color={snap.current || "#ffffff"}
            onChange={(color) => {
              if (selectedMesh) {
                state.items[selectedMesh] = color;
              }
              state.current = color;
            }}
          />
        </div>
      )}
    </div>
  );
};

export default MeshListCard;
