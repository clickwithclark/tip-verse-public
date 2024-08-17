import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      img: "/src/assets/img",
      src: "/src",
      components: "/src/components",
      utils: "/src/utils",
      hooks: "/src/hooks",
      routes: "/src/routes",
      shared: "/src/components/shared",
      data: "/src/data",
      context: "/src/context",
    },
  },
  server: {
    host: true,
    strictPort: true,
    port: 8000,
  },
});
