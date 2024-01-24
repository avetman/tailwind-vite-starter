import { defineConfig } from 'vite';


export default defineConfig({
  plugins: [],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          styles: ['src/main.css'],
        },
      },
    },
  },
});