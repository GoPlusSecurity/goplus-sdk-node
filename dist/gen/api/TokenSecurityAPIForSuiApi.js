"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TokenSecurityAPIForSuiApi = void 0;
var _ApiClient = require("../ApiClient");
var _ResponseWrapperSuiTokenSecurity = require("../model/ResponseWrapperSuiTokenSecurity");
/*
 * GoPlus Security API Document
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.45
 *
 * Do not edit the class manually.
 *
 */

/**
* TokenSecurityAPIForSui service.
* @module api/TokenSecurityAPIForSuiApi
* @version 1.0
*/
class TokenSecurityAPIForSuiApi {
  /**
  * Constructs a new TokenSecurityAPIForSuiApi. 
  * @alias module:api/TokenSecurityAPIForSuiApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instanc
  e} if unspecified.
  */
  constructor(apiClient) {
    this.apiClient = apiClient || _ApiClient.ApiClient.instance;
  }

  /**
   * Callback function to receive the result of the suiTokenSecurityUsingGET operation.
   * @callback moduleapi/TokenSecurityAPIForSuiApi~suiTokenSecurityUsingGETCallback
   * @param {String} error Error message, if any.
   * @param {module:model/ResponseWrapperSuiTokenSecurity{ data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get token&#x27;s security and risk data.
   * @param {String} contract_addresses The contract address of sui tokens.
   * @param {Object} opts Optional parameters
   * @param {String} opts.Authorization Authorization token in the format: Bearer &lt;token&gt; (e.g., Bearer eyJsZXZlbCI6NSwiYXBwTmFtZSI6ImF2cyIsImFwcEtleSI6IjFaW...)
   * @param {module:api/TokenSecurityAPIForSuiApi~suiTokenSecurityUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
   */
  suiTokenSecurityUsingGET(contract_addresses, opts, callback) {
    opts = opts || {};
    let postBody = null;
    // verify the required parameter 'contract_addresses' is set
    if (contract_addresses === undefined || contract_addresses === null) {
      throw new Error("Missing the required parameter 'contract_addresses' when calling suiTokenSecurityUsingGET");
    }
    let pathParams = {};
    let queryParams = {
      'contract_addresses': contract_addresses
    };
    let headerParams = {
      'Authorization': opts['Authorization']
    };
    let formParams = {};
    let authNames = [];
    let contentTypes = [];
    let accepts = ['*/*'];
    let returnType = _ResponseWrapperSuiTokenSecurity.ResponseWrapperSuiTokenSecurity;
    return this.apiClient.callApi('/api/v1/sui/token_security', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
  }
}
exports.TokenSecurityAPIForSuiApi = TokenSecurityAPIForSuiApi;