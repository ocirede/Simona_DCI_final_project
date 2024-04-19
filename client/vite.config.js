import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  resolve: {
    extensions: [".js", ".jsx", ".json"],
  },
  css: {
    // Exclude CSS files from being bundled
    exclude: ["react-quill/dist/quill.snow.css"],
  },
});
