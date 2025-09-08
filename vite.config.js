/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// 🛠️ Define __filename y __dirname para ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr(), // ✅ vite-plugin-svgr agregado para usar ReactComponent en SVGs
  ],
  test: {
    // Puedes añadir configuración de Vitest aquí si la necesitas
  },
});
