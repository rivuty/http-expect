import { HttpStatusCode } from '@rivuty/http-status';
import { type ResponseLike } from './ResponseLike';
import { expectStatus } from './expectStatus';

export interface StatusMatchers<_> {
  toHaveOkStatus: () => void;
}

export const statusMatchers = {
  toHaveOkStatus: (received: ResponseLike) => expectStatus(received, HttpStatusCode.Ok),
};
