import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const pathSrc = path.resolve(__dirname, 'src')

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    fs: {
      // Allow serving files from one level up to the project root
      allow: ['..']
    }
  },
  plugins: [vue()],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: pathSrc
      },
      {
        find: '@pages',
        replacement: path.resolve(__dirname, 'src/pages')
      },
      {
        find: '@model',
        replacement: path.resolve(__dirname, 'src/data/model')
      }
    ]
  }
})
