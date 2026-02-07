import { defineConfig } from 'vite'
// @ts-ignore
import { fileURLToPath } from 'url'
// @ts-ignore
import { dirname, resolve } from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

const __dirname = dirname(fileURLToPath(import.meta.url))

// Only use proxy in development
const isDev = process.env.NODE_ENV !== 'production';

export default defineConfig({
  plugins: [
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': resolve(__dirname, './src'),
    },
  },
  server: {
    port: 5173,
    strictPort: false,
    host: true,
    // Only proxy in development
    ...(isDev ? {
      proxy: {
        '/api': {
          target: 'http://localhost:5000',
          changeOrigin: true,
          secure: false,
        },
        '/health': {
          target: 'http://localhost:5000',
          changeOrigin: true,
          secure: false,
        }
      }
    } : {})
  },
  build: {
    outDir: 'dist',
  }
})