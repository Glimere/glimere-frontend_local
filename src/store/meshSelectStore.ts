import { create } from 'zustand';

interface SelectedMeshState {
    selectedMesh: string | null;
    setSelectedMesh: (mesh: string | null) => void;
  }
  export const useMeshSelectionStore = create<SelectedMeshState>((set) => ({
    selectedMesh: null,
    setSelectedMesh: (mesh) => set({ selectedMesh: mesh }),
  }));