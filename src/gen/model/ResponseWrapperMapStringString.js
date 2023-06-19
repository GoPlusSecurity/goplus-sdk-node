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

/**
 * The ResponseWrapperMapStringString model module.
 * @module model/ResponseWrapperMapStringString
 * @version 1.0
 */
export class ResponseWrapperMapStringString {
  /**
   * Constructs a new <code>ResponseWrapperMapStringString</code>.
   * @alias module:model/ResponseWrapperMapStringString
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ResponseWrapperMapStringString</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ResponseWrapperMapStringString} obj Optional instance to populate.
   * @return {module:model/ResponseWrapperMapStringString} The populated <code>ResponseWrapperMapStringString</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ResponseWrapperMapStringString();
      if (data.hasOwnProperty('code'))
        obj.code = ApiClient.convertToType(data['code'], 'Number');
      if (data.hasOwnProperty('message'))
        obj.message = ApiClient.convertToType(data['message'], 'String');
      if (data.hasOwnProperty('result'))
        obj.result = ApiClient.convertToType(data['result'], {'String': 'String'});
    }
    return obj;
  }
}

/**
 * Code 1：Success
 * @member {Number} code
 */
ResponseWrapperMapStringString.prototype.code = undefined;

/**
 * Response message
 * @member {String} message
 */
ResponseWrapperMapStringString.prototype.message = undefined;

/**
 * Response result
 * @member {Object.<String, String>} result
 */
ResponseWrapperMapStringString.prototype.result = undefined;
