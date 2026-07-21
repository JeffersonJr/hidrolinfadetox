import { defineConfig } from 'vite';
import { tanstackStart } from '@tanstack/react-start/plugin/vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    tanstackStart({
      server: {
        preset: 'vercel',
      }
    }),
    react(),
    tailwindcss(),
    tsconfigPaths(),
  ],
  server: {
    host: '127.0.0.1'
  },
  ssr: {
    noExternal: [
      '@floating-ui/dom',
      '@floating-ui/core',
      '@floating-ui/react-dom',
      '@floating-ui/utils',
      'react-remove-scroll-bar',
      'react-style-singleton',
      'react-remove-scroll',
      /^@radix-ui\//
    ]
  }
});
