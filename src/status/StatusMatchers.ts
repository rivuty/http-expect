import { HttpStatusCode } from '@rivuty/http-status';

import { expectStatus } from './expectStatus';
import { type ResponseLike } from './ResponseLike';

export interface StatusMatchers<_> {
  // 1xx Informational
  toHaveContinueStatus: () => void;
  toHaveSwitchingProtocolsStatus: () => void;
  toHaveProcessingStatus: () => void;
  toHaveEarlyHintsStatus: () => void;
  // 2xx Success
  toHaveOkStatus: () => void;
  toHaveCreatedStatus: () => void;
  toHaveAcceptedStatus: () => void;
  toHaveNonAuthoritativeInformationStatus: () => void;
  toHaveNoContentStatus: () => void;
  toHaveResetContentStatus: () => void;
  toHavePartialContentStatus: () => void;
  toHaveMultiStatusStatus: () => void;
  toHaveAlreadyReportedStatus: () => void;
  toHaveInstanceManipulationUsedStatus: () => void;
  // 3xx Redirection
  toHaveMultipleChoicesStatus: () => void;
  toHaveMovedPermanentlyStatus: () => void;
  toHaveFoundStatus: () => void;
  toHaveSeeOtherStatus: () => void;
  toHaveNotModifiedStatus: () => void;
  toHaveUseProxyStatus: () => void;
  toHaveTemporaryRedirectStatus: () => void;
  toHavePermanentRedirectStatus: () => void;
  // 4xx Client Errors
  toHaveBadRequestStatus: () => void;
  toHaveUnauthorizedStatus: () => void;
  toHavePaymentRequiredStatus: () => void;
  toHaveForbiddenStatus: () => void;
  toHaveNotFoundStatus: () => void;
  toHaveMethodNotAllowedStatus: () => void;
  toHaveNotAcceptableStatus: () => void;
  toHaveProxyAuthenticationRequiredStatus: () => void;
  toHaveRequestTimeoutStatus: () => void;
  toHaveConflictStatus: () => void;
  toHaveGoneStatus: () => void;
  toHaveLengthRequiredStatus: () => void;
  toHavePreconditionFailedStatus: () => void;
  toHavePayloadTooLargeStatus: () => void;
  toHaveUriTooLongStatus: () => void;
  toHaveUnsupportedMediaTypeStatus: () => void;
  toHaveRangeNotSatisfiableStatus: () => void;
  toHaveExpectationFailedStatus: () => void;
  toHaveMisdirectedRequestStatus: () => void;
  toHaveUnprocessableContentStatus: () => void;
  toHaveLockedStatus: () => void;
  toHaveFailedDependencyStatus: () => void;
  toHaveTooEarlyStatus: () => void;
  toHaveUpgradeRequiredStatus: () => void;
  toHavePreconditionRequiredStatus: () => void;
  toHaveTooManyRequestsStatus: () => void;
  toHaveRequestHeaderFieldsTooLargeStatus: () => void;
  toHaveUnavailableForLegalReasonsStatus: () => void;
  // 5xx Server Errors
  toHaveInternalServerErrorStatus: () => void;
  toHaveNotImplementedStatus: () => void;
  toHaveBadGatewayStatus: () => void;
  toHaveServiceUnavailableStatus: () => void;
  toHaveGatewayTimeoutStatus: () => void;
  toHaveHttpVersionNotSupportedStatus: () => void;
  toHaveVariantAlsoNegotiatesStatus: () => void;
  toHaveInsufficientStorageStatus: () => void;
  toHaveLoopDetectedStatus: () => void;
  toHaveNotExtendedStatus: () => void;
  toHaveNetworkAuthenticationRequiredStatus: () => void;
}

