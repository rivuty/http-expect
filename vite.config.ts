import dts from 'vite-plugin-dts';
import { defineConfig } from 'vitest/config';

import { dependencies, devDependencies } from './package.json';

const externalPackages = [...Object.keys(dependencies), ...Object.keys(devDependencies)];

export default defineConfig({
  plugins: [dts({ exclude: ['**/*.test.ts'] })],
  build: {
    lib: {
      entry: 'src/vitest.ts',
      fileName: 'vitest',
      formats: ['es'],
    },
    rolldownOptions: {
      external: externalPackages,
      output: {
        globals: Object.fromEntries(externalPackages.map(packageName => [packageName, packageName])),
      },
    },
  },
  test: {
    isolate: false,
    setupFiles: 'src/vitest.ts',
  },
});
