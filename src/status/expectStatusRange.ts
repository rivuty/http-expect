import { type WithStatus } from './WithStatus';

export const expectStatusRange = ({
  received,
  min,
  max,
  label,
}: {
  received: WithStatus;
  min: number;
  max: number;
  label: string;
}) => {
  const actual = received.status;

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
