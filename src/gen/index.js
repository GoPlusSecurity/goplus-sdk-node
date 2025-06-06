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
import {ApiClient} from './ApiClient';
import {AbiAddressInfo} from './model/AbiAddressInfo';
import {AbiParamInfo} from './model/AbiParamInfo';
import {ApproveAddressInfo} from './model/ApproveAddressInfo';
import {ApproveErc1155Result} from './model/ApproveErc1155Result';
import {ApproveNFT1155ListResponse} from './model/ApproveNFT1155ListResponse';
import {ApproveNFTListResponse} from './model/ApproveNFTListResponse';
import {ApproveResult} from './model/ApproveResult';
import {ApproveTokenOutListResponse} from './model/ApproveTokenOutListResponse';
import {ApproveTokenResult} from './model/ApproveTokenResult';
import {AuditInfo} from './model/AuditInfo';
import {ContractApproveResponse} from './model/ContractApproveResponse';
import {Contracts} from './model/Contracts';
import {ContractsSecurity} from './model/ContractsSecurity';
import {DappContractSecurityResponse} from './model/DappContractSecurityResponse';
import {GetAccessTokenRequest} from './model/GetAccessTokenRequest';
import {GetAccessTokenResponse} from './model/GetAccessTokenResponse';
import {GetDefiInfoResponse} from './model/GetDefiInfoResponse';
import {GetDefiInfoResponseResult} from './model/GetDefiInfoResponseResult';
import {GetDefiInfoResponseResultOwner} from './model/GetDefiInfoResponseResultOwner';
import {JSONObject} from './model/JSONObject';
import {MapStringString} from './model/MapStringString';
import {NewAllowance} from './model/NewAllowance';
import {NftLockerResponse} from './model/NftLockerResponse';
import {ParseAbiDataRequest} from './model/ParseAbiDataRequest';
import {ParseAbiDataResponse} from './model/ParseAbiDataResponse';
import {ResponseWrapperAddressContract} from './model/ResponseWrapperAddressContract';
import {ResponseWrapperAddressContractResult} from './model/ResponseWrapperAddressContractResult';
import {ResponseWrapperContractApproveResponse} from './model/ResponseWrapperContractApproveResponse';
import {ResponseWrapperDappContractSecurityResponse} from './model/ResponseWrapperDappContractSecurityResponse';
import {ResponseWrapperGetAccessTokenResponse} from './model/ResponseWrapperGetAccessTokenResponse';
import {ResponseWrapperGetNftInfo} from './model/ResponseWrapperGetNftInfo';
import {ResponseWrapperGetNftInfoResult} from './model/ResponseWrapperGetNftInfoResult';
import {ResponseWrapperGetNftInfoResultPrivilegedBurn} from './model/ResponseWrapperGetNftInfoResultPrivilegedBurn';
import {ResponseWrapperGetNftInfoResultPrivilegedMinting} from './model/ResponseWrapperGetNftInfoResultPrivilegedMinting';
import {ResponseWrapperGetNftInfoResultSameNfts} from './model/ResponseWrapperGetNftInfoResultSameNfts';
import {ResponseWrapperGetNftInfoResultSelfDestruct} from './model/ResponseWrapperGetNftInfoResultSelfDestruct';
import {ResponseWrapperGetNftInfoResultTransferWithoutApproval} from './model/ResponseWrapperGetNftInfoResultTransferWithoutApproval';
import {ResponseWrapperJSONObject} from './model/ResponseWrapperJSONObject';
import {ResponseWrapperListApproveNFT1155ListResponse} from './model/ResponseWrapperListApproveNFT1155ListResponse';
import {ResponseWrapperListApproveNFTListResponse} from './model/ResponseWrapperListApproveNFTListResponse';
import {ResponseWrapperListApproveTokenOutListResponse} from './model/ResponseWrapperListApproveTokenOutListResponse';
import {ResponseWrapperListGetChainsList} from './model/ResponseWrapperListGetChainsList';
import {ResponseWrapperListGetChainsListResult} from './model/ResponseWrapperListGetChainsListResult';
import {ResponseWrapperListJSONObject} from './model/ResponseWrapperListJSONObject';
import {ResponseWrapperMapStringString} from './model/ResponseWrapperMapStringString';
import {ResponseWrapperNftLockerResponse} from './model/ResponseWrapperNftLockerResponse';
import {ResponseWrapperParseAbiDataResponse} from './model/ResponseWrapperParseAbiDataResponse';
import {ResponseWrapperPhishingSite} from './model/ResponseWrapperPhishingSite';
import {ResponseWrapperPhishingSiteResult} from './model/ResponseWrapperPhishingSiteResult';
import {ResponseWrapperPhishingSiteResultNftRisk} from './model/ResponseWrapperPhishingSiteResultNftRisk';
import {ResponseWrapperPhishingSiteResultNftRiskPrivilegedBurn} from './model/ResponseWrapperPhishingSiteResultNftRiskPrivilegedBurn';
import {ResponseWrapperPhishingSiteResultNftRiskPrivilegedMinting} from './model/ResponseWrapperPhishingSiteResultNftRiskPrivilegedMinting';
import {ResponseWrapperPhishingSiteResultNftRiskSelfDestruct} from './model/ResponseWrapperPhishingSiteResultNftRiskSelfDestruct';
import {ResponseWrapperPhishingSiteResultNftRiskTransferWithoutApproval} from './model/ResponseWrapperPhishingSiteResultNftRiskTransferWithoutApproval';
import {ResponseWrapperPhishingSiteResultWebsiteContractSecurity} from './model/ResponseWrapperPhishingSiteResultWebsiteContractSecurity';
import {ResponseWrapperSolanaPrerunTxResponse} from './model/ResponseWrapperSolanaPrerunTxResponse';
import {ResponseWrapperSolanaTokenSecurity} from './model/ResponseWrapperSolanaTokenSecurity';
import {ResponseWrapperSolanaTokenSecurityBalanceMutableAuthority} from './model/ResponseWrapperSolanaTokenSecurityBalanceMutableAuthority';
import {ResponseWrapperSolanaTokenSecurityClosable} from './model/ResponseWrapperSolanaTokenSecurityClosable';
import {ResponseWrapperSolanaTokenSecurityClosableAuthority} from './model/ResponseWrapperSolanaTokenSecurityClosableAuthority';
import {ResponseWrapperSolanaTokenSecurityCreator} from './model/ResponseWrapperSolanaTokenSecurityCreator';
import {ResponseWrapperSolanaTokenSecurityDay} from './model/ResponseWrapperSolanaTokenSecurityDay';
import {ResponseWrapperSolanaTokenSecurityDefaultAccountStateUpgradable} from './model/ResponseWrapperSolanaTokenSecurityDefaultAccountStateUpgradable';
import {ResponseWrapperSolanaTokenSecurityDex} from './model/ResponseWrapperSolanaTokenSecurityDex';
import {ResponseWrapperSolanaTokenSecurityFreezable} from './model/ResponseWrapperSolanaTokenSecurityFreezable';
import {ResponseWrapperSolanaTokenSecurityLpHolders} from './model/ResponseWrapperSolanaTokenSecurityLpHolders';
import {ResponseWrapperSolanaTokenSecurityMetadata} from './model/ResponseWrapperSolanaTokenSecurityMetadata';
import {ResponseWrapperSolanaTokenSecurityMetadataMutable} from './model/ResponseWrapperSolanaTokenSecurityMetadataMutable';
import {ResponseWrapperSolanaTokenSecurityMintable} from './model/ResponseWrapperSolanaTokenSecurityMintable';
import {ResponseWrapperSolanaTokenSecurityMonth} from './model/ResponseWrapperSolanaTokenSecurityMonth';
import {ResponseWrapperSolanaTokenSecurityResult} from './model/ResponseWrapperSolanaTokenSecurityResult';
import {ResponseWrapperSolanaTokenSecurityTransferFee} from './model/ResponseWrapperSolanaTokenSecurityTransferFee';
import {ResponseWrapperSolanaTokenSecurityTransferFeeCurrentFeeRate} from './model/ResponseWrapperSolanaTokenSecurityTransferFeeCurrentFeeRate';
import {ResponseWrapperSolanaTokenSecurityTransferFeeScheduledFeeRate} from './model/ResponseWrapperSolanaTokenSecurityTransferFeeScheduledFeeRate';
import {ResponseWrapperSolanaTokenSecurityTransferFeeUpgradable} from './model/ResponseWrapperSolanaTokenSecurityTransferFeeUpgradable';
import {ResponseWrapperSolanaTokenSecurityTransferHook} from './model/ResponseWrapperSolanaTokenSecurityTransferHook';
import {ResponseWrapperSolanaTokenSecurityTransferHookUpgradable} from './model/ResponseWrapperSolanaTokenSecurityTransferHookUpgradable';
import {ResponseWrapperSolanaTokenSecurityWeek} from './model/ResponseWrapperSolanaTokenSecurityWeek';
import {ResponseWrapperSuiTokenSecurity} from './model/ResponseWrapperSuiTokenSecurity';
import {ResponseWrapperSuiTokenSecurityBlacklist} from './model/ResponseWrapperSuiTokenSecurityBlacklist';
import {ResponseWrapperSuiTokenSecurityContractUpgradeable} from './model/ResponseWrapperSuiTokenSecurityContractUpgradeable';
import {ResponseWrapperSuiTokenSecurityMetadataModifiable} from './model/ResponseWrapperSuiTokenSecurityMetadataModifiable';
import {ResponseWrapperSuiTokenSecurityMintable} from './model/ResponseWrapperSuiTokenSecurityMintable';
import {ResponseWrapperSuiTokenSecurityResult} from './model/ResponseWrapperSuiTokenSecurityResult';
import {ResponseWrapperTaTokenSecurityResponse} from './model/ResponseWrapperTaTokenSecurityResponse';
import {ResponseWrapperTokenLockerResponse} from './model/ResponseWrapperTokenLockerResponse';
import {ResponseWrapperTokenSecurity} from './model/ResponseWrapperTokenSecurity';
import {ResponseWrapperTokenSecurityDex} from './model/ResponseWrapperTokenSecurityDex';
import {ResponseWrapperTokenSecurityFakeToken} from './model/ResponseWrapperTokenSecurityFakeToken';
import {ResponseWrapperTokenSecurityHolders} from './model/ResponseWrapperTokenSecurityHolders';
import {ResponseWrapperTokenSecurityLockedDetail} from './model/ResponseWrapperTokenSecurityLockedDetail';
import {ResponseWrapperTokenSecurityLpHolders} from './model/ResponseWrapperTokenSecurityLpHolders';
import {ResponseWrapperTokenSecurityNFTList} from './model/ResponseWrapperTokenSecurityNFTList';
import {ResponseWrapperTokenSecurityResult} from './model/ResponseWrapperTokenSecurityResult';
import {ResponseWrapperobject} from './model/ResponseWrapperobject';
import {SolanaAllowanceUpgrade} from './model/SolanaAllowanceUpgrade';
import {SolanaOwnershipChange} from './model/SolanaOwnershipChange';
import {SolanaPrerunTxRequest} from './model/SolanaPrerunTxRequest';
import {SolanaPrerunTxResponse} from './model/SolanaPrerunTxResponse';
import {SolanaTxAssetChange} from './model/SolanaTxAssetChange';
import {SolanaTxAssetChanges} from './model/SolanaTxAssetChanges';
import {SolanaTxChangeDetail} from './model/SolanaTxChangeDetail';
import {SolanaTxSolChange} from './model/SolanaTxSolChange';
import {TaNftLockerLockInfoobject} from './model/TaNftLockerLockInfoobject';
import {TaTokenLockerLockInfoobject} from './model/TaTokenLockerLockInfoobject';
import {TaTokenSecurityResponse} from './model/TaTokenSecurityResponse';
import {TokenLockerResponse} from './model/TokenLockerResponse';
import {ApproveControllerV1Api} from './api/ApproveControllerV1Api';
import {ApproveControllerV2Api} from './api/ApproveControllerV2Api';
import {ContractAbiControllerApi} from './api/ContractAbiControllerApi';
import {DappControllerApi} from './api/DappControllerApi';
import {DefiControllerApi} from './api/DefiControllerApi';
import {LockControllerApi} from './api/LockControllerApi';
import {NftControllerApi} from './api/NftControllerApi';
import {TokenControllerApi} from './api/TokenControllerApi';
import {TokenControllerV1Api} from './api/TokenControllerV1Api';
import {TokenSecurityAPIForSolanaBetaApi} from './api/TokenSecurityAPIForSolanaBetaApi';
import {TokenSecurityAPIForSuiApi} from './api/TokenSecurityAPIForSuiApi';
import {TransactionSimulationForSolanaApi} from './api/TransactionSimulationForSolanaApi';
import {WebsiteControllerApi} from './api/WebsiteControllerApi';

