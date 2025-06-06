"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ResponseWrapperSolanaTokenSecurityTransferHookUpgradable = void 0;
var _ApiClient = require("../ApiClient");
var _ResponseWrapperSolanaTokenSecurityClosableAuthority = require("./ResponseWrapperSolanaTokenSecurityClosableAuthority");
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
 * The ResponseWrapperSolanaTokenSecurityTransferHookUpgradable model module.
 * @module model/ResponseWrapperSolanaTokenSecurityTransferHookUpgradable
 * @version 1.0
 */
class ResponseWrapperSolanaTokenSecurityTransferHookUpgradable {
  /**
   * Constructs a new <code>ResponseWrapperSolanaTokenSecurityTransferHookUpgradable</code>.
   * Whether the transfer hook is upgradable.
   * @alias module:model/ResponseWrapperSolanaTokenSecurityTransferHookUpgradable
   * @class
   */
  constructor() {}

  /**
   * Constructs a <code>ResponseWrapperSolanaTokenSecurityTransferHookUpgradable</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ResponseWrapperSolanaTokenSecurityTransferHookUpgradable} obj Optional instance to populate.
   * @return {module:model/ResponseWrapperSolanaTokenSecurityTransferHookUpgradable} The populated <code>ResponseWrapperSolanaTokenSecurityTransferHookUpgradable</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ResponseWrapperSolanaTokenSecurityTransferHookUpgradable();
      if (data.hasOwnProperty('authority')) obj.authority = _ApiClient.ApiClient.convertToType(data['authority'], [_ResponseWrapperSolanaTokenSecurityClosableAuthority.ResponseWrapperSolanaTokenSecurityClosableAuthority]);
      if (data.hasOwnProperty('status')) obj.status = _ApiClient.ApiClient.convertToType(data['status'], 'String');
    }
    return obj;
  }
}

/**
 * Information on metadata upgrade authority.
 * @member {Array.<module:model/ResponseWrapperSolanaTokenSecurityClosableAuthority>} authority
 */
exports.ResponseWrapperSolanaTokenSecurityTransferHookUpgradable = ResponseWrapperSolanaTokenSecurityTransferHookUpgradable;
ResponseWrapperSolanaTokenSecurityTransferHookUpgradable.prototype.authority = undefined;

/**
 * Status indicator, where \"1\" means the funtcion is available.
 * @member {String} status
 */
ResponseWrapperSolanaTokenSecurityTransferHookUpgradable.prototype.status = undefined;