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
import {TaTokenLockerLockInfoobject} from './TaTokenLockerLockInfoobject';

/**
 * The TokenLockerResponse model module.
 * @module model/TokenLockerResponse
 * @version 1.0
 */
export class TokenLockerResponse {
  /**
   * Constructs a new <code>TokenLockerResponse</code>.
   * @alias module:model/TokenLockerResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>TokenLockerResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TokenLockerResponse} obj Optional instance to populate.
   * @return {module:model/TokenLockerResponse} The populated <code>TokenLockerResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TokenLockerResponse();
      if (data.hasOwnProperty('list'))
        obj.list = ApiClient.convertToType(data['list'], [TaTokenLockerLockInfoobject]);
      if (data.hasOwnProperty('totalCount'))
        obj.totalCount = ApiClient.convertToType(data['totalCount'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/TaTokenLockerLockInfoobject>} list
 */
TokenLockerResponse.prototype.list = undefined;

/**
 * @member {Number} totalCount
 */
TokenLockerResponse.prototype.totalCount = undefined;

