import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";
import Sitemap from "vite-plugin-sitemap";
import path from "path";

export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    Sitemap({
      hostname: "https://baakopay.com",
      dynamicRoutes: [
        "/solutions",
        "/who-we-serve",
        "/how-it-works",
        "/integrations",
        "/contact",
      ],
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
