import kingsChatWebSdk from "kingschat-web-sdk";

let loginOptions = {
  // Scopes is an Array of scopes you want access
  scopes: ["send_chat_message"],
  // Your clientId generated on KingsChat's Developer Site
  clientId: "2a2031e4-6434-4428-81d9-d78637c0a52c", // ex. 'a1234567-abcd-1234-abcd-12345abc1234'
};

kingsChatWebSdk.login(loginOptions);

let authenticationTokenResponse = {
  // Access Token used for every KingsChat Request
  accessToken: "2a2031e4-6434-4428-81d9-d78637c0a52c",
  // time in milliseconds until token expires
  expiresInMillis: 1234567890,
  // Refresh Token is used for refreshing Access Token
  refreshToken: "",
};

kingsChatWebSdk.refreshAuthenticationToken(refreshAuthenticationTokenOptions);

interface refreshAuthenticationTokenOptionsI {
  // Your clientId generated on KingsChat's Developer Site
  clientId: "2a2031e4-6434-4428-81d9-d78637c0a52c"; // ex. 'a1234567-abcd-1234-abcd-12345abc1234'
  // Refresh token you got from login function
  refreshToken: string;
}
