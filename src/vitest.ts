import { expect } from 'vitest';
import { statusMatchers, type StatusMatchers } from './status/StatusMatchers';

expect.extend(statusMatchers);

declare module 'vitest' {
  // oxlint-disable-next-line typescript/no-empty-interface,typescript/no-empty-object-type,typescript/no-explicit-any
  interface Assertion<T = any> extends StatusMatchers<T> {}
  // oxlint-disable-next-line typescript/no-empty-interface,typescript/no-empty-object-type
  interface AsymmetricMatchersContaining extends StatusMatchers<unknown> {}
}
