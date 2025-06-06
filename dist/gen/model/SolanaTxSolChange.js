"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SolanaTxSolChange = void 0;
var _ApiClient = require("../ApiClient");
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
 * The SolanaTxSolChange model module.
 * @module model/SolanaTxSolChange
 * @version 1.0
 */
class SolanaTxSolChange {
  /**
   * Constructs a new <code>SolanaTxSolChange</code>.
   * @alias module:model/SolanaTxSolChange
   * @class
   */
  constructor() {}

  /**
   * Constructs a <code>SolanaTxSolChange</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SolanaTxSolChange} obj Optional instance to populate.
   * @return {module:model/SolanaTxSolChange} The populated <code>SolanaTxSolChange</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new SolanaTxSolChange();
      if (data.hasOwnProperty('address')) obj.address = _ApiClient.ApiClient.convertToType(data['address'], 'String');
      if (data.hasOwnProperty('post_lamports')) obj.post_lamports = _ApiClient.ApiClient.convertToType(data['post_lamports'], 'String');
      if (data.hasOwnProperty('lamport_changes')) obj.lamport_changes = _ApiClient.ApiClient.convertToType(data['lamport_changes'], 'String');
      if (data.hasOwnProperty('risky_address')) obj.risky_address = _ApiClient.ApiClient.convertToType(data['risky_address'], 'Number');
      if (data.hasOwnProperty('from_address')) obj.from_address = _ApiClient.ApiClient.convertToType(data['from_address'], 'Number');
      if (data.hasOwnProperty('pre_lamports')) obj.pre_lamports = _ApiClient.ApiClient.convertToType(data['pre_lamports'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} address
 */
exports.SolanaTxSolChange = SolanaTxSolChange;
SolanaTxSolChange.prototype.address = undefined;

/**
 * @member {String} post_lamports
 */
SolanaTxSolChange.prototype.post_lamports = undefined;

/**
 * @member {String} lamport_changes
 */
SolanaTxSolChange.prototype.lamport_changes = undefined;

/**
 * @member {Number} risky_address
 */
SolanaTxSolChange.prototype.risky_address = undefined;

/**
 * @member {Number} from_address
 */
SolanaTxSolChange.prototype.from_address = undefined;

/**
 * @member {String} pre_lamports
 */
SolanaTxSolChange.prototype.pre_lamports = undefined;