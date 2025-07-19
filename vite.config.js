import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/personal-site/', // for GitHub Pages deployment
  plugins: [react()],
}); 