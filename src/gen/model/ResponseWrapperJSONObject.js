/*
 * GoPlus Security API Documentation
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.41
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from '../ApiClient';

/**
 * The ResponseWrapperJSONObject model module.
 * @module model/ResponseWrapperJSONObject
 * @version 1.0
 */
export class ResponseWrapperJSONObject {
  /**
   * Constructs a new <code>ResponseWrapperJSONObject</code>.
   * @alias module:model/ResponseWrapperJSONObject
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ResponseWrapperJSONObject</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ResponseWrapperJSONObject} obj Optional instance to populate.
   * @return {module:model/ResponseWrapperJSONObject} The populated <code>ResponseWrapperJSONObject</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ResponseWrapperJSONObject();
      if (data.hasOwnProperty('code'))
        obj.code = ApiClient.convertToType(data['code'], 'Number');
      if (data.hasOwnProperty('message'))
        obj.message = ApiClient.convertToType(data['message'], 'String');
      if (data.hasOwnProperty('result'))
        obj.result = ApiClient.convertToType(data['result'], {'String': Object});
    }
    return obj;
  }
}

/**
 * Code 1：Success
 * @member {Number} code
 */
ResponseWrapperJSONObject.prototype.code = undefined;

/**
 * Response message
 * @member {String} message
 */
ResponseWrapperJSONObject.prototype.message = undefined;

/**
 * Response result
 * @member {Object.<String, Object>} result
 */
ResponseWrapperJSONObject.prototype.result = undefined;
