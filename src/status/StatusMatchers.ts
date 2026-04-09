import { HttpStatusCodes } from '@rivuty/http-status';

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
  toHaveContinueStatus: (received: ResponseLike) => expectStatus(received, HttpStatusCodes.Continue),
  toHaveSwitchingProtocolsStatus: (received: ResponseLike) =>
    expectStatus(received, HttpStatusCodes.SwitchingProtocols),
  toHaveProcessingStatus: (received: ResponseLike) => expectStatus(received, HttpStatusCodes.Processing),
  toHaveEarlyHintsStatus: (received: ResponseLike) => expectStatus(received, HttpStatusCodes.EarlyHints),
  // 2xx Success
  toHaveOkStatus: (received: ResponseLike) => expectStatus(received, HttpStatusCodes.Ok),
  toHaveCreatedStatus: (received: ResponseLike) => expectStatus(received, HttpStatusCodes.Created),
  toHaveAcceptedStatus: (received: ResponseLike) => expectStatus(received, HttpStatusCodes.Accepted),
  toHaveNonAuthoritativeInformationStatus: (received: ResponseLike) =>
    expectStatus(received, HttpStatusCodes.NonAuthoritativeInformation),
  toHaveNoContentStatus: (received: ResponseLike) => expectStatus(received, HttpStatusCodes.NoContent),
  toHaveResetContentStatus: (received: ResponseLike) => expectStatus(received, HttpStatusCodes.ResetContent),
  toHavePartialContentStatus: (received: ResponseLike) => expectStatus(received, HttpStatusCodes.PartialContent),
  toHaveMultiStatusStatus: (received: ResponseLike) => expectStatus(received, HttpStatusCodes.MultiStatus),
  toHaveAlreadyReportedStatus: (received: ResponseLike) => expectStatus(received, HttpStatusCodes.AlreadyReported),
  toHaveInstanceManipulationUsedStatus: (received: ResponseLike) =>
    expectStatus(received, HttpStatusCodes.InstanceManipulationUsed),
  // 3xx Redirection
  toHaveMultipleChoicesStatus: (received: ResponseLike) => expectStatus(received, HttpStatusCodes.MultipleChoices),
  toHaveMovedPermanentlyStatus: (received: ResponseLike) => expectStatus(received, HttpStatusCodes.MovedPermanently),
  toHaveFoundStatus: (received: ResponseLike) => expectStatus(received, HttpStatusCodes.Found),
  toHaveSeeOtherStatus: (received: ResponseLike) => expectStatus(received, HttpStatusCodes.SeeOther),
  toHaveNotModifiedStatus: (received: ResponseLike) => expectStatus(received, HttpStatusCodes.NotModified),
  toHaveUseProxyStatus: (received: ResponseLike) => expectStatus(received, HttpStatusCodes.UseProxy),
  toHaveTemporaryRedirectStatus: (received: ResponseLike) => expectStatus(received, HttpStatusCodes.TemporaryRedirect),
  toHavePermanentRedirectStatus: (received: ResponseLike) => expectStatus(received, HttpStatusCodes.PermanentRedirect),
  // 4xx Client Errors
  toHaveBadRequestStatus: (received: ResponseLike) => expectStatus(received, HttpStatusCodes.BadRequest),
  toHaveUnauthorizedStatus: (received: ResponseLike) => expectStatus(received, HttpStatusCodes.Unauthorized),
  toHavePaymentRequiredStatus: (received: ResponseLike) => expectStatus(received, HttpStatusCodes.PaymentRequired),
  toHaveForbiddenStatus: (received: ResponseLike) => expectStatus(received, HttpStatusCodes.Forbidden),
  toHaveNotFoundStatus: (received: ResponseLike) => expectStatus(received, HttpStatusCodes.NotFound),
  toHaveMethodNotAllowedStatus: (received: ResponseLike) => expectStatus(received, HttpStatusCodes.MethodNotAllowed),
  toHaveNotAcceptableStatus: (received: ResponseLike) => expectStatus(received, HttpStatusCodes.NotAcceptable),
  toHaveProxyAuthenticationRequiredStatus: (received: ResponseLike) =>
    expectStatus(received, HttpStatusCodes.ProxyAuthenticationRequired),
  toHaveRequestTimeoutStatus: (received: ResponseLike) => expectStatus(received, HttpStatusCodes.RequestTimeout),
  toHaveConflictStatus: (received: ResponseLike) => expectStatus(received, HttpStatusCodes.Conflict),
  toHaveGoneStatus: (received: ResponseLike) => expectStatus(received, HttpStatusCodes.Gone),
  toHaveLengthRequiredStatus: (received: ResponseLike) => expectStatus(received, HttpStatusCodes.LengthRequired),
  toHavePreconditionFailedStatus: (received: ResponseLike) =>
    expectStatus(received, HttpStatusCodes.PreconditionFailed),
  toHavePayloadTooLargeStatus: (received: ResponseLike) => expectStatus(received, HttpStatusCodes.PayloadTooLarge),
  toHaveUriTooLongStatus: (received: ResponseLike) => expectStatus(received, HttpStatusCodes.UriTooLong),
  toHaveUnsupportedMediaTypeStatus: (received: ResponseLike) =>
    expectStatus(received, HttpStatusCodes.UnsupportedMediaType),
  toHaveRangeNotSatisfiableStatus: (received: ResponseLike) =>
    expectStatus(received, HttpStatusCodes.RangeNotSatisfiable),
  toHaveExpectationFailedStatus: (received: ResponseLike) => expectStatus(received, HttpStatusCodes.ExpectationFailed),
  toHaveMisdirectedRequestStatus: (received: ResponseLike) =>
    expectStatus(received, HttpStatusCodes.MisdirectedRequest),
  toHaveUnprocessableContentStatus: (received: ResponseLike) =>
    expectStatus(received, HttpStatusCodes.UnprocessableContent),
  toHaveLockedStatus: (received: ResponseLike) => expectStatus(received, HttpStatusCodes.Locked),
  toHaveFailedDependencyStatus: (received: ResponseLike) => expectStatus(received, HttpStatusCodes.FailedDependency),
  toHaveTooEarlyStatus: (received: ResponseLike) => expectStatus(received, HttpStatusCodes.TooEarly),
  toHaveUpgradeRequiredStatus: (received: ResponseLike) => expectStatus(received, HttpStatusCodes.UpgradeRequired),
  toHavePreconditionRequiredStatus: (received: ResponseLike) =>
    expectStatus(received, HttpStatusCodes.PreconditionRequired),
  toHaveTooManyRequestsStatus: (received: ResponseLike) => expectStatus(received, HttpStatusCodes.TooManyRequests),
  toHaveRequestHeaderFieldsTooLargeStatus: (received: ResponseLike) =>
    expectStatus(received, HttpStatusCodes.RequestHeaderFieldsTooLarge),
  toHaveUnavailableForLegalReasonsStatus: (received: ResponseLike) =>
    expectStatus(received, HttpStatusCodes.UnavailableForLegalReasons),
  // 5xx Server Errors
  toHaveInternalServerErrorStatus: (received: ResponseLike) =>
    expectStatus(received, HttpStatusCodes.InternalServerError),
  toHaveNotImplementedStatus: (received: ResponseLike) => expectStatus(received, HttpStatusCodes.NotImplemented),
  toHaveBadGatewayStatus: (received: ResponseLike) => expectStatus(received, HttpStatusCodes.BadGateway),
  toHaveServiceUnavailableStatus: (received: ResponseLike) =>
    expectStatus(received, HttpStatusCodes.ServiceUnavailable),
  toHaveGatewayTimeoutStatus: (received: ResponseLike) => expectStatus(received, HttpStatusCodes.GatewayTimeout),
  toHaveHttpVersionNotSupportedStatus: (received: ResponseLike) =>
    expectStatus(received, HttpStatusCodes.HttpVersionNotSupported),
  toHaveVariantAlsoNegotiatesStatus: (received: ResponseLike) =>
    expectStatus(received, HttpStatusCodes.VariantAlsoNegotiates),
  toHaveInsufficientStorageStatus: (received: ResponseLike) =>
    expectStatus(received, HttpStatusCodes.InsufficientStorage),
  toHaveLoopDetectedStatus: (received: ResponseLike) => expectStatus(received, HttpStatusCodes.LoopDetected),
  toHaveNotExtendedStatus: (received: ResponseLike) => expectStatus(received, HttpStatusCodes.NotExtended),
  toHaveNetworkAuthenticationRequiredStatus: (received: ResponseLike) =>
    expectStatus(received, HttpStatusCodes.NetworkAuthenticationRequired),
};
