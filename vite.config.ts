import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    isolate: false,
    setupFiles: 'src/vitest.ts',
  },
});
