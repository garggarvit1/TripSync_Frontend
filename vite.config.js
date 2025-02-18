import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import vue from '@vitejs/plugin-vue';


export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    sourcemap: true,  // Enable sourcemaps for production builds
  },
  server: {
    sourcemap: true,  // Enable sourcemaps for development server
  }
});
