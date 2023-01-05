import SHA1 from 'crypto-js/sha1.js';
import fetch from "node-fetch";
import FormData from 'form-data';

const BASE_URL = "https://api.gopluslabs.io/api/";

const GET_OPTIONS = {
    method: 'GET',
    credentials: 'include',
    headers: {
        'Connection': 'keep-alive',
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
};

let _key = '';
let _secret = '';
let _timeout = 30;
let _accessToken = undefined;

/**
 * 
 * @param {string} app_key 
 * @param {string} app_secret 
 */
function config(app_key, app_secret, timeout=30) {
    _key = app_key;
    _secret = app_secret;
    _timeout = timeout;
}

/**
 * refresh Authorization by app_key and app_secret, 
 * so this method must called after config(app_key, app_secret)
 * @returns 
 */
async function getAccessToken() {
    if (!_key || !_secret) {
        throw Error('app_key or app_secret not set');
    }
    let time = (Date.now() / 1000).toFixed(0);
    let str = _key + time + _secret;
    let sign = SHA1(str).toString();

    let form = new FormData();
    form.append("app_key", _key);
    form.append("time", time);
    form.append("sign", sign);

    let headers = form.getHeaders();
    headers["Connection"] = "keep-alive";
    headers["Content-Type"] = "application/json";
    let postOptions = {
        method: 'POST',
        credentials: 'include',
        headers: headers,
        body: form
    };
    let ret = await fetchWithTimeout(BASE_URL + 'v1/token', postOptions);
    if(ret && ret.result){
        _accessToken = ret.result.access_token;
        GET_OPTIONS.headers['Authorization'] = _accessToken;
    }
    return ret;
}

/**
 * 
 * @param {string} name  one of the API_NAMES
 * @param {int} timeout Not required, default is 30 or setup by config function
 * @returns 
 */
async function supportedChains(name, timeout) {
    if(!API_NAMES[name]){
        throw Error('Api name not supported');
    }
    let url = BASE_URL + 'v1/supported_chains?name=' + name;
    let ret = await fetchWithTimeout(url, GET_OPTIONS, timeout);
    return ret;
}

const API_NAMES = {
    token_security: 'token_security',
    address_security: 'address_security',
    approval_security: 'approval_security',
    token_approval_security: 'token_approval_security',
    nft721_approval_security: 'nft721_approval_security',
    nft1155_approval_security: 'nft1155_approval_security',
    input_decode: 'input_decode',
    nft_security: 'nft_security'
}

/**
 * Only return result for the first token when the Authorization not set
 * @param {string} chainId 
 * @param {string[]} tokens 
 * @param {int} timeout Not required, default is 30 or setup by config function
 */
async function tokenSecurity(chainId, tokens, timeout) {
    let url = `${BASE_URL}v1/token_security/${chainId}?contract_addresses=${tokens.join()}`;
    let ret = await fetchWithTimeout(url, GET_OPTIONS, timeout);
    return ret;
}

/**
 * 
 * @param {string} chainId 
 * @param {string} address 
 * @param {int} timeout Not required, default is 30 or setup by config function
 * @returns 
 */
async function addressSecurity(chainId, address, timeout) {
    let url = `${BASE_URL}v1/address_security/${address}?chain_id=${chainId}`;
    let ret = await fetchWithTimeout(url, GET_OPTIONS, timeout);
    return ret;
}

/**
 * 
 * @param {string} chainId 
 * @param {string} address 
 * @param {int} timeout Not required, default is 30 or setup by config function
 * @returns 
 */
async function approvalSecurity(chainId, address, timeout) {
    let url = `${BASE_URL}v1/approval_security/${chainId}?contract_addresses=${address}`;
    let ret = await fetchWithTimeout(url, GET_OPTIONS, timeout);
    return ret;
}

/**
 * 
 * @param {string} chainId 
 * @param {string} address 
 * @param {int} timeout Not required, default is 30 or setup by config function
 * @returns 
 */
async function erc20ApprovalSecurity(chainId, address, timeout) {
    let url = `${BASE_URL}v2/token_approval_security/${chainId}?addresses=${address}`;
    let ret = await fetchWithTimeout(url, GET_OPTIONS, timeout);
    return ret;
}

/**
 * 
 * @param {string} chainId 
 * @param {string} address 
 * @param {int} timeout Not required, default is 30 or setup by config function
 * @returns 
 */
async function erc721ApprovalSecurity(chainId, address, timeout) {
    let url = `${BASE_URL}v2/nft721_approval_security/${chainId}?addresses=${address}`;
    let ret = await fetchWithTimeout(url, GET_OPTIONS, timeout);
    return ret;
}

/**
 * 
 * @param {string} chainId 
 * @param {string} address 
 * @param {int} timeout Not required, default is 30 or setup by config function
 * @returns 
 */
async function erc1155ApprovalSecurity(chainId, address, timeout) {
    let url = `${BASE_URL}v2/nft1155_approval_security/${chainId}?addresses=${address}`;
    let ret = await fetchWithTimeout(url, GET_OPTIONS, timeout);
    return ret;
}

/**
 * 
 * @param {string} chainId 
 * @param {string} contractAddress 
 * @param {string} data 
 * @param {int} timeout Not required, default is 30 or setup by config function
 * @returns 
 */
async function inputDecode(chainId, contractAddress, data, timeout) {
    let postOptions = {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Connection': 'keep-alive',
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            chain_id: chainId,
            contract_address: contractAddress,
            data
        })
    };
    if (_accessToken) {
        postOptions.headers['Authorization'] = _accessToken;
    }
    let ret = await fetchWithTimeout(BASE_URL+'v1/abi/input_decode', postOptions, timeout);
    return ret;
}

/**
 * 
 * @param {string} chainId 
 * @param {string} contract_address 
 * @param {int} timeout Not required, default is 30 or setup by config function
 * @returns 
 */
async function nftSecurity(chainId, contract_address, timeout) {
    let url = `${BASE_URL}v1/nft_security/${chainId}?contract_addresses=${contract_address}`;
    let ret = await fetchWithTimeout(url, GET_OPTIONS, timeout);
    return ret;
}

/**
 * 
 * @param {string} dapp_url 
 * @param {int} timeout Not required, default is 30 or setup by config function
 * @returns 
 */
async function dappSecurity(dapp_url, timeout) {
    let url = `${BASE_URL}v1/dapp_security/?url=${dapp_url}`;
    let ret = await fetchWithTimeout(url, GET_OPTIONS, timeout);
    return ret;
}


/**
 * 
 * @param {string} site_url 
 * @param {int} timeout Not required, default is 30 or setup by config function
 * @returns 
 */
async function phishingSite(site_url, timeout) {
    let url = `${BASE_URL}v1/phishing_site/?url=${site_url}`;
    let ret = await fetchWithTimeout(url, GET_OPTIONS, timeout);
    return ret;
}

async function fetchWithTimeout(url, options, timeout) {
    let timeoutPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({code: -1, message: "Request Timeout!"});
        }, (timeout || _timeout) * 1000);
    });
    let requestPromise = fetch(url, options).then(ret => ret.json());
    return Promise.race([timeoutPromise, requestPromise]);
}


const GoPlus = {
    API_NAMES,
    config,
    getAccessToken,
    supportedChains,
    tokenSecurity,
    addressSecurity,
    approvalSecurity,
    erc20ApprovalSecurity,
    erc721ApprovalSecurity,
    erc1155ApprovalSecurity,
    inputDecode,
    nftSecurity,
    dappSecurity,
    phishingSite
}

export default GoPlus;