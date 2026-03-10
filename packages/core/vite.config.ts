import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'WeldUICore',
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${format === 'es' ? 'js' : 'cjs'}`
    },
    rollupOptions: {
      external: ['lit', /^lit\//],
      output: {
        globals: { lit: 'Lit' }
      }
    },
    cssCodeSplit: false,
    sourcemap: true
  },
  plugins: [
    dts({ rollupTypes: true })
  ]
});
