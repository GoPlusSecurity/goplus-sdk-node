import {GoPlus, ErrorCode} from '../index.js';

async function test() {
    let app_key = '';
    let app_secret = '';
    let timeout = 30;
    GoPlus.config(app_key, app_secret, 30);
    let supportedChains = await GoPlus.supportedChains(GoPlus.API_NAMES.address_security);
    if (supportedChains.code != ErrorCode.SUCCESS) {
        console.error(supportedChains.message);
    } else {
        console.log(supportedChains.result);
    }

    // token security
    let tokenRet = await GoPlus.tokenSecurity('1', ['0xbE790fC7E1e7d2817b9f476b4B04faabc2637967']);
    if (tokenRet.code != ErrorCode.SUCCESS) {
        console.error(tokenRet.message);
    } else {
        console.log(tokenRet.result['0xbE790fC7E1e7d2817b9f476b4B04faabc2637967']);
    }

    
    process.exit(0);
}

test();