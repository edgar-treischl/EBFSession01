import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  base: '/EBFSession01/',  
  publicDir: 'public',
  server: {
    port: 3000,
  },
});