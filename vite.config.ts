import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from "tailwindcss";

import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    }
  },
  resolve: {
    alias: {
     '@': path.resolve(__dirname, './src'),
     "@modules": path.resolve(__dirname, './src/modules'),
     "@components": path.resolve(__dirname, './src/common/components')
    }
  },  
})