export const statusMatchers = {
  // 1xx Informational
  toHaveContinueStatus: (received: ResponseLike) => expectStatus(received, HttpStatusCode.Continue),
  toHaveSwitchingProtocolsStatus: (received: ResponseLike) => expectStatus(received, HttpStatusCode.SwitchingProtocols),
  toHaveProcessingStatus: (received: ResponseLike) => expectStatus(received, HttpStatusCode.Processing),
  toHaveEarlyHintsStatus: (received: ResponseLike) => expectStatus(received, HttpStatusCode.EarlyHints),
  // 2xx Success
  toHaveOkStatus: (received: ResponseLike) => expectStatus(received, HttpStatusCode.Ok),
  toHaveCreatedStatus: (received: ResponseLike) => expectStatus(received, HttpStatusCode.Created),
  toHaveAcceptedStatus: (received: ResponseLike) => expectStatus(received, HttpStatusCode.Accepted),
  toHaveNonAuthoritativeInformationStatus: (received: ResponseLike) =>
    expectStatus(received, HttpStatusCode.NonAuthoritativeInformation),
  toHaveNoContentStatus: (received: ResponseLike) => expectStatus(received, HttpStatusCode.NoContent),
  toHaveResetContentStatus: (received: ResponseLike) => expectStatus(received, HttpStatusCode.ResetContent),
  toHavePartialContentStatus: (received: ResponseLike) => expectStatus(received, HttpStatusCode.PartialContent),
  toHaveMultiStatusStatus: (received: ResponseLike) => expectStatus(received, HttpStatusCode.MultiStatus),
  toHaveAlreadyReportedStatus: (received: ResponseLike) => expectStatus(received, HttpStatusCode.AlreadyReported),
  toHaveInstanceManipulationUsedStatus: (received: ResponseLike) =>
    expectStatus(received, HttpStatusCode.InstanceManipulationUsed),
  // 3xx Redirection
  toHaveMultipleChoicesStatus: (received: ResponseLike) => expectStatus(received, HttpStatusCode.MultipleChoices),
  toHaveMovedPermanentlyStatus: (received: ResponseLike) => expectStatus(received, HttpStatusCode.MovedPermanently),
  toHaveFoundStatus: (received: ResponseLike) => expectStatus(received, HttpStatusCode.Found),
  toHaveSeeOtherStatus: (received: ResponseLike) => expectStatus(received, HttpStatusCode.SeeOther),
  toHaveNotModifiedStatus: (received: ResponseLike) => expectStatus(received, HttpStatusCode.NotModified),
  toHaveUseProxyStatus: (received: ResponseLike) => expectStatus(received, HttpStatusCode.UseProxy),
  toHaveTemporaryRedirectStatus: (received: ResponseLike) => expectStatus(received, HttpStatusCode.TemporaryRedirect),
  toHavePermanentRedirectStatus: (received: ResponseLike) => expectStatus(received, HttpStatusCode.PermanentRedirect),
  // 4xx Client Errors
  toHaveBadRequestStatus: (received: ResponseLike) => expectStatus(received, HttpStatusCode.BadRequest),
  toHaveUnauthorizedStatus: (received: ResponseLike) => expectStatus(received, HttpStatusCode.Unauthorized),
  toHavePaymentRequiredStatus: (received: ResponseLike) => expectStatus(received, HttpStatusCode.PaymentRequired),
  toHaveForbiddenStatus: (received: ResponseLike) => expectStatus(received, HttpStatusCode.Forbidden),
  toHaveNotFoundStatus: (received: ResponseLike) => expectStatus(received, HttpStatusCode.NotFound),
  toHaveMethodNotAllowedStatus: (received: ResponseLike) => expectStatus(received, HttpStatusCode.MethodNotAllowed),
  toHaveNotAcceptableStatus: (received: ResponseLike) => expectStatus(received, HttpStatusCode.NotAcceptable),
  toHaveProxyAuthenticationRequiredStatus: (received: ResponseLike) =>
    expectStatus(received, HttpStatusCode.ProxyAuthenticationRequired),
  toHaveRequestTimeoutStatus: (received: ResponseLike) => expectStatus(received, HttpStatusCode.RequestTimeout),
  toHaveConflictStatus: (received: ResponseLike) => expectStatus(received, HttpStatusCode.Conflict),
  toHaveGoneStatus: (received: ResponseLike) => expectStatus(received, HttpStatusCode.Gone),
  toHaveLengthRequiredStatus: (received: ResponseLike) => expectStatus(received, HttpStatusCode.LengthRequired),
  toHavePreconditionFailedStatus: (received: ResponseLike) => expectStatus(received, HttpStatusCode.PreconditionFailed),
  toHavePayloadTooLargeStatus: (received: ResponseLike) => expectStatus(received, HttpStatusCode.PayloadTooLarge),
  toHaveUriTooLongStatus: (received: ResponseLike) => expectStatus(received, HttpStatusCode.UriTooLong),
  toHaveUnsupportedMediaTypeStatus: (received: ResponseLike) =>
    expectStatus(received, HttpStatusCode.UnsupportedMediaType),
  toHaveRangeNotSatisfiableStatus: (received: ResponseLike) =>
    expectStatus(received, HttpStatusCode.RangeNotSatisfiable),
  toHaveExpectationFailedStatus: (received: ResponseLike) => expectStatus(received, HttpStatusCode.ExpectationFailed),
  toHaveMisdirectedRequestStatus: (received: ResponseLike) => expectStatus(received, HttpStatusCode.MisdirectedRequest),
  toHaveUnprocessableContentStatus: (received: ResponseLike) =>
    expectStatus(received, HttpStatusCode.UnprocessableContent),
  toHaveLockedStatus: (received: ResponseLike) => expectStatus(received, HttpStatusCode.Locked),
  toHaveFailedDependencyStatus: (received: ResponseLike) => expectStatus(received, HttpStatusCode.FailedDependency),
  toHaveTooEarlyStatus: (received: ResponseLike) => expectStatus(received, HttpStatusCode.TooEarly),
  toHaveUpgradeRequiredStatus: (received: ResponseLike) => expectStatus(received, HttpStatusCode.UpgradeRequired),
  toHavePreconditionRequiredStatus: (received: ResponseLike) =>
    expectStatus(received, HttpStatusCode.PreconditionRequired),
  toHaveTooManyRequestsStatus: (received: ResponseLike) => expectStatus(received, HttpStatusCode.TooManyRequests),
  toHaveRequestHeaderFieldsTooLargeStatus: (received: ResponseLike) =>
    expectStatus(received, HttpStatusCode.RequestHeaderFieldsTooLarge),
  toHaveUnavailableForLegalReasonsStatus: (received: ResponseLike) =>
    expectStatus(received, HttpStatusCode.UnavailableForLegalReasons),
  // 5xx Server Errors
  toHaveInternalServerErrorStatus: (received: ResponseLike) =>
    expectStatus(received, HttpStatusCode.InternalServerError),
  toHaveNotImplementedStatus: (received: ResponseLike) => expectStatus(received, HttpStatusCode.NotImplemented),
  toHaveBadGatewayStatus: (received: ResponseLike) => expectStatus(received, HttpStatusCode.BadGateway),
  toHaveServiceUnavailableStatus: (received: ResponseLike) => expectStatus(received, HttpStatusCode.ServiceUnavailable),
  toHaveGatewayTimeoutStatus: (received: ResponseLike) => expectStatus(received, HttpStatusCode.GatewayTimeout),
  toHaveHttpVersionNotSupportedStatus: (received: ResponseLike) =>
    expectStatus(received, HttpStatusCode.HttpVersionNotSupported),
  toHaveVariantAlsoNegotiatesStatus: (received: ResponseLike) =>
    expectStatus(received, HttpStatusCode.VariantAlsoNegotiates),
  toHaveInsufficientStorageStatus: (received: ResponseLike) =>
    expectStatus(received, HttpStatusCode.InsufficientStorage),
  toHaveLoopDetectedStatus: (received: ResponseLike) => expectStatus(received, HttpStatusCode.LoopDetected),
  toHaveNotExtendedStatus: (received: ResponseLike) => expectStatus(received, HttpStatusCode.NotExtended),
  toHaveNetworkAuthenticationRequiredStatus: (received: ResponseLike) =>
    expectStatus(received, HttpStatusCode.NetworkAuthenticationRequired),
};
