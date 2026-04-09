import { type ResponseLike } from './ResponseLike';

export const expectStatusRange = ({
  response,
  min,
  max,
  label,
}: {
  response: ResponseLike;
  min: number;
  max: number;
  label: string;
}) => {
  const actual = response.status;

  const pass = actual >= min && actual <= max;

  return {
    pass,
    message: () =>
      pass
        ? `Response has not expected ${actual} status code (expected ${label})`
        : `Response has ${actual} instead of a ${label} status code`,
    actual,
    expected: label,
  };
};
