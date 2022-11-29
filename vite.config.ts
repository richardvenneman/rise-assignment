import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import eslintPlugin from 'vite-plugin-eslint';
import svgr from 'vite-plugin-svgr';
import webfontDownload from 'vite-plugin-webfont-dl';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    eslintPlugin(),
    react(),
    svgr(),
    webfontDownload([
      'https://fonts.googleapis.com/css2?family=Inter:wght@500;700&display=swap',
    ]),
  ],
});
