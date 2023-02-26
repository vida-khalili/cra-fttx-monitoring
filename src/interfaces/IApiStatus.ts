type StatusCodeType = 200 | 401 | 503;

export default interface IApiResult<T> {
  ResultObject: T;
  TransactionId: string;
  TransactionDate: string;
  Result_HasError: boolean;
  StatusCode: StatusCodeType;
  Result_ErrorMessage: string | null;
}
