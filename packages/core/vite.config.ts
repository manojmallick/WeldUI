import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';

export default defineConfig({
  test: {
    environment: 'happy-dom',
  },
  esbuild: {
    // Test files are excluded from tsconfig.json, so esbuild may not pick up
    // useDefineForClassFields:false from it. Set explicitly here so Lit property
    // decorators (@property) work correctly: class field initializers call the
    // accessor setter instead of creating an own property that shadows the accessor.
    tsconfigRaw: {
      compilerOptions: {
        useDefineForClassFields: false,
        experimentalDecorators: true,
        target: 'ES2022',
      } as Record<string, unknown>,
    },
  },
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
