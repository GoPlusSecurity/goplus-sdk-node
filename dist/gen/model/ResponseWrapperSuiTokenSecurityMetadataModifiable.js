"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ResponseWrapperSuiTokenSecurityMetadataModifiable = void 0;
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
 * The ResponseWrapperSuiTokenSecurityMetadataModifiable model module.
 * @module model/ResponseWrapperSuiTokenSecurityMetadataModifiable
 * @version 1.0
 */
class ResponseWrapperSuiTokenSecurityMetadataModifiable {
  /**
   * Constructs a new <code>ResponseWrapperSuiTokenSecurityMetadataModifiable</code>.
   * Whether the metadata is mutable. 
   * @alias module:model/ResponseWrapperSuiTokenSecurityMetadataModifiable
   * @class
   */
  constructor() {}

  /**
   * Constructs a <code>ResponseWrapperSuiTokenSecurityMetadataModifiable</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ResponseWrapperSuiTokenSecurityMetadataModifiable} obj Optional instance to populate.
   * @return {module:model/ResponseWrapperSuiTokenSecurityMetadataModifiable} The populated <code>ResponseWrapperSuiTokenSecurityMetadataModifiable</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ResponseWrapperSuiTokenSecurityMetadataModifiable();
      if (data.hasOwnProperty('cap_owner')) obj.cap_owner = _ApiClient.ApiClient.convertToType(data['cap_owner'], 'String');
      if (data.hasOwnProperty('value')) obj.value = _ApiClient.ApiClient.convertToType(data['value'], 'String');
    }
    return obj;
  }
}

/**
 * The owner cap of the function. This field can have three possible values: A. A specific address indicates the address that can currently operate this function. B.'Shared' means any address can operate this function. C.'Immutable' means this function can no longer be invoked.
 * @member {String} cap_owner
 */
exports.ResponseWrapperSuiTokenSecurityMetadataModifiable = ResponseWrapperSuiTokenSecurityMetadataModifiable;
ResponseWrapperSuiTokenSecurityMetadataModifiable.prototype.cap_owner = undefined;

/**
 * Status indicator, where \"1\" means the funtcion is available.
 * @member {String} value
 */
ResponseWrapperSuiTokenSecurityMetadataModifiable.prototype.value = undefined;