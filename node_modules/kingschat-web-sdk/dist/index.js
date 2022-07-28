"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.sendMessage = exports.refreshAuthenticationToken = exports.login = void 0;

var _check = require("./utils/check.utils");

var _window = require("./utils/window.utils");

var _token = require("./api/token.api");

var _message = require("./api/message.api");

var _constants = require("./constants");

/**
 * This request user permission to use his/her account for any listed scope
 * @returns {authenticationTokenResponseI} authenticationTokenResponse
 * @param {loginOptionsI} loginOptions
 * @param {env} environment
 */
const login = (loginOptions, environment) => {
  try {
    (0, _check.validEnvironment)(environment);
    (0, _check.validLoginOptions)(loginOptions);
    return (0, _window.loginWindow)(new URL(_constants.authorizationURLs[environment || 'prod']), loginOptions);
  } catch (error) {
    return Promise.reject(error);
  }
};
/**
 * This refresh access token received earlier
 * @returns {authenticationTokenResponseI} authenticationTokenResponse
 * @param {refreshAuthenticationTokenOptionsI} refreshAuthenticationTokenOptions
 * @param {env} environment
 */


exports.login = login;

const refreshAuthenticationToken = (refreshAuthenticationTokenOptions, environment) => {
  try {
    (0, _check.validEnvironment)(environment);
    (0, _check.validRefreshAuthenticationTokenOptions)(refreshAuthenticationTokenOptions);
    return (0, _token.refreshAuthenticationTokenRequest)({
      refreshAuthenticationTokenOptions,
      environment: environment || 'prod'
    });
  } catch (error) {
    return Promise.reject(error);
  }
};
/**
 * This request send message to another KingsChat user
 * @returns {string} info
 * @param {sendMessageOptionsI} sendMessageOptions
 * @param {env} environment - optional environment change
 */


exports.refreshAuthenticationToken = refreshAuthenticationToken;

const sendMessage = (sendMessageOptions, environment) => {
  try {
    (0, _check.validEnvironment)(environment);
    (0, _check.validSendMessageOptions)(sendMessageOptions);
    return (0, _message.sendMessageRequest)({
      sendMessageOptions,
      environment: environment || 'prod'
    });
  } catch (error) {
    return Promise.reject(error);
  }
};

exports.sendMessage = sendMessage;
var _default = {
  login,
  refreshAuthenticationToken,
  sendMessage
};
exports.default = _default;