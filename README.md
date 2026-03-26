# @rivuty/http-expect

Vitest matchers for HTTP response status codes. Extends `expect` with readable, named assertions for all standard HTTP status codes.

## Installation

```sh
npm install @rivuty/http-expect
# or
pnpm add @rivuty/http-expect
```

## Setup

Reference package in your Vitest config:

```ts
// vitest.config.ts
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    setupFiles: ['@rivuty/http-expect'],
  },
});
```

## Usage

Pass any object with a `status` number property to `expect`, then call the matcher:

```ts
import { describe, it } from 'vitest';

describe('GET /users', () => {
  it('returns 200', async () => {
    const response = await fetch('/users');
    expect(response).toHaveOkStatus();
  });

  it('returns 201 on create', async () => {
    const response = await fetch('/users', { method: 'POST', body: '...' });
    expect(response).toHaveCreatedStatus();
  });

  it('returns 404 for unknown user', async () => {
    const response = await fetch('/users/999');
    expect(response).toHaveNotFoundStatus();
  });
});
```

Works with any HTTP client that exposes a numeric `status` field — `fetch`, `axios`, `supertest`, Node.js `http`, etc.

## Matchers

### 1xx Informational

| Matcher                            | Status |
| ---------------------------------- | ------ |
| `toHaveContinueStatus()`           | 100    |
| `toHaveSwitchingProtocolsStatus()` | 101    |
| `toHaveProcessingStatus()`         | 102    |
| `toHaveEarlyHintsStatus()`         | 103    |

### 2xx Success

| Matcher                                     | Status |
| ------------------------------------------- | ------ |
| `toHaveOkStatus()`                          | 200    |
| `toHaveCreatedStatus()`                     | 201    |
| `toHaveAcceptedStatus()`                    | 202    |
| `toHaveNonAuthoritativeInformationStatus()` | 203    |
| `toHaveNoContentStatus()`                   | 204    |
| `toHaveResetContentStatus()`                | 205    |
| `toHavePartialContentStatus()`              | 206    |
| `toHaveMultiStatusStatus()`                 | 207    |
| `toHaveAlreadyReportedStatus()`             | 208    |
| `toHaveInstanceManipulationUsedStatus()`    | 226    |

### 3xx Redirection

| Matcher                           | Status |
| --------------------------------- | ------ |
| `toHaveMultipleChoicesStatus()`   | 300    |
| `toHaveMovedPermanentlyStatus()`  | 301    |
| `toHaveFoundStatus()`             | 302    |
| `toHaveSeeOtherStatus()`          | 303    |
| `toHaveNotModifiedStatus()`       | 304    |
| `toHaveUseProxyStatus()`          | 305    |
| `toHaveTemporaryRedirectStatus()` | 307    |
| `toHavePermanentRedirectStatus()` | 308    |

### 4xx Client Errors

| Matcher                                     | Status |
| ------------------------------------------- | ------ |
| `toHaveBadRequestStatus()`                  | 400    |
| `toHaveUnauthorizedStatus()`                | 401    |
| `toHavePaymentRequiredStatus()`             | 402    |
| `toHaveForbiddenStatus()`                   | 403    |
| `toHaveNotFoundStatus()`                    | 404    |
| `toHaveMethodNotAllowedStatus()`            | 405    |
| `toHaveNotAcceptableStatus()`               | 406    |
| `toHaveProxyAuthenticationRequiredStatus()` | 407    |
| `toHaveRequestTimeoutStatus()`              | 408    |
| `toHaveConflictStatus()`                    | 409    |
| `toHaveGoneStatus()`                        | 410    |
| `toHaveLengthRequiredStatus()`              | 411    |
| `toHavePreconditionFailedStatus()`          | 412    |
| `toHavePayloadTooLargeStatus()`             | 413    |
| `toHaveUriTooLongStatus()`                  | 414    |
| `toHaveUnsupportedMediaTypeStatus()`        | 415    |
| `toHaveRangeNotSatisfiableStatus()`         | 416    |
| `toHaveExpectationFailedStatus()`           | 417    |
| `toHaveMisdirectedRequestStatus()`          | 421    |
| `toHaveUnprocessableContentStatus()`        | 422    |
| `toHaveLockedStatus()`                      | 423    |
| `toHaveFailedDependencyStatus()`            | 424    |
| `toHaveTooEarlyStatus()`                    | 425    |
| `toHaveUpgradeRequiredStatus()`             | 426    |
| `toHavePreconditionRequiredStatus()`        | 428    |
| `toHaveTooManyRequestsStatus()`             | 429    |
| `toHaveRequestHeaderFieldsTooLargeStatus()` | 431    |
| `toHaveUnavailableForLegalReasonsStatus()`  | 451    |

### 5xx Server Errors

| Matcher                                       | Status |
| --------------------------------------------- | ------ |
| `toHaveInternalServerErrorStatus()`           | 500    |
| `toHaveNotImplementedStatus()`                | 501    |
| `toHaveBadGatewayStatus()`                    | 502    |
| `toHaveServiceUnavailableStatus()`            | 503    |
| `toHaveGatewayTimeoutStatus()`                | 504    |
| `toHaveHttpVersionNotSupportedStatus()`       | 505    |
| `toHaveVariantAlsoNegotiatesStatus()`         | 506    |
| `toHaveInsufficientStorageStatus()`           | 507    |
| `toHaveLoopDetectedStatus()`                  | 508    |
| `toHaveNotExtendedStatus()`                   | 510    |
| `toHaveNetworkAuthenticationRequiredStatus()` | 511    |

## Contributing

Thank you for considering contributing to @rivuty/http-status! You can read the contribution guide [here](.github/CONTRIBUTING.md).

## License

@rivuty/http-expect is open-sourced under the [MIT license](LICENSE).
