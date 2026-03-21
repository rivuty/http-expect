import { HttpStatusCode } from '@rivuty/http-status';

const expectCode = (response: { status: number }, code: (typeof HttpStatusCode)[keyof typeof HttpStatusCode]) => {
  const actual = response.status;

  return {
    pass: actual === code,
    message: () => 'Response has wrong status code',
    actual,
    expected: code,
  };
};

export const status = {
  isOk: (received: { status: number }) => expectCode(received, HttpStatusCode.Ok),
};
