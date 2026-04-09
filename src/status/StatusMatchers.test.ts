import { describe, expect, it } from 'vitest';

describe('StatusMatchers', () => {
  it.each([
    // 1xx-5xx ranges
    ['toHave1xxInformationalStatus', 100, '1xx Informational'],
    ['toHave2xxSuccessfulStatus', 200, '2xx Successful'],
    ['toHave3xxRedirectionStatus', 300, '3xx Redirection'],
    ['toHave4xxClientErrorStatus', 400, '4xx Client Error'],
    ['toHave5xxServerErrorStatus', 500, '5xx Server Error'],
  ] as const)('%s', (matcher, status, label) => {
    expect({ status })[matcher]();

    expect(() => expect({ status: 99 })[matcher]()).toThrow(`Response has 99 instead of a ${label} status code`);
  });

  it.each([
    // 1xx Informational
    ['toHaveContinueStatus', 100],
    ['toHaveSwitchingProtocolsStatus', 101],
    ['toHaveProcessingStatus', 102],
    ['toHaveEarlyHintsStatus', 103],
    // 2xx Success
    ['toHaveOkStatus', 200],
    ['toHaveCreatedStatus', 201],
    ['toHaveAcceptedStatus', 202],
    ['toHaveNonAuthoritativeInformationStatus', 203],
    ['toHaveNoContentStatus', 204],
    ['toHaveResetContentStatus', 205],
    ['toHavePartialContentStatus', 206],
    ['toHaveMultiStatusStatus', 207],
    ['toHaveAlreadyReportedStatus', 208],
    ['toHaveInstanceManipulationUsedStatus', 226],
    // 3xx Redirection
    ['toHaveMultipleChoicesStatus', 300],
    ['toHaveMovedPermanentlyStatus', 301],
    ['toHaveFoundStatus', 302],
    ['toHaveSeeOtherStatus', 303],
    ['toHaveNotModifiedStatus', 304],
    ['toHaveUseProxyStatus', 305],
    ['toHaveTemporaryRedirectStatus', 307],
    ['toHavePermanentRedirectStatus', 308],
    // 4xx Client Errors
    ['toHaveBadRequestStatus', 400],
    ['toHaveUnauthorizedStatus', 401],
    ['toHavePaymentRequiredStatus', 402],
    ['toHaveForbiddenStatus', 403],
    ['toHaveNotFoundStatus', 404],
    ['toHaveMethodNotAllowedStatus', 405],
    ['toHaveNotAcceptableStatus', 406],
    ['toHaveProxyAuthenticationRequiredStatus', 407],
    ['toHaveRequestTimeoutStatus', 408],
    ['toHaveConflictStatus', 409],
    ['toHaveGoneStatus', 410],
    ['toHaveLengthRequiredStatus', 411],
    ['toHavePreconditionFailedStatus', 412],
    ['toHavePayloadTooLargeStatus', 413],
    ['toHaveUriTooLongStatus', 414],
    ['toHaveUnsupportedMediaTypeStatus', 415],
    ['toHaveRangeNotSatisfiableStatus', 416],
    ['toHaveExpectationFailedStatus', 417],
    ['toHaveMisdirectedRequestStatus', 421],
    ['toHaveUnprocessableContentStatus', 422],
    ['toHaveLockedStatus', 423],
    ['toHaveFailedDependencyStatus', 424],
    ['toHaveTooEarlyStatus', 425],
    ['toHaveUpgradeRequiredStatus', 426],
    ['toHavePreconditionRequiredStatus', 428],
    ['toHaveTooManyRequestsStatus', 429],
    ['toHaveRequestHeaderFieldsTooLargeStatus', 431],
    ['toHaveUnavailableForLegalReasonsStatus', 451],
    // 5xx Server Errors
    ['toHaveInternalServerErrorStatus', 500],
    ['toHaveNotImplementedStatus', 501],
    ['toHaveBadGatewayStatus', 502],
    ['toHaveServiceUnavailableStatus', 503],
    ['toHaveGatewayTimeoutStatus', 504],
    ['toHaveHttpVersionNotSupportedStatus', 505],
    ['toHaveVariantAlsoNegotiatesStatus', 506],
    ['toHaveInsufficientStorageStatus', 507],
    ['toHaveLoopDetectedStatus', 508],
    ['toHaveNotExtendedStatus', 510],
    ['toHaveNetworkAuthenticationRequiredStatus', 511],
  ] as const)('%s', (matcher, status) => {
    expect({ status })[matcher]();

    const other = status === 200 ? 404 : 200;
    // oxlint-disable-next-line typescript/no-confusing-void-expression
    expect(() => expect({ status: other })[matcher]()).toThrow(
      `Response has ${other} instead of ${status} status code`,
    );
  });
});
