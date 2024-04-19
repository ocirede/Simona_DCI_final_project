import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import "react-quill/dist/quill.snow.css"; // Manually import the CSS file

export default defineConfig({
  plugins: [react()],
  resolve: {
    extensions: [".js", ".jsx", ".json"],
  },
});
