export default interface IAuthenticationResult {
  token: string;
  token_type: "Bearer";
  expires_in: string;
}
