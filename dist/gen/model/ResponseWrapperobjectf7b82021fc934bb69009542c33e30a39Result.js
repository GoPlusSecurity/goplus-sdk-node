"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ResponseWrapperobjectf7b82021fc934bb69009542c33e30a39Result = void 0;
var _ApiClient = require("../ApiClient");
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

/**
 * The ResponseWrapperobjectf7b82021fc934bb69009542c33e30a39Result model module.
 * @module model/ResponseWrapperobjectf7b82021fc934bb69009542c33e30a39Result
 * @version 1.0
 */
class ResponseWrapperobjectf7b82021fc934bb69009542c33e30a39Result {
  /**
   * Constructs a new <code>ResponseWrapperobjectf7b82021fc934bb69009542c33e30a39Result</code>.
   * Response result
   * @alias module:model/ResponseWrapperobjectf7b82021fc934bb69009542c33e30a39Result
   * @class
   */
  constructor() {}

  /**
   * Constructs a <code>ResponseWrapperobjectf7b82021fc934bb69009542c33e30a39Result</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ResponseWrapperobjectf7b82021fc934bb69009542c33e30a39Result} obj Optional instance to populate.
   * @return {module:model/ResponseWrapperobjectf7b82021fc934bb69009542c33e30a39Result} The populated <code>ResponseWrapperobjectf7b82021fc934bb69009542c33e30a39Result</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ResponseWrapperobjectf7b82021fc934bb69009542c33e30a39Result();
      if (data.hasOwnProperty('cybercrime')) obj.cybercrime = _ApiClient.ApiClient.convertToType(data['cybercrime'], 'String');
      if (data.hasOwnProperty('money_laundering')) obj.moneyLaundering = _ApiClient.ApiClient.convertToType(data['money_laundering'], 'String');
      if (data.hasOwnProperty('number_of_malicious_contracts_created')) obj.numberOfMaliciousContractsCreated = _ApiClient.ApiClient.convertToType(data['number_of_malicious_contracts_created'], 'String');
      if (data.hasOwnProperty('financial_crime')) obj.financialCrime = _ApiClient.ApiClient.convertToType(data['financial_crime'], 'String');
      if (data.hasOwnProperty('darkweb_transactions')) obj.darkwebTransactions = _ApiClient.ApiClient.convertToType(data['darkweb_transactions'], 'String');
      if (data.hasOwnProperty('phishing_activities')) obj.phishingActivities = _ApiClient.ApiClient.convertToType(data['phishing_activities'], 'String');
      if (data.hasOwnProperty('contract_address')) obj.contractAddress = _ApiClient.ApiClient.convertToType(data['contract_address'], 'String');
      if (data.hasOwnProperty('fake_kyc')) obj.fakeKyc = _ApiClient.ApiClient.convertToType(data['fake_kyc'], 'String');
      if (data.hasOwnProperty('blacklist_doubt')) obj.blacklistDoubt = _ApiClient.ApiClient.convertToType(data['blacklist_doubt'], 'String');
      if (data.hasOwnProperty('data_source')) obj.dataSource = _ApiClient.ApiClient.convertToType(data['data_source'], 'String');
      if (data.hasOwnProperty('stealing_attack')) obj.stealingAttack = _ApiClient.ApiClient.convertToType(data['stealing_attack'], 'String');
      if (data.hasOwnProperty('blackmail_activities')) obj.blackmailActivities = _ApiClient.ApiClient.convertToType(data['blackmail_activities'], 'String');
      if (data.hasOwnProperty('sanctioned')) obj.sanctioned = _ApiClient.ApiClient.convertToType(data['sanctioned'], 'String');
      if (data.hasOwnProperty('malicious_mining_activities')) obj.maliciousMiningActivities = _ApiClient.ApiClient.convertToType(data['malicious_mining_activities'], 'String');
      if (data.hasOwnProperty('mixer')) obj.mixer = _ApiClient.ApiClient.convertToType(data['mixer'], 'String');
      if (data.hasOwnProperty('honeypot_related_address')) obj.honeypotRelatedAddress = _ApiClient.ApiClient.convertToType(data['honeypot_related_address'], 'String');
    }
    return obj;
  }
}

/**
 * It describes whether this address is involved in cybercrime. \"1\" means true; \"0\" means false.
 * @member {String} cybercrime
 */
exports.ResponseWrapperobjectf7b82021fc934bb69009542c33e30a39Result = ResponseWrapperobjectf7b82021fc934bb69009542c33e30a39Result;
ResponseWrapperobjectf7b82021fc934bb69009542c33e30a39Result.prototype.cybercrime = undefined;

/**
 * It describes whether this address is involved in money laundering. \"1\" means true; \"0\" means false.
 * @member {String} moneyLaundering
 */
ResponseWrapperobjectf7b82021fc934bb69009542c33e30a39Result.prototype.moneyLaundering = undefined;

/**
 * This parameter describes how many malicious contracts have been created by this address.
 * @member {String} numberOfMaliciousContractsCreated
 */
ResponseWrapperobjectf7b82021fc934bb69009542c33e30a39Result.prototype.numberOfMaliciousContractsCreated = undefined;

/**
 * It describes whether this address is involved in financial crime. \"1\" means true; \"0\" means false.
 * @member {String} financialCrime
 */
ResponseWrapperobjectf7b82021fc934bb69009542c33e30a39Result.prototype.financialCrime = undefined;

/**
 * It describes whether this address is involved in darkweb transactions. \"1\" means true; \"0\" means false.
 * @member {String} darkwebTransactions
 */
ResponseWrapperobjectf7b82021fc934bb69009542c33e30a39Result.prototype.darkwebTransactions = undefined;

/**
 * It describes whether this address has implemented phishing activities. \"1\" means true; \"0\" means false.
 * @member {String} phishingActivities
 */
ResponseWrapperobjectf7b82021fc934bb69009542c33e30a39Result.prototype.phishingActivities = undefined;

/**
 * It describes whether this address is a contract address. \"1\" means true; \"0\" means false.(Notice:If only the address is sent to the API and not the chain id, the \"contract_address\" will not be returned (This is because there are cases where the same address is a contract in one public chain but not in other public chains.) Determining the contract address is achieved by calling a third-party blockchain browser interface. Since it takes time for the browser interface to return, the field may be empty on the first request. Solution: the second call around 5s can return whether the address is the value of the contract normally.)
 * @member {String} contractAddress
 */
ResponseWrapperobjectf7b82021fc934bb69009542c33e30a39Result.prototype.contractAddress = undefined;

/**
 * It describes whether this address is involved in fake KYC. \"1\" means true; \"0\" means false.
 * @member {String} fakeKyc
 */
ResponseWrapperobjectf7b82021fc934bb69009542c33e30a39Result.prototype.fakeKyc = undefined;

/**
 * It describes whether this address is suspected of malicious behavior. \"1\" means true; \"0\" means false.
 * @member {String} blacklistDoubt
 */
ResponseWrapperobjectf7b82021fc934bb69009542c33e30a39Result.prototype.blacklistDoubt = undefined;

/**
 * It describes the data source for this address information. For example：GoPlus/SlowMist
 * @member {String} dataSource
 */
ResponseWrapperobjectf7b82021fc934bb69009542c33e30a39Result.prototype.dataSource = undefined;

/**
 * It describes whether this address has implemented stealing attacks. \"1\" means true; \"0\" means false.
 * @member {String} stealingAttack
 */
ResponseWrapperobjectf7b82021fc934bb69009542c33e30a39Result.prototype.stealingAttack = undefined;

/**
 * It describes whether this address has implemented blackmail activities. \"1\" means true; \"0\" means false.
 * @member {String} blackmailActivities
 */
ResponseWrapperobjectf7b82021fc934bb69009542c33e30a39Result.prototype.blackmailActivities = undefined;

/**
 * It describes whether this address is coin sanctioned address. \"1\" means true; \"0\" means false.
 * @member {String} sanctioned
 */
ResponseWrapperobjectf7b82021fc934bb69009542c33e30a39Result.prototype.sanctioned = undefined;

/**
 * It describes whether this address is involved in malicious mining activities. \"1\" means true; \"0\" means false.
 * @member {String} maliciousMiningActivities
 */
ResponseWrapperobjectf7b82021fc934bb69009542c33e30a39Result.prototype.maliciousMiningActivities = undefined;

/**
 * It describes whether this address is coin mixer address. \"1\" means true; \"0\" means false.(Notice:Interacting with coin mixer may result in your address being added to the risk list of third-party institutions.)
 * @member {String} mixer
 */
ResponseWrapperobjectf7b82021fc934bb69009542c33e30a39Result.prototype.mixer = undefined;

/**
 * It describes whether this address is related to honeypot tokens or has created scam tokens. \"1\" means true; \"0\" means false.(Notice:Addresses related to honeypot mean the creators or owners of the honeypot tokens. This is a dangerous address if the address is ralated to honeypot tokens.)
 * @member {String} honeypotRelatedAddress
 */
ResponseWrapperobjectf7b82021fc934bb69009542c33e30a39Result.prototype.honeypotRelatedAddress = undefined;