import webfontDownload from 'vite-plugin-webfont-dl';
import { defineConfig } from 'vite';
import eslintPlugin from 'vite-plugin-eslint';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    eslintPlugin(),
    react(),
    webfontDownload([
      'https://fonts.googleapis.com/css2?family=Inter:wght@500;700&display=swap',
    ]),
  ],
});
