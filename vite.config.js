import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src/frontend', // local onde está seu index.html
  server: {
    port: 5173, // opcional, força o uso da porta 5173
  },
  build: {
    outDir: '../../dist', // saída fora da pasta frontend
    emptyOutDir: true,
  },
});
