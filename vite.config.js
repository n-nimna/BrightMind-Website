import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import ViteImagemin from 'vite-plugin-imagemin';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteImagemin({
      gifsicle: { interlaced: true },
      mozjpeg: { quality: 70 },
      optipng: { optimizationLevel: 5 },
      svgo: { plugins: [{ removeViewBox: false }] },
    }),
  ],
  
  base: "/BrightMind-Website",  // Specify the base path
  
  publicDir: 'public',
  
  build: {
    assetsDir: 'assets',
  },
  
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Alias for the 'src' directory
    },
  },
});
