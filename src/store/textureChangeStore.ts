// stores/useTextureChangeStore.ts
import { create } from 'zustand';
import * as THREE from 'three';

interface TextureChangeState {
  texture: THREE.Texture | null;
  setTexture: (texture: THREE.Texture) => void;
}

export const useTextureChangeStore = create<TextureChangeState>((set) => ({
  texture: null,
  setTexture: (texture) => set({ texture }),
}));
