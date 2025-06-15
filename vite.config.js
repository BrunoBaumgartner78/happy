import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/happy/',  // Name des GitHub-Repos hier rein!
  plugins: [react()]
})
