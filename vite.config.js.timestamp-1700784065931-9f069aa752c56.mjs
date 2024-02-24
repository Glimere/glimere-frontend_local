// vite.config.js
import { defineConfig } from "file:///C:/Users/Daniel%20King/Desktop/Glimere%20Official/client/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/Daniel%20King/Desktop/Glimere%20Official/client/node_modules/@vitejs/plugin-react/dist/index.mjs";
import svgr from "file:///C:/Users/Daniel%20King/Desktop/Glimere%20Official/client/node_modules/@svgr/rollup/dist/index.js";
var vite_config_default = defineConfig({
  plugins: [react(), svgr()],
  optimizeDeps: {
    exclude: ["swiper/react", "swiper/modules"]
  },
  build: {
    rollupOptions: {
      // Include .fbx files as assets
      // output: {
      //   assetFileNames: '[name][ext]',
      // },
    }
  },
  // Add a specific assetInclude option for .fbx files
  assetsInclude: ["**/*.glb"]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxEYW5pZWwgS2luZ1xcXFxEZXNrdG9wXFxcXEdsaW1lcmUgT2ZmaWNpYWxcXFxcY2xpZW50XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxEYW5pZWwgS2luZ1xcXFxEZXNrdG9wXFxcXEdsaW1lcmUgT2ZmaWNpYWxcXFxcY2xpZW50XFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9EYW5pZWwlMjBLaW5nL0Rlc2t0b3AvR2xpbWVyZSUyME9mZmljaWFsL2NsaWVudC92aXRlLmNvbmZpZy5qc1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXHJcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCdcclxuaW1wb3J0IHN2Z3IgZnJvbSAnQHN2Z3Ivcm9sbHVwJztcclxuXHJcbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgcGx1Z2luczogW3JlYWN0KCksIHN2Z3IoKV0sXHJcbiAgb3B0aW1pemVEZXBzOiB7XHJcbiAgICBleGNsdWRlOiBbJ3N3aXBlci9yZWFjdCcsICdzd2lwZXIvbW9kdWxlcyddXHJcbiAgfSxcclxuICBidWlsZDoge1xyXG4gICAgcm9sbHVwT3B0aW9uczoge1xyXG4gICAgICAvLyBJbmNsdWRlIC5mYnggZmlsZXMgYXMgYXNzZXRzXHJcbiAgICAgIC8vIG91dHB1dDoge1xyXG4gICAgICAvLyAgIGFzc2V0RmlsZU5hbWVzOiAnW25hbWVdW2V4dF0nLFxyXG4gICAgICAvLyB9LFxyXG4gICAgfSxcclxuICB9LFxyXG5cclxuICAvLyBBZGQgYSBzcGVjaWZpYyBhc3NldEluY2x1ZGUgb3B0aW9uIGZvciAuZmJ4IGZpbGVzXHJcbiAgYXNzZXRzSW5jbHVkZTogWycqKi8qLmdsYiddXHJcbn0pIl0sCiAgIm1hcHBpbmdzIjogIjtBQUE4VixTQUFTLG9CQUFvQjtBQUMzWCxPQUFPLFdBQVc7QUFDbEIsT0FBTyxVQUFVO0FBR2pCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0FBQUEsRUFDekIsY0FBYztBQUFBLElBQ1osU0FBUyxDQUFDLGdCQUFnQixnQkFBZ0I7QUFBQSxFQUM1QztBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsZUFBZTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFLZjtBQUFBLEVBQ0Y7QUFBQTtBQUFBLEVBR0EsZUFBZSxDQUFDLFVBQVU7QUFDNUIsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
