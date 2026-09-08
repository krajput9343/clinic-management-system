import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {

    proxy: {
      "/api": {
        target: "http://187.77.187.109:7073",
        changeOrigin: true,
        secure: false
      },

      "/auth": {
        target: "http://187.77.187.109:7073",
        changeOrigin: true,
        secure: false
      }
    }

  }
})