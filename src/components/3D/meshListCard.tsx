import { useSnapshot } from "valtio";
import { state } from "./apparelView";
import { HexColorPicker } from "react-colorful";
import { useEffect } from "react";

const MeshListCard: React.FC = () => {
  const snap = useSnapshot(state);

  useEffect(() => {
    if (snap.selectedMesh) {
      state.currentColor = snap.items[snap.selectedMesh] || "#ffffff";
    }
  }, [snap.selectedMesh]);

  return (
    <div className="w-full bg-[#ffffff6b] p-[10px] h-full overflow-y-scroll">
      <h2>Mesh List</h2>
      {Object.keys(snap.items).map((key) => (
        <div key={key} className="flex items-center justify-between my-2">
          <h3>{key}</h3>
          <button
            onClick={() => (state.selectedMesh = key)}
            className="bg-blue-500 text-white p-1 rounded"
          >
            Edit
          </button>
        </div>
      ))}
      {snap.selectedMesh && (
        <div className="mt-4">
          <h3>Editing: {snap.selectedMesh}</h3>
          <HexColorPicker
            color={snap.currentColor}
            onChange={(color) => {
              if (snap.selectedMesh) {
                state.items[snap.selectedMesh] = color;
              }
              state.currentColor = color;
            }}
          />
        </div>
      )}
    </div>
  );
};

export default MeshListCard;
