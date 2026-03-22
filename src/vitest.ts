import { expect } from 'vitest';
import { statusMatchers } from './status/StatusMatchers';

expect.extend(statusMatchers);
