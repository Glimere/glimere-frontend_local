import { create } from "zustand";

// Define Zustand store to manage texture state
interface TextureChangeState {
  textureImages: string[]; // Array of texture image URLs for previews
  texture: string; // Store a single texture
  setTextureImages: (imageUrls: string[]) => void; // Set multiple texture images
  setTexture: (texture: string) => void; // Set a single texture
}

export const useTextureChangeStore = create<TextureChangeState>((set) => ({
  textureImages: [],
  texture: "",
  setTextureImages: (imageUrls) => set({ textureImages: imageUrls }), // Update texture images
  setTexture: (texture: string) => set({ texture: texture }), // Store a single texture
}));
