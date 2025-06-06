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
import {ResponseWrapperSuiTokenSecurityBlacklist} from './ResponseWrapperSuiTokenSecurityBlacklist';
import {ResponseWrapperSuiTokenSecurityContractUpgradeable} from './ResponseWrapperSuiTokenSecurityContractUpgradeable';
import {ResponseWrapperSuiTokenSecurityMetadataModifiable} from './ResponseWrapperSuiTokenSecurityMetadataModifiable';
import {ResponseWrapperSuiTokenSecurityMintable} from './ResponseWrapperSuiTokenSecurityMintable';

/**
 * The ResponseWrapperSuiTokenSecurityResult model module.
 * @module model/ResponseWrapperSuiTokenSecurityResult
 * @version 1.0
 */
export class ResponseWrapperSuiTokenSecurityResult {
  /**
   * Constructs a new <code>ResponseWrapperSuiTokenSecurityResult</code>.
   * key is contract address
   * @alias module:model/ResponseWrapperSuiTokenSecurityResult
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ResponseWrapperSuiTokenSecurityResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ResponseWrapperSuiTokenSecurityResult} obj Optional instance to populate.
   * @return {module:model/ResponseWrapperSuiTokenSecurityResult} The populated <code>ResponseWrapperSuiTokenSecurityResult</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ResponseWrapperSuiTokenSecurityResult();
      if (data.hasOwnProperty('symbol'))
        obj.symbol = ApiClient.convertToType(data['symbol'], 'String');
      if (data.hasOwnProperty('creator'))
        obj.creator = ApiClient.convertToType(data['creator'], 'String');
      if (data.hasOwnProperty('contract_upgradeable'))
        obj.contract_upgradeable = ResponseWrapperSuiTokenSecurityContractUpgradeable.constructFromObject(data['contract_upgradeable']);
      if (data.hasOwnProperty('total_supply'))
        obj.total_supply = ApiClient.convertToType(data['total_supply'], 'String');
      if (data.hasOwnProperty('decimals'))
        obj.decimals = ApiClient.convertToType(data['decimals'], 'Number');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('trusted_token'))
        obj.trusted_token = ApiClient.convertToType(data['trusted_token'], 'String');
      if (data.hasOwnProperty('metadata_modifiable'))
        obj.metadata_modifiable = ResponseWrapperSuiTokenSecurityMetadataModifiable.constructFromObject(data['metadata_modifiable']);
      if (data.hasOwnProperty('blacklist'))
        obj.blacklist = ResponseWrapperSuiTokenSecurityBlacklist.constructFromObject(data['blacklist']);
      if (data.hasOwnProperty('mintable'))
        obj.mintable = ResponseWrapperSuiTokenSecurityMintable.constructFromObject(data['mintable']);
    }
    return obj;
  }
}

/**
 * Symbol of the token.
 * @member {String} symbol
 */
ResponseWrapperSuiTokenSecurityResult.prototype.symbol = undefined;

/**
 * Creator of the token.
 * @member {String} creator
 */
ResponseWrapperSuiTokenSecurityResult.prototype.creator = undefined;

/**
 * @member {module:model/ResponseWrapperSuiTokenSecurityContractUpgradeable} contract_upgradeable
 */
ResponseWrapperSuiTokenSecurityResult.prototype.contract_upgradeable = undefined;

/**
 * Total supply of the token.
 * @member {String} total_supply
 */
ResponseWrapperSuiTokenSecurityResult.prototype.total_supply = undefined;

/**
 * Decimals of the token.
 * @member {Number} decimals
 */
ResponseWrapperSuiTokenSecurityResult.prototype.decimals = undefined;

/**
 * Name of the token.
 * @member {String} name
 */
ResponseWrapperSuiTokenSecurityResult.prototype.name = undefined;

/**
 * If the token is a famous and trustworthy one. \"1\" means yes.(Notice: This field is intended to identify well-known and reputable tokens. Trusted tokens with special functions (such as the mintable function in USDC) are generally not considered risk items. Please note that a value other than “1” does not indicate that the token is untrustworthy. We recommend properly evaluating and handling tokens with values other than “1” to avoid unnecessary disputes. )
 * @member {String} trusted_token
 */
ResponseWrapperSuiTokenSecurityResult.prototype.trusted_token = undefined;

/**
 * @member {module:model/ResponseWrapperSuiTokenSecurityMetadataModifiable} metadata_modifiable
 */
ResponseWrapperSuiTokenSecurityResult.prototype.metadata_modifiable = undefined;

/**
 * @member {module:model/ResponseWrapperSuiTokenSecurityBlacklist} blacklist
 */
ResponseWrapperSuiTokenSecurityResult.prototype.blacklist = undefined;

/**
 * @member {module:model/ResponseWrapperSuiTokenSecurityMintable} mintable
 */
ResponseWrapperSuiTokenSecurityResult.prototype.mintable = undefined;

