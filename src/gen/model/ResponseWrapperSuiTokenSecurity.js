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
import {ApiClient} from '../ApiClient';
import {ResponseWrapperSuiTokenSecurityResult} from './ResponseWrapperSuiTokenSecurityResult';

/**
 * The ResponseWrapperSuiTokenSecurity model module.
 * @module model/ResponseWrapperSuiTokenSecurity
 * @version 1.0
 */
export class ResponseWrapperSuiTokenSecurity {
  /**
   * Constructs a new <code>ResponseWrapperSuiTokenSecurity</code>.
   * @alias module:model/ResponseWrapperSuiTokenSecurity
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ResponseWrapperSuiTokenSecurity</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ResponseWrapperSuiTokenSecurity} obj Optional instance to populate.
   * @return {module:model/ResponseWrapperSuiTokenSecurity} The populated <code>ResponseWrapperSuiTokenSecurity</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ResponseWrapperSuiTokenSecurity();
      if (data.hasOwnProperty('code'))
        obj.code = ApiClient.convertToType(data['code'], 'Number');
      if (data.hasOwnProperty('message'))
        obj.message = ApiClient.convertToType(data['message'], 'String');
      if (data.hasOwnProperty('result'))
        obj.result = ApiClient.convertToType(data['result'], {'String': ResponseWrapperSuiTokenSecurityResult});
    }
    return obj;
  }
}

/**
 * Code 1：Success
 * @member {Number} code
 */
ResponseWrapperSuiTokenSecurity.prototype.code = undefined;

/**
 * Response message
 * @member {String} message
 */
ResponseWrapperSuiTokenSecurity.prototype.message = undefined;

/**
 * Response result
 * @member {Object.<String, module:model/ResponseWrapperSuiTokenSecurityResult>} result
 */
ResponseWrapperSuiTokenSecurity.prototype.result = undefined;

