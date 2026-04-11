import { type WithHeaders } from './WithHeaders';

export interface HeaderMatchers<_> {
  toHaveHeader: (name: string) => void;
}

export const headerMatchers = {
  toHaveHeader: ({ headers }: WithHeaders, name: string) => {
    const pass = headers.has(name);

    return {
      pass,
      message: () => (pass ? `Response has not expected "${name}" header` : `Response does not have "${name}" header`),
      actual: [...headers.keys()],
      expected: name,
    };
  },
};
