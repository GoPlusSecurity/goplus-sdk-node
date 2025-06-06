"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TokenSecurityAPIForSolanaBetaApi = void 0;
var _ApiClient = require("../ApiClient");
var _ResponseWrapperSolanaTokenSecurity = require("../model/ResponseWrapperSolanaTokenSecurity");
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
* TokenSecurityAPIForSolanaBeta service.
* @module api/TokenSecurityAPIForSolanaBetaApi
* @version 1.0
*/
class TokenSecurityAPIForSolanaBetaApi {
  /**
  * Constructs a new TokenSecurityAPIForSolanaBetaApi. 
  * @alias module:api/TokenSecurityAPIForSolanaBetaApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instanc
  e} if unspecified.
  */
  constructor(apiClient) {
    this.apiClient = apiClient || _ApiClient.ApiClient.instance;
  }

  /**
   * Callback function to receive the result of the solanaTokenSecurityUsingGET operation.
   * @callback moduleapi/TokenSecurityAPIForSolanaBetaApi~solanaTokenSecurityUsingGETCallback
   * @param {String} error Error message, if any.
   * @param {module:model/ResponseWrapperSolanaTokenSecurity{ data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get token&#x27;s security and risk data.
   * @param {String} contract_addresses The contract address of solana tokens.
   * @param {Object} opts Optional parameters
   * @param {String} opts.Authorization Authorization token in the format: Bearer &lt;token&gt; (e.g., Bearer eyJsZXZlbCI6NSwiYXBwTmFtZSI6ImF2cyIsImFwcEtleSI6IjFaW...)
   * @param {module:api/TokenSecurityAPIForSolanaBetaApi~solanaTokenSecurityUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
   */
  solanaTokenSecurityUsingGET(contract_addresses, opts, callback) {
    opts = opts || {};
    let postBody = null;
    // verify the required parameter 'contract_addresses' is set
    if (contract_addresses === undefined || contract_addresses === null) {
      throw new Error("Missing the required parameter 'contract_addresses' when calling solanaTokenSecurityUsingGET");
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
    let returnType = _ResponseWrapperSolanaTokenSecurity.ResponseWrapperSolanaTokenSecurity;
    return this.apiClient.callApi('/api/v1/solana/token_security', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
  }
}
exports.TokenSecurityAPIForSolanaBetaApi = TokenSecurityAPIForSolanaBetaApi;