import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';

/**
 * Base Vite config for all WeldUI packages.
 * Import and extend in each package's vite.config.ts.
 *
 * @example
 * // packages/my-package/vite.config.ts
 * import { baseConfig } from '@weldui/build-tools/vite.config.base';
 * import { mergeConfig } from 'vite';
 *
 * export default mergeConfig(baseConfig('my-package', __dirname), {
 *   // package-specific overrides
 * });
 */
export function baseConfig(name: string, dir: string) {
  return defineConfig({
    build: {
      lib: {
        entry: resolve(dir, 'src/index.ts'),
        name,
        formats: ['es', 'cjs'],
        fileName: (format) => `index.${format === 'es' ? 'js' : 'cjs'}`
      },
      rollupOptions: {
        external: ['lit', /^lit\//, '@weldui/core'],
      },
      sourcemap: true,
    },
    plugins: [dts({ rollupTypes: true })],
  });
}
