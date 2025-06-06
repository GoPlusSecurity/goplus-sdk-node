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
import {ResponseWrapperSolanaTokenSecurityDay} from './ResponseWrapperSolanaTokenSecurityDay';
import {ResponseWrapperSolanaTokenSecurityMonth} from './ResponseWrapperSolanaTokenSecurityMonth';
import {ResponseWrapperSolanaTokenSecurityWeek} from './ResponseWrapperSolanaTokenSecurityWeek';

/**
 * The ResponseWrapperSolanaTokenSecurityDex model module.
 * @module model/ResponseWrapperSolanaTokenSecurityDex
 * @version 1.0
 */
export class ResponseWrapperSolanaTokenSecurityDex {
  /**
   * Constructs a new <code>ResponseWrapperSolanaTokenSecurityDex</code>.
   * @alias module:model/ResponseWrapperSolanaTokenSecurityDex
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ResponseWrapperSolanaTokenSecurityDex</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ResponseWrapperSolanaTokenSecurityDex} obj Optional instance to populate.
   * @return {module:model/ResponseWrapperSolanaTokenSecurityDex} The populated <code>ResponseWrapperSolanaTokenSecurityDex</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ResponseWrapperSolanaTokenSecurityDex();
      if (data.hasOwnProperty('week'))
        obj.week = ResponseWrapperSolanaTokenSecurityWeek.constructFromObject(data['week']);
      if (data.hasOwnProperty('month'))
        obj.month = ResponseWrapperSolanaTokenSecurityMonth.constructFromObject(data['month']);
      if (data.hasOwnProperty('price'))
        obj.price = ApiClient.convertToType(data['price'], 'String');
      if (data.hasOwnProperty('open_time'))
        obj.open_time = ApiClient.convertToType(data['open_time'], 'String');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('tvl'))
        obj.tvl = ApiClient.convertToType(data['tvl'], 'String');
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
      if (data.hasOwnProperty('dex_name'))
        obj.dex_name = ApiClient.convertToType(data['dex_name'], 'String');
      if (data.hasOwnProperty('day'))
        obj.day = ResponseWrapperSolanaTokenSecurityDay.constructFromObject(data['day']);
      if (data.hasOwnProperty('lp_amount'))
        obj.lp_amount = ApiClient.convertToType(data['lp_amount'], 'String');
      if (data.hasOwnProperty('fee_rate'))
        obj.fee_rate = ApiClient.convertToType(data['fee_rate'], 'String');
    }
    return obj;
  }
}

/**
 * @member {module:model/ResponseWrapperSolanaTokenSecurityWeek} week
 */
ResponseWrapperSolanaTokenSecurityDex.prototype.week = undefined;

/**
 * @member {module:model/ResponseWrapperSolanaTokenSecurityMonth} month
 */
ResponseWrapperSolanaTokenSecurityDex.prototype.month = undefined;

/**
 * Current price (Unitless, count by two tokens in the pool).
 * @member {String} price
 */
ResponseWrapperSolanaTokenSecurityDex.prototype.price = undefined;

/**
 * The epoch when trading is opened.
 * @member {String} open_time
 */
ResponseWrapperSolanaTokenSecurityDex.prototype.open_time = undefined;

/**
 * Address of the liquidity pool.
 * @member {String} id
 */
ResponseWrapperSolanaTokenSecurityDex.prototype.id = undefined;

/**
 * Total value locked (TVL) in the liquidity pool.
 * @member {String} tvl
 */
ResponseWrapperSolanaTokenSecurityDex.prototype.tvl = undefined;

/**
 * Type of the DEX, could be \"standard\" or \"concentrated\".
 * @member {String} type
 */
ResponseWrapperSolanaTokenSecurityDex.prototype.type = undefined;

/**
 * Name of the DEX.
 * @member {String} dex_name
 */
ResponseWrapperSolanaTokenSecurityDex.prototype.dex_name = undefined;

/**
 * @member {module:model/ResponseWrapperSolanaTokenSecurityDay} day
 */
ResponseWrapperSolanaTokenSecurityDex.prototype.day = undefined;

/**
 * Total amount of liquidity provider tokens, only shown when type is \"standard\"
 * @member {String} lp_amount
 */
ResponseWrapperSolanaTokenSecurityDex.prototype.lp_amount = undefined;

/**
 * Transaction fee rate.
 * @member {String} fee_rate
 */
ResponseWrapperSolanaTokenSecurityDex.prototype.fee_rate = undefined;

