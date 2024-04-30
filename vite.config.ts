import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte';
import fs from 'fs';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    https: {
      key: fs.readFileSync('C:\\Users\\andre\\AppData\\Local\\mkcert\\127.0.0.1+1-key.pem'),
      cert: fs.readFileSync('C:/Users/andre/AppData/Local/mkcert//127.0.0.1+1.pem')
    },
    proxy: {}
  },
  plugins: [svelte()],
  optimizeDeps: { exclude: ["svelte-navigator"] },
})
