import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';
import fs from 'fs';

export default defineConfig({
  server: {
    https: {
      key: fs.readFileSync('C:\\Users\\andre\\AppData\\Local\\mkcert\\127.0.0.1+1-key.pem'),
      cert: fs.readFileSync('C:\\Users\\andre\\AppData\\Local\\mkcert\\127.0.0.1+1.pem')
    },
    proxy: {}
  },
  plugins: [sveltekit()],
})
