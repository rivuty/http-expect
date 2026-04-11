import { expect } from 'vitest';

import { headerMatchers, type HeaderMatchers } from './header/HeaderMatchers';
import { statusMatchers, type StatusMatchers } from './status/StatusMatchers';

expect.extend(statusMatchers);
expect.extend(headerMatchers);

declare module 'vitest' {
  // oxlint-disable-next-line typescript/no-empty-interface,typescript/no-empty-object-type,typescript/no-explicit-any
  interface Assertion<T = any> extends StatusMatchers<T>, HeaderMatchers<T> {}
  // oxlint-disable-next-line typescript/no-empty-interface,typescript/no-empty-object-type
  interface AsymmetricMatchersContaining extends StatusMatchers<unknown>, HeaderMatchers<unknown> {}
}
