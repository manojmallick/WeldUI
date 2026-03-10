import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'WeldUIReact',
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${format === 'es' ? 'js' : 'cjs'}`
    },
    rollupOptions: {
      external: ['react', 'react/jsx-runtime', 'react-dom', 'lit', /^lit\//, '@weldui/core'],
      output: {
        globals: { react: 'React' }
      }
    },
    sourcemap: true
  }
});
