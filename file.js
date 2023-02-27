import kingsChatWebSdk from "kingschat-web-sdk";

export default {
  methods: {
    loginWithKingsChat() {
      kingsChatWebSdk
        .login(loginOptions)
        .then((authenticationTokenResponse) => alert("wahala"))
        .catch((error) => alert("wahala"));
    },
    refreshKingsChatAuthenticationToken() {
      kingsChatWebSdk
        .refreshAuthenticationToken(refreshAuthenticationTokenOptions)
        .then((authenticationTokenResponse) => alert("wahala"))
        .catch((error) => alert("wahala"));
    },
    sendKingsChatMessageRequest() {
      kingsChatWebSdk
        .sendMessage(sendMessageOptions)
        .then(() => alert("wahala"))
        .catch((error) => alert("wahala"));
    },
  },
};
