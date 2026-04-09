import { type HttpStatusCode } from '@rivuty/http-status';

import { type ResponseLike } from './ResponseLike';

export const expectStatus = (response: ResponseLike, expected: HttpStatusCode) => {
  const actual = response.status;

  const pass = actual === expected;

  return {
    pass,
    message: () =>
      pass
        ? `Response has not expected ${actual} status code`
        : `Response has ${actual} instead of ${expected} status code`,
    actual,
    expected,
  };
};
