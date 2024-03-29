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
import {ResponseWrapperAddressContractResult} from './ResponseWrapperAddressContractResult';

/**
 * The ResponseWrapperAddressContract model module.
 * @module model/ResponseWrapperAddressContract
 * @version 1.0
 */
export class ResponseWrapperAddressContract {
  /**
   * Constructs a new <code>ResponseWrapperAddressContract</code>.
   * @alias module:model/ResponseWrapperAddressContract
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ResponseWrapperAddressContract</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ResponseWrapperAddressContract} obj Optional instance to populate.
   * @return {module:model/ResponseWrapperAddressContract} The populated <code>ResponseWrapperAddressContract</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ResponseWrapperAddressContract();
      if (data.hasOwnProperty('code'))
        obj.code = ApiClient.convertToType(data['code'], 'Number');
      if (data.hasOwnProperty('message'))
        obj.message = ApiClient.convertToType(data['message'], 'String');
      if (data.hasOwnProperty('result'))
        obj.result = ResponseWrapperAddressContractResult.constructFromObject(data['result']);
    }
    return obj;
  }
}

/**
 * Code 1: Success
 * @member {Number} code
 */
ResponseWrapperAddressContract.prototype.code = undefined;

/**
 * Response message
 * @member {String} message
 */
ResponseWrapperAddressContract.prototype.message = undefined;

/**
 * @member {module:model/ResponseWrapperAddressContractResult} result
 */
ResponseWrapperAddressContract.prototype.result = undefined;

