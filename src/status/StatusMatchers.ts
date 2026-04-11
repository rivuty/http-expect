import { HttpStatusCodes } from '@rivuty/http-status';

import { expectStatus } from './expectStatus';
import { expectStatusRange } from './expectStatusRange';
import { type WithStatus } from './WithStatus';

export interface StatusMatchers<_> {
  // 1xx-5xx ranges
  toHave1xxInformationalStatus: () => void;
  toHave2xxSuccessfulStatus: () => void;
  toHave3xxRedirectionStatus: () => void;
  toHave4xxClientErrorStatus: () => void;
  toHave5xxServerErrorStatus: () => void;
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
  // 1xx-5xx ranges
  toHave1xxInformationalStatus: (received: WithStatus) =>
    expectStatusRange({ received, min: 100, max: 199, label: '1xx Informational' }),
  toHave2xxSuccessfulStatus: (received: WithStatus) =>
    expectStatusRange({ received, min: 200, max: 299, label: '2xx Successful' }),
  toHave3xxRedirectionStatus: (received: WithStatus) =>
    expectStatusRange({ received, min: 300, max: 399, label: '3xx Redirection' }),
  toHave4xxClientErrorStatus: (received: WithStatus) =>
    expectStatusRange({ received, min: 400, max: 499, label: '4xx Client Error' }),
  toHave5xxServerErrorStatus: (received: WithStatus) =>
    expectStatusRange({ received, min: 500, max: 599, label: '5xx Server Error' }),
  // 1xx Informational
  toHaveContinueStatus: (received: WithStatus) => expectStatus(received, HttpStatusCodes.Continue),
  toHaveSwitchingProtocolsStatus: (received: WithStatus) => expectStatus(received, HttpStatusCodes.SwitchingProtocols),
  toHaveProcessingStatus: (received: WithStatus) => expectStatus(received, HttpStatusCodes.Processing),
  toHaveEarlyHintsStatus: (received: WithStatus) => expectStatus(received, HttpStatusCodes.EarlyHints),
  // 2xx Success
  toHaveOkStatus: (received: WithStatus) => expectStatus(received, HttpStatusCodes.Ok),
  toHaveCreatedStatus: (received: WithStatus) => expectStatus(received, HttpStatusCodes.Created),
  toHaveAcceptedStatus: (received: WithStatus) => expectStatus(received, HttpStatusCodes.Accepted),
  toHaveNonAuthoritativeInformationStatus: (received: WithStatus) =>
    expectStatus(received, HttpStatusCodes.NonAuthoritativeInformation),
  toHaveNoContentStatus: (received: WithStatus) => expectStatus(received, HttpStatusCodes.NoContent),
  toHaveResetContentStatus: (received: WithStatus) => expectStatus(received, HttpStatusCodes.ResetContent),
  toHavePartialContentStatus: (received: WithStatus) => expectStatus(received, HttpStatusCodes.PartialContent),
  toHaveMultiStatusStatus: (received: WithStatus) => expectStatus(received, HttpStatusCodes.MultiStatus),
  toHaveAlreadyReportedStatus: (received: WithStatus) => expectStatus(received, HttpStatusCodes.AlreadyReported),
  toHaveInstanceManipulationUsedStatus: (received: WithStatus) =>
    expectStatus(received, HttpStatusCodes.InstanceManipulationUsed),
  // 3xx Redirection
  toHaveMultipleChoicesStatus: (received: WithStatus) => expectStatus(received, HttpStatusCodes.MultipleChoices),
  toHaveMovedPermanentlyStatus: (received: WithStatus) => expectStatus(received, HttpStatusCodes.MovedPermanently),
  toHaveFoundStatus: (received: WithStatus) => expectStatus(received, HttpStatusCodes.Found),
  toHaveSeeOtherStatus: (received: WithStatus) => expectStatus(received, HttpStatusCodes.SeeOther),
  toHaveNotModifiedStatus: (received: WithStatus) => expectStatus(received, HttpStatusCodes.NotModified),
  toHaveUseProxyStatus: (received: WithStatus) => expectStatus(received, HttpStatusCodes.UseProxy),
  toHaveTemporaryRedirectStatus: (received: WithStatus) => expectStatus(received, HttpStatusCodes.TemporaryRedirect),
  toHavePermanentRedirectStatus: (received: WithStatus) => expectStatus(received, HttpStatusCodes.PermanentRedirect),
  // 4xx Client Errors
  toHaveBadRequestStatus: (received: WithStatus) => expectStatus(received, HttpStatusCodes.BadRequest),
  toHaveUnauthorizedStatus: (received: WithStatus) => expectStatus(received, HttpStatusCodes.Unauthorized),
  toHavePaymentRequiredStatus: (received: WithStatus) => expectStatus(received, HttpStatusCodes.PaymentRequired),
  toHaveForbiddenStatus: (received: WithStatus) => expectStatus(received, HttpStatusCodes.Forbidden),
  toHaveNotFoundStatus: (received: WithStatus) => expectStatus(received, HttpStatusCodes.NotFound),
  toHaveMethodNotAllowedStatus: (received: WithStatus) => expectStatus(received, HttpStatusCodes.MethodNotAllowed),
  toHaveNotAcceptableStatus: (received: WithStatus) => expectStatus(received, HttpStatusCodes.NotAcceptable),
  toHaveProxyAuthenticationRequiredStatus: (received: WithStatus) =>
    expectStatus(received, HttpStatusCodes.ProxyAuthenticationRequired),
  toHaveRequestTimeoutStatus: (received: WithStatus) => expectStatus(received, HttpStatusCodes.RequestTimeout),
  toHaveConflictStatus: (received: WithStatus) => expectStatus(received, HttpStatusCodes.Conflict),
  toHaveGoneStatus: (received: WithStatus) => expectStatus(received, HttpStatusCodes.Gone),
  toHaveLengthRequiredStatus: (received: WithStatus) => expectStatus(received, HttpStatusCodes.LengthRequired),
  toHavePreconditionFailedStatus: (received: WithStatus) => expectStatus(received, HttpStatusCodes.PreconditionFailed),
  toHavePayloadTooLargeStatus: (received: WithStatus) => expectStatus(received, HttpStatusCodes.PayloadTooLarge),
  toHaveUriTooLongStatus: (received: WithStatus) => expectStatus(received, HttpStatusCodes.UriTooLong),
  toHaveUnsupportedMediaTypeStatus: (received: WithStatus) =>
    expectStatus(received, HttpStatusCodes.UnsupportedMediaType),
  toHaveRangeNotSatisfiableStatus: (received: WithStatus) =>
    expectStatus(received, HttpStatusCodes.RangeNotSatisfiable),
  toHaveExpectationFailedStatus: (received: WithStatus) => expectStatus(received, HttpStatusCodes.ExpectationFailed),
  toHaveMisdirectedRequestStatus: (received: WithStatus) => expectStatus(received, HttpStatusCodes.MisdirectedRequest),
  toHaveUnprocessableContentStatus: (received: WithStatus) =>
    expectStatus(received, HttpStatusCodes.UnprocessableContent),
  toHaveLockedStatus: (received: WithStatus) => expectStatus(received, HttpStatusCodes.Locked),
  toHaveFailedDependencyStatus: (received: WithStatus) => expectStatus(received, HttpStatusCodes.FailedDependency),
  toHaveTooEarlyStatus: (received: WithStatus) => expectStatus(received, HttpStatusCodes.TooEarly),
  toHaveUpgradeRequiredStatus: (received: WithStatus) => expectStatus(received, HttpStatusCodes.UpgradeRequired),
  toHavePreconditionRequiredStatus: (received: WithStatus) =>
    expectStatus(received, HttpStatusCodes.PreconditionRequired),
  toHaveTooManyRequestsStatus: (received: WithStatus) => expectStatus(received, HttpStatusCodes.TooManyRequests),
  toHaveRequestHeaderFieldsTooLargeStatus: (received: WithStatus) =>
    expectStatus(received, HttpStatusCodes.RequestHeaderFieldsTooLarge),
  toHaveUnavailableForLegalReasonsStatus: (received: WithStatus) =>
    expectStatus(received, HttpStatusCodes.UnavailableForLegalReasons),
  // 5xx Server Errors
  toHaveInternalServerErrorStatus: (received: WithStatus) =>
    expectStatus(received, HttpStatusCodes.InternalServerError),
  toHaveNotImplementedStatus: (received: WithStatus) => expectStatus(received, HttpStatusCodes.NotImplemented),
  toHaveBadGatewayStatus: (received: WithStatus) => expectStatus(received, HttpStatusCodes.BadGateway),
  toHaveServiceUnavailableStatus: (received: WithStatus) => expectStatus(received, HttpStatusCodes.ServiceUnavailable),
  toHaveGatewayTimeoutStatus: (received: WithStatus) => expectStatus(received, HttpStatusCodes.GatewayTimeout),
  toHaveHttpVersionNotSupportedStatus: (received: WithStatus) =>
    expectStatus(received, HttpStatusCodes.HttpVersionNotSupported),
  toHaveVariantAlsoNegotiatesStatus: (received: WithStatus) =>
    expectStatus(received, HttpStatusCodes.VariantAlsoNegotiates),
  toHaveInsufficientStorageStatus: (received: WithStatus) =>
    expectStatus(received, HttpStatusCodes.InsufficientStorage),
  toHaveLoopDetectedStatus: (received: WithStatus) => expectStatus(received, HttpStatusCodes.LoopDetected),
  toHaveNotExtendedStatus: (received: WithStatus) => expectStatus(received, HttpStatusCodes.NotExtended),
  toHaveNetworkAuthenticationRequiredStatus: (received: WithStatus) =>
    expectStatus(received, HttpStatusCodes.NetworkAuthenticationRequired),
};
