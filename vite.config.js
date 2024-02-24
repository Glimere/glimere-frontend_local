import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from '@svgr/rollup';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  optimizeDeps: {
    exclude: ['swiper/react', 'swiper/modules']
  },
  build: {
    rollupOptions: {
      // Include .fbx files as assets
      // output: {
      //   assetFileNames: '[name][ext]',
      // },
    },
  },

  // Add a specific assetInclude option for .fbx files
  assetsInclude: ['**/*.glb']
})