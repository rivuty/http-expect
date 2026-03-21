import { type HttpStatusCode } from '@rivuty/http-status';
import { type ResponseLike } from './ResponseLike';

export const expectStatus = (response: ResponseLike, status: (typeof HttpStatusCode)[keyof typeof HttpStatusCode]) => {
  const actual = response.status;

  return {
    pass: actual === status,
    message: () => 'Response has wrong status code',
    actual,
    expected: status,
  };
};
