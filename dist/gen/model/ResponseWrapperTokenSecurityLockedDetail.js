"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ResponseWrapperTokenSecurityLockedDetail = void 0;
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
 * The ResponseWrapperTokenSecurityLockedDetail model module.
 * @module model/ResponseWrapperTokenSecurityLockedDetail
 * @version 1.0
 */
class ResponseWrapperTokenSecurityLockedDetail {
  /**
   * Constructs a new <code>ResponseWrapperTokenSecurityLockedDetail</code>.
   * @alias module:model/ResponseWrapperTokenSecurityLockedDetail
   * @class
   */
  constructor() {}

  /**
   * Constructs a <code>ResponseWrapperTokenSecurityLockedDetail</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ResponseWrapperTokenSecurityLockedDetail} obj Optional instance to populate.
   * @return {module:model/ResponseWrapperTokenSecurityLockedDetail} The populated <code>ResponseWrapperTokenSecurityLockedDetail</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ResponseWrapperTokenSecurityLockedDetail();
      if (data.hasOwnProperty('amount')) obj.amount = _ApiClient.ApiClient.convertToType(data['amount'], 'String');
      if (data.hasOwnProperty('opt_time')) obj.opt_time = _ApiClient.ApiClient.convertToType(data['opt_time'], 'String');
      if (data.hasOwnProperty('end_time')) obj.end_time = _ApiClient.ApiClient.convertToType(data['end_time'], 'String');
    }
    return obj;
  }
}

/**
 * \"amount\" describes the number of token locked
 * @member {String} amount
 */
exports.ResponseWrapperTokenSecurityLockedDetail = ResponseWrapperTokenSecurityLockedDetail;
ResponseWrapperTokenSecurityLockedDetail.prototype.amount = undefined;

/**
 * \"opt_time\" describes when the token was locked
 * @member {String} opt_time
 */
ResponseWrapperTokenSecurityLockedDetail.prototype.opt_time = undefined;

/**
 * \"end_time\" describes when the token will be unlocked
 * @member {String} end_time
 */
ResponseWrapperTokenSecurityLockedDetail.prototype.end_time = undefined;