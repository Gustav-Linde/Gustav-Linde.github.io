import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'

// Served from the root of https://gustav-linde.github.io, so base stays '/'.
export default defineConfig({
  plugins: [vue(), vuetify({ autoImport: true })],
})
