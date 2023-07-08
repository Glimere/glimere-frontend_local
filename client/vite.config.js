import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import replace from '@rollup/plugin-replace';
import svgr from '@svgr/rollup';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), replace({
    'process.env.VITE_API_URL': JSON.stringify(process.env.VITE_API_URL),
  }), svgr()],
  optimizeDeps: {
    exclude: ['swiper/react', 'swiper/modules']
  }
})
