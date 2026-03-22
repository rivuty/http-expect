import 'vitest';

import { type StatusMatchers } from '../status/StatusMatchers';

declare module 'vitest' {
  // oxlint-disable-next-line typescript/no-empty-interface,typescript/no-empty-object-type
  interface Assertion<T = unknown> extends StatusMatchers<T> {}
  // oxlint-disable-next-line typescript/no-empty-interface,typescript/no-empty-object-type
  interface AsymmetricMatchersContaining extends StatusMatchers<unknown> {}
}
