import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  // ✅ Important for Swiper & smooth Vercel build
  optimizeDeps: {
    include: ["swiper", "swiper/react", "swiper/modules"],
  },

  build: {
    rollupOptions: {
      // prevent Vercel Rollup from externalizing Swiper accidentally
      external: [],
    },
  },
}));
