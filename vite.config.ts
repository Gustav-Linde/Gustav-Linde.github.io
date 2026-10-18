import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'

// Served from the root of https://gustav-linde.github.io, so base stays '/'.
export default defineConfig({
  // GitHub Pages serves the committed docs/ folder (Settings, Pages, Deploy from a branch, /docs).
  build: { outDir: 'docs', emptyOutDir: true },
  plugins: [vue(), vuetify({ autoImport: true })],
})
