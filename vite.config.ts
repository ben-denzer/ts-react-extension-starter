import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  publicDir: 'config',
  build: {
    polyfillModulePreload: false,
    modulePreload: false,
    rollupOptions: {
      input: {
        popup: resolve(__dirname, 'html/popup.html'),
        contentScript: resolve(__dirname, 'src/contentScript/contentScript.ts'),
        backgroundScript: resolve(
          __dirname,
          'src/backgroundScript/backgroundScript.ts'
        ),
        sidePanel: resolve(__dirname, 'html/sidePanel.html'),
      },
      output: {
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name].[ext]',
      },
    },
  },
});