/**
* Object.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var GoPlusSecurityApiDocument = require('index'); // See note below*.
* var xxxSvc = new GoPlusSecurityApiDocument.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new GoPlusSecurityApiDocument.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new GoPlusSecurityApiDocument.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new GoPlusSecurityApiDocument.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 1.0
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The AbiAddressInfo model constructor.
     * @property {module:model/AbiAddressInfo}
     */
    AbiAddressInfo,

    /**
     * The AbiParamInfo model constructor.
     * @property {module:model/AbiParamInfo}
     */
    AbiParamInfo,

    /**
     * The ApproveAddressInfo model constructor.
     * @property {module:model/ApproveAddressInfo}
     */
    ApproveAddressInfo,

    /**
     * The ApproveErc1155Result model constructor.
     * @property {module:model/ApproveErc1155Result}
     */
    ApproveErc1155Result,

    /**
     * The ApproveNFT1155ListResponse model constructor.
     * @property {module:model/ApproveNFT1155ListResponse}
     */
    ApproveNFT1155ListResponse,

    /**
     * The ApproveNFTListResponse model constructor.
     * @property {module:model/ApproveNFTListResponse}
     */
    ApproveNFTListResponse,

    /**
     * The ApproveResult model constructor.
     * @property {module:model/ApproveResult}
     */
    ApproveResult,

    /**
     * The ApproveTokenOutListResponse model constructor.
     * @property {module:model/ApproveTokenOutListResponse}
     */
    ApproveTokenOutListResponse,

    /**
     * The ApproveTokenResult model constructor.
     * @property {module:model/ApproveTokenResult}
     */
    ApproveTokenResult,

    /**
     * The AuditInfo model constructor.
     * @property {module:model/AuditInfo}
     */
    AuditInfo,

    /**
     * The ContractApproveResponse model constructor.
     * @property {module:model/ContractApproveResponse}
     */
    ContractApproveResponse,

    /**
     * The Contracts model constructor.
     * @property {module:model/Contracts}
     */
    Contracts,

    /**
     * The ContractsSecurity model constructor.
     * @property {module:model/ContractsSecurity}
     */
    ContractsSecurity,

    /**
     * The DappContractSecurityResponse model constructor.
     * @property {module:model/DappContractSecurityResponse}
     */
    DappContractSecurityResponse,

    /**
     * The GetAccessTokenRequest model constructor.
     * @property {module:model/GetAccessTokenRequest}
     */
    GetAccessTokenRequest,

    /**
     * The GetAccessTokenResponse model constructor.
     * @property {module:model/GetAccessTokenResponse}
     */
    GetAccessTokenResponse,

    /**
     * The GetDefiInfoResponse model constructor.
     * @property {module:model/GetDefiInfoResponse}
     */
    GetDefiInfoResponse,

    /**
     * The GetDefiInfoResponseResult model constructor.
     * @property {module:model/GetDefiInfoResponseResult}
     */
    GetDefiInfoResponseResult,

    /**
     * The GetDefiInfoResponseResultOwner model constructor.
     * @property {module:model/GetDefiInfoResponseResultOwner}
     */
    GetDefiInfoResponseResultOwner,

    /**
     * The JSONObject model constructor.
     * @property {module:model/JSONObject}
     */
    JSONObject,

    /**
     * The MapStringString model constructor.
     * @property {module:model/MapStringString}
     */
    MapStringString,

    /**
     * The NewAllowance model constructor.
     * @property {module:model/NewAllowance}
     */
    NewAllowance,

    /**
     * The NftLockerResponse model constructor.
     * @property {module:model/NftLockerResponse}
     */
    NftLockerResponse,

    /**
     * The ParseAbiDataRequest model constructor.
     * @property {module:model/ParseAbiDataRequest}
     */
    ParseAbiDataRequest,

    /**
     * The ParseAbiDataResponse model constructor.
     * @property {module:model/ParseAbiDataResponse}
     */
    ParseAbiDataResponse,

    /**
     * The ResponseWrapperAddressContract model constructor.
     * @property {module:model/ResponseWrapperAddressContract}
     */
    ResponseWrapperAddressContract,

    /**
     * The ResponseWrapperAddressContractResult model constructor.
     * @property {module:model/ResponseWrapperAddressContractResult}
     */
    ResponseWrapperAddressContractResult,

    /**
     * The ResponseWrapperContractApproveResponse model constructor.
     * @property {module:model/ResponseWrapperContractApproveResponse}
     */
    ResponseWrapperContractApproveResponse,

    /**
     * The ResponseWrapperDappContractSecurityResponse model constructor.
     * @property {module:model/ResponseWrapperDappContractSecurityResponse}
     */
    ResponseWrapperDappContractSecurityResponse,

    /**
     * The ResponseWrapperGetAccessTokenResponse model constructor.
     * @property {module:model/ResponseWrapperGetAccessTokenResponse}
     */
    ResponseWrapperGetAccessTokenResponse,

    /**
     * The ResponseWrapperGetNftInfo model constructor.
     * @property {module:model/ResponseWrapperGetNftInfo}
     */
    ResponseWrapperGetNftInfo,

    /**
     * The ResponseWrapperGetNftInfoResult model constructor.
     * @property {module:model/ResponseWrapperGetNftInfoResult}
     */
    ResponseWrapperGetNftInfoResult,

    /**
     * The ResponseWrapperGetNftInfoResultPrivilegedBurn model constructor.
     * @property {module:model/ResponseWrapperGetNftInfoResultPrivilegedBurn}
     */
    ResponseWrapperGetNftInfoResultPrivilegedBurn,

    /**
     * The ResponseWrapperGetNftInfoResultPrivilegedMinting model constructor.
     * @property {module:model/ResponseWrapperGetNftInfoResultPrivilegedMinting}
     */
    ResponseWrapperGetNftInfoResultPrivilegedMinting,

    /**
     * The ResponseWrapperGetNftInfoResultSameNfts model constructor.
     * @property {module:model/ResponseWrapperGetNftInfoResultSameNfts}
     */
    ResponseWrapperGetNftInfoResultSameNfts,

    /**
     * The ResponseWrapperGetNftInfoResultSelfDestruct model constructor.
     * @property {module:model/ResponseWrapperGetNftInfoResultSelfDestruct}
     */
    ResponseWrapperGetNftInfoResultSelfDestruct,

    /**
     * The ResponseWrapperGetNftInfoResultTransferWithoutApproval model constructor.
     * @property {module:model/ResponseWrapperGetNftInfoResultTransferWithoutApproval}
     */
    ResponseWrapperGetNftInfoResultTransferWithoutApproval,

    /**
     * The ResponseWrapperJSONObject model constructor.
     * @property {module:model/ResponseWrapperJSONObject}
     */
    ResponseWrapperJSONObject,

    /**
     * The ResponseWrapperListApproveNFT1155ListResponse model constructor.
     * @property {module:model/ResponseWrapperListApproveNFT1155ListResponse}
     */
    ResponseWrapperListApproveNFT1155ListResponse,

    /**
     * The ResponseWrapperListApproveNFTListResponse model constructor.
     * @property {module:model/ResponseWrapperListApproveNFTListResponse}
     */
    ResponseWrapperListApproveNFTListResponse,

    /**
     * The ResponseWrapperListApproveTokenOutListResponse model constructor.
     * @property {module:model/ResponseWrapperListApproveTokenOutListResponse}
     */
    ResponseWrapperListApproveTokenOutListResponse,

    /**
     * The ResponseWrapperListGetChainsList model constructor.
     * @property {module:model/ResponseWrapperListGetChainsList}
     */
    ResponseWrapperListGetChainsList,

    /**
     * The ResponseWrapperListGetChainsListResult model constructor.
     * @property {module:model/ResponseWrapperListGetChainsListResult}
     */
    ResponseWrapperListGetChainsListResult,

    /**
     * The ResponseWrapperListJSONObject model constructor.
     * @property {module:model/ResponseWrapperListJSONObject}
     */
    ResponseWrapperListJSONObject,

    /**
     * The ResponseWrapperMapStringString model constructor.
     * @property {module:model/ResponseWrapperMapStringString}
     */
    ResponseWrapperMapStringString,

    /**
     * The ResponseWrapperNftLockerResponse model constructor.
     * @property {module:model/ResponseWrapperNftLockerResponse}
     */
    ResponseWrapperNftLockerResponse,

    /**
     * The ResponseWrapperParseAbiDataResponse model constructor.
     * @property {module:model/ResponseWrapperParseAbiDataResponse}
     */
    ResponseWrapperParseAbiDataResponse,

    /**
     * The ResponseWrapperPhishingSite model constructor.
     * @property {module:model/ResponseWrapperPhishingSite}
     */
    ResponseWrapperPhishingSite,

    /**
     * The ResponseWrapperPhishingSiteResult model constructor.
     * @property {module:model/ResponseWrapperPhishingSiteResult}
     */
    ResponseWrapperPhishingSiteResult,

    /**
     * The ResponseWrapperPhishingSiteResultNftRisk model constructor.
     * @property {module:model/ResponseWrapperPhishingSiteResultNftRisk}
     */
    ResponseWrapperPhishingSiteResultNftRisk,

    /**
     * The ResponseWrapperPhishingSiteResultNftRiskPrivilegedBurn model constructor.
     * @property {module:model/ResponseWrapperPhishingSiteResultNftRiskPrivilegedBurn}
     */
    ResponseWrapperPhishingSiteResultNftRiskPrivilegedBurn,

    /**
     * The ResponseWrapperPhishingSiteResultNftRiskPrivilegedMinting model constructor.
     * @property {module:model/ResponseWrapperPhishingSiteResultNftRiskPrivilegedMinting}
     */
    ResponseWrapperPhishingSiteResultNftRiskPrivilegedMinting,

    /**
     * The ResponseWrapperPhishingSiteResultNftRiskSelfDestruct model constructor.
     * @property {module:model/ResponseWrapperPhishingSiteResultNftRiskSelfDestruct}
     */
    ResponseWrapperPhishingSiteResultNftRiskSelfDestruct,

    /**
     * The ResponseWrapperPhishingSiteResultNftRiskTransferWithoutApproval model constructor.
     * @property {module:model/ResponseWrapperPhishingSiteResultNftRiskTransferWithoutApproval}
     */
    ResponseWrapperPhishingSiteResultNftRiskTransferWithoutApproval,

    /**
     * The ResponseWrapperPhishingSiteResultWebsiteContractSecurity model constructor.
     * @property {module:model/ResponseWrapperPhishingSiteResultWebsiteContractSecurity}
     */
    ResponseWrapperPhishingSiteResultWebsiteContractSecurity,

    /**
     * The ResponseWrapperSolanaPrerunTxResponse model constructor.
     * @property {module:model/ResponseWrapperSolanaPrerunTxResponse}
     */
    ResponseWrapperSolanaPrerunTxResponse,

    /**
     * The ResponseWrapperSolanaTokenSecurity model constructor.
     * @property {module:model/ResponseWrapperSolanaTokenSecurity}
     */
    ResponseWrapperSolanaTokenSecurity,

    /**
     * The ResponseWrapperSolanaTokenSecurityBalanceMutableAuthority model constructor.
     * @property {module:model/ResponseWrapperSolanaTokenSecurityBalanceMutableAuthority}
     */
    ResponseWrapperSolanaTokenSecurityBalanceMutableAuthority,

    /**
     * The ResponseWrapperSolanaTokenSecurityClosable model constructor.
     * @property {module:model/ResponseWrapperSolanaTokenSecurityClosable}
     */
    ResponseWrapperSolanaTokenSecurityClosable,

    /**
     * The ResponseWrapperSolanaTokenSecurityClosableAuthority model constructor.
     * @property {module:model/ResponseWrapperSolanaTokenSecurityClosableAuthority}
     */
    ResponseWrapperSolanaTokenSecurityClosableAuthority,

    /**
     * The ResponseWrapperSolanaTokenSecurityCreator model constructor.
     * @property {module:model/ResponseWrapperSolanaTokenSecurityCreator}
     */
    ResponseWrapperSolanaTokenSecurityCreator,

    /**
     * The ResponseWrapperSolanaTokenSecurityDay model constructor.
     * @property {module:model/ResponseWrapperSolanaTokenSecurityDay}
     */
    ResponseWrapperSolanaTokenSecurityDay,

    /**
     * The ResponseWrapperSolanaTokenSecurityDefaultAccountStateUpgradable model constructor.
     * @property {module:model/ResponseWrapperSolanaTokenSecurityDefaultAccountStateUpgradable}
     */
    ResponseWrapperSolanaTokenSecurityDefaultAccountStateUpgradable,

    /**
     * The ResponseWrapperSolanaTokenSecurityDex model constructor.
     * @property {module:model/ResponseWrapperSolanaTokenSecurityDex}
     */
    ResponseWrapperSolanaTokenSecurityDex,

    /**
     * The ResponseWrapperSolanaTokenSecurityFreezable model constructor.
     * @property {module:model/ResponseWrapperSolanaTokenSecurityFreezable}
     */
    ResponseWrapperSolanaTokenSecurityFreezable,

    /**
     * The ResponseWrapperSolanaTokenSecurityLpHolders model constructor.
     * @property {module:model/ResponseWrapperSolanaTokenSecurityLpHolders}
     */
    ResponseWrapperSolanaTokenSecurityLpHolders,

    /**
     * The ResponseWrapperSolanaTokenSecurityMetadata model constructor.
     * @property {module:model/ResponseWrapperSolanaTokenSecurityMetadata}
     */
    ResponseWrapperSolanaTokenSecurityMetadata,

    /**
     * The ResponseWrapperSolanaTokenSecurityMetadataMutable model constructor.
     * @property {module:model/ResponseWrapperSolanaTokenSecurityMetadataMutable}
     */
    ResponseWrapperSolanaTokenSecurityMetadataMutable,

    /**
     * The ResponseWrapperSolanaTokenSecurityMintable model constructor.
     * @property {module:model/ResponseWrapperSolanaTokenSecurityMintable}
     */
    ResponseWrapperSolanaTokenSecurityMintable,

    /**
     * The ResponseWrapperSolanaTokenSecurityMonth model constructor.
     * @property {module:model/ResponseWrapperSolanaTokenSecurityMonth}
     */
    ResponseWrapperSolanaTokenSecurityMonth,

    /**
     * The ResponseWrapperSolanaTokenSecurityResult model constructor.
     * @property {module:model/ResponseWrapperSolanaTokenSecurityResult}
     */
    ResponseWrapperSolanaTokenSecurityResult,

    /**
     * The ResponseWrapperSolanaTokenSecurityTransferFee model constructor.
     * @property {module:model/ResponseWrapperSolanaTokenSecurityTransferFee}
     */
    ResponseWrapperSolanaTokenSecurityTransferFee,

    /**
     * The ResponseWrapperSolanaTokenSecurityTransferFeeCurrentFeeRate model constructor.
     * @property {module:model/ResponseWrapperSolanaTokenSecurityTransferFeeCurrentFeeRate}
     */
    ResponseWrapperSolanaTokenSecurityTransferFeeCurrentFeeRate,

    /**
     * The ResponseWrapperSolanaTokenSecurityTransferFeeScheduledFeeRate model constructor.
     * @property {module:model/ResponseWrapperSolanaTokenSecurityTransferFeeScheduledFeeRate}
     */
    ResponseWrapperSolanaTokenSecurityTransferFeeScheduledFeeRate,

    /**
     * The ResponseWrapperSolanaTokenSecurityTransferFeeUpgradable model constructor.
     * @property {module:model/ResponseWrapperSolanaTokenSecurityTransferFeeUpgradable}
     */
    ResponseWrapperSolanaTokenSecurityTransferFeeUpgradable,

    /**
     * The ResponseWrapperSolanaTokenSecurityTransferHook model constructor.
     * @property {module:model/ResponseWrapperSolanaTokenSecurityTransferHook}
     */
    ResponseWrapperSolanaTokenSecurityTransferHook,

    /**
     * The ResponseWrapperSolanaTokenSecurityTransferHookUpgradable model constructor.
     * @property {module:model/ResponseWrapperSolanaTokenSecurityTransferHookUpgradable}
     */
    ResponseWrapperSolanaTokenSecurityTransferHookUpgradable,

    /**
     * The ResponseWrapperSolanaTokenSecurityWeek model constructor.
     * @property {module:model/ResponseWrapperSolanaTokenSecurityWeek}
     */
    ResponseWrapperSolanaTokenSecurityWeek,

    /**
     * The ResponseWrapperSuiTokenSecurity model constructor.
     * @property {module:model/ResponseWrapperSuiTokenSecurity}
     */
    ResponseWrapperSuiTokenSecurity,

    /**
     * The ResponseWrapperSuiTokenSecurityBlacklist model constructor.
     * @property {module:model/ResponseWrapperSuiTokenSecurityBlacklist}
     */
    ResponseWrapperSuiTokenSecurityBlacklist,

    /**
     * The ResponseWrapperSuiTokenSecurityContractUpgradeable model constructor.
     * @property {module:model/ResponseWrapperSuiTokenSecurityContractUpgradeable}
     */
    ResponseWrapperSuiTokenSecurityContractUpgradeable,

    /**
     * The ResponseWrapperSuiTokenSecurityMetadataModifiable model constructor.
     * @property {module:model/ResponseWrapperSuiTokenSecurityMetadataModifiable}
     */
    ResponseWrapperSuiTokenSecurityMetadataModifiable,

    /**
     * The ResponseWrapperSuiTokenSecurityMintable model constructor.
     * @property {module:model/ResponseWrapperSuiTokenSecurityMintable}
     */
    ResponseWrapperSuiTokenSecurityMintable,

    /**
     * The ResponseWrapperSuiTokenSecurityResult model constructor.
     * @property {module:model/ResponseWrapperSuiTokenSecurityResult}
     */
    ResponseWrapperSuiTokenSecurityResult,

    /**
     * The ResponseWrapperTaTokenSecurityResponse model constructor.
     * @property {module:model/ResponseWrapperTaTokenSecurityResponse}
     */
    ResponseWrapperTaTokenSecurityResponse,

    /**
     * The ResponseWrapperTokenLockerResponse model constructor.
     * @property {module:model/ResponseWrapperTokenLockerResponse}
     */
    ResponseWrapperTokenLockerResponse,

    /**
     * The ResponseWrapperTokenSecurity model constructor.
     * @property {module:model/ResponseWrapperTokenSecurity}
     */
    ResponseWrapperTokenSecurity,

    /**
     * The ResponseWrapperTokenSecurityDex model constructor.
     * @property {module:model/ResponseWrapperTokenSecurityDex}
     */
    ResponseWrapperTokenSecurityDex,

    /**
     * The ResponseWrapperTokenSecurityFakeToken model constructor.
     * @property {module:model/ResponseWrapperTokenSecurityFakeToken}
     */
    ResponseWrapperTokenSecurityFakeToken,

    /**
     * The ResponseWrapperTokenSecurityHolders model constructor.
     * @property {module:model/ResponseWrapperTokenSecurityHolders}
     */
    ResponseWrapperTokenSecurityHolders,

    /**
     * The ResponseWrapperTokenSecurityLockedDetail model constructor.
     * @property {module:model/ResponseWrapperTokenSecurityLockedDetail}
     */
    ResponseWrapperTokenSecurityLockedDetail,

    /**
     * The ResponseWrapperTokenSecurityLpHolders model constructor.
     * @property {module:model/ResponseWrapperTokenSecurityLpHolders}
     */
    ResponseWrapperTokenSecurityLpHolders,

    /**
     * The ResponseWrapperTokenSecurityNFTList model constructor.
     * @property {module:model/ResponseWrapperTokenSecurityNFTList}
     */
    ResponseWrapperTokenSecurityNFTList,

    /**
     * The ResponseWrapperTokenSecurityResult model constructor.
     * @property {module:model/ResponseWrapperTokenSecurityResult}
     */
    ResponseWrapperTokenSecurityResult,

    /**
     * The ResponseWrapperobject model constructor.
     * @property {module:model/ResponseWrapperobject}
     */
    ResponseWrapperobject,

    /**
     * The SolanaAllowanceUpgrade model constructor.
     * @property {module:model/SolanaAllowanceUpgrade}
     */
    SolanaAllowanceUpgrade,

    /**
     * The SolanaOwnershipChange model constructor.
     * @property {module:model/SolanaOwnershipChange}
     */
    SolanaOwnershipChange,

    /**
     * The SolanaPrerunTxRequest model constructor.
     * @property {module:model/SolanaPrerunTxRequest}
     */
    SolanaPrerunTxRequest,

    /**
     * The SolanaPrerunTxResponse model constructor.
     * @property {module:model/SolanaPrerunTxResponse}
     */
    SolanaPrerunTxResponse,

    /**
     * The SolanaTxAssetChange model constructor.
     * @property {module:model/SolanaTxAssetChange}
     */
    SolanaTxAssetChange,

    /**
     * The SolanaTxAssetChanges model constructor.
     * @property {module:model/SolanaTxAssetChanges}
     */
    SolanaTxAssetChanges,

    /**
     * The SolanaTxChangeDetail model constructor.
     * @property {module:model/SolanaTxChangeDetail}
     */
    SolanaTxChangeDetail,

    /**
     * The SolanaTxSolChange model constructor.
     * @property {module:model/SolanaTxSolChange}
     */
    SolanaTxSolChange,

    /**
     * The TaNftLockerLockInfoobject model constructor.
     * @property {module:model/TaNftLockerLockInfoobject}
     */
    TaNftLockerLockInfoobject,

    /**
     * The TaTokenLockerLockInfoobject model constructor.
     * @property {module:model/TaTokenLockerLockInfoobject}
     */
    TaTokenLockerLockInfoobject,

    /**
     * The TaTokenSecurityResponse model constructor.
     * @property {module:model/TaTokenSecurityResponse}
     */
    TaTokenSecurityResponse,

    /**
     * The TokenLockerResponse model constructor.
     * @property {module:model/TokenLockerResponse}
     */
    TokenLockerResponse,

    /**
    * The ApproveControllerV1Api service constructor.
    * @property {module:api/ApproveControllerV1Api}
    */
    ApproveControllerV1Api,

    /**
    * The ApproveControllerV2Api service constructor.
    * @property {module:api/ApproveControllerV2Api}
    */
    ApproveControllerV2Api,

    /**
    * The ContractAbiControllerApi service constructor.
    * @property {module:api/ContractAbiControllerApi}
    */
    ContractAbiControllerApi,

    /**
    * The DappControllerApi service constructor.
    * @property {module:api/DappControllerApi}
    */
    DappControllerApi,

    /**
    * The DefiControllerApi service constructor.
    * @property {module:api/DefiControllerApi}
    */
    DefiControllerApi,

    /**
    * The LockControllerApi service constructor.
    * @property {module:api/LockControllerApi}
    */
    LockControllerApi,

    /**
    * The NftControllerApi service constructor.
    * @property {module:api/NftControllerApi}
    */
    NftControllerApi,

    /**
    * The TokenControllerApi service constructor.
    * @property {module:api/TokenControllerApi}
    */
    TokenControllerApi,

    /**
    * The TokenControllerV1Api service constructor.
    * @property {module:api/TokenControllerV1Api}
    */
    TokenControllerV1Api,

    /**
    * The TokenSecurityAPIForSolanaBetaApi service constructor.
    * @property {module:api/TokenSecurityAPIForSolanaBetaApi}
    */
    TokenSecurityAPIForSolanaBetaApi,

    /**
    * The TokenSecurityAPIForSuiApi service constructor.
    * @property {module:api/TokenSecurityAPIForSuiApi}
    */
    TokenSecurityAPIForSuiApi,

    /**
    * The TransactionSimulationForSolanaApi service constructor.
    * @property {module:api/TransactionSimulationForSolanaApi}
    */
    TransactionSimulationForSolanaApi,

    /**
    * The WebsiteControllerApi service constructor.
    * @property {module:api/WebsiteControllerApi}
    */
    WebsiteControllerApi
};
