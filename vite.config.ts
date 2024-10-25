import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@utils': path.resolve(__dirname, 'src/utils'),
    },
  },
  server: {
    port: 3000, // Cambia el puerto del servidor de desarrollo si es necesario
    open: true, // Abre el navegador automáticamente al iniciar el servidor
  },
  build: {
    outDir: 'dist', // Directorio de salida para el build de producción
    sourcemap: true, // Habilita los sourcemaps en producción
  },
  define: {
    'process.env': {}, // Si necesitas definir variables de entorno personalizadas
  },
});