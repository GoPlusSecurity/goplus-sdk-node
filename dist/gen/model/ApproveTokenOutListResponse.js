"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ApproveTokenOutListResponse = void 0;
var _ApiClient = require("../ApiClient");
var _ApproveTokenResult = require("./ApproveTokenResult");
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
 * The ApproveTokenOutListResponse model module.
 * @module model/ApproveTokenOutListResponse
 * @version 1.0
 */
class ApproveTokenOutListResponse {
  /**
   * Constructs a new <code>ApproveTokenOutListResponse</code>.
   * @alias module:model/ApproveTokenOutListResponse
   * @class
   */
  constructor() {}

  /**
   * Constructs a <code>ApproveTokenOutListResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ApproveTokenOutListResponse} obj Optional instance to populate.
   * @return {module:model/ApproveTokenOutListResponse} The populated <code>ApproveTokenOutListResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ApproveTokenOutListResponse();
      if (data.hasOwnProperty('approved_list')) obj.approved_list = _ApiClient.ApiClient.convertToType(data['approved_list'], [_ApproveTokenResult.ApproveTokenResult]);
      if (data.hasOwnProperty('balance')) obj.balance = _ApiClient.ApiClient.convertToType(data['balance'], 'String');
      if (data.hasOwnProperty('chain_id')) obj.chain_id = _ApiClient.ApiClient.convertToType(data['chain_id'], 'String');
      if (data.hasOwnProperty('decimals')) obj.decimals = _ApiClient.ApiClient.convertToType(data['decimals'], 'Number');
      if (data.hasOwnProperty('is_open_source')) obj.is_open_source = _ApiClient.ApiClient.convertToType(data['is_open_source'], 'Number');
      if (data.hasOwnProperty('malicious_address')) obj.malicious_address = _ApiClient.ApiClient.convertToType(data['malicious_address'], 'Number');
      if (data.hasOwnProperty('malicious_behavior')) obj.malicious_behavior = _ApiClient.ApiClient.convertToType(data['malicious_behavior'], ['String']);
      if (data.hasOwnProperty('token_address')) obj.token_address = _ApiClient.ApiClient.convertToType(data['token_address'], 'String');
      if (data.hasOwnProperty('token_name')) obj.token_name = _ApiClient.ApiClient.convertToType(data['token_name'], 'String');
      if (data.hasOwnProperty('token_symbol')) obj.token_symbol = _ApiClient.ApiClient.convertToType(data['token_symbol'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/ApproveTokenResult>} approved_list
 */
exports.ApproveTokenOutListResponse = ApproveTokenOutListResponse;
ApproveTokenOutListResponse.prototype.approved_list = undefined;

/**
 * balance
 * @member {String} balance
 */
ApproveTokenOutListResponse.prototype.balance = undefined;

/**
 * ChainID
 * @member {String} chain_id
 */
ApproveTokenOutListResponse.prototype.chain_id = undefined;

/**
 * decimals
 * @member {Number} decimals
 */
ApproveTokenOutListResponse.prototype.decimals = undefined;

/**
 * Whether the contract is verified on blockchain explorer.
 * @member {Number} is_open_source
 */
ApproveTokenOutListResponse.prototype.is_open_source = undefined;

/**
 * Whether the token is malicious or contains high risk.
 * @member {Number} malicious_address
 */
ApproveTokenOutListResponse.prototype.malicious_address = undefined;

/**
 * Specific malicious behaviors or risks of this token.
 * @member {Array.<String>} malicious_behavior
 */
ApproveTokenOutListResponse.prototype.malicious_behavior = undefined;

/**
 * Token address
 * @member {String} token_address
 */
ApproveTokenOutListResponse.prototype.token_address = undefined;

/**
 * Token name
 * @member {String} token_name
 */
ApproveTokenOutListResponse.prototype.token_name = undefined;

/**
 * Token symbol
 * @member {String} token_symbol
 */
ApproveTokenOutListResponse.prototype.token_symbol = undefined;