import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Portfolio-Website/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        agentic: resolve(__dirname, 'work-agentic.html'),
        hau: resolve(__dirname, 'work-hau.html'),
        lava: resolve(__dirname, 'work-lava.html'),
        n8n: resolve(__dirname, 'work-n8n.html'),
      }
    }
  }
})
