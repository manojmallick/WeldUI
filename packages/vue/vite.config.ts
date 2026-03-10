import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'WeldUIVue',
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${format === 'es' ? 'js' : 'cjs'}`
    },
    rollupOptions: {
      external: ['vue', 'lit', /^lit\//, '@weldui/core'],
      output: {
        globals: { vue: 'Vue' }
      }
    },
    sourcemap: true
  },
  plugins: [
    vue({ isCustomElement: (tag) => tag.startsWith('wu-') })
  ]
});
