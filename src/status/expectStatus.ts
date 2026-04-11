import { type HttpStatusCode } from '@rivuty/http-status';

import { type WithStatus } from './WithStatus';

export const expectStatus = (received: WithStatus, expected: HttpStatusCode) => {
  const actual = received.status;

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
