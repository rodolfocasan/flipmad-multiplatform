import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  base: './', // Asegura que las rutas sean relativas
  build: {
    outDir: 'dist',
  },

  /* Abertura de puerto (COMENTAR PARA PRODUCCIÓN) */
  server: {
    host: true,
    port: 3000,
    open: false
  },
});
