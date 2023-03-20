import {GoPlus, ErrorCode} from '../index.js';

async function test() {
    let app_key = '';
    let app_secret = '';
    let timeout = 30; // default timeout is 30s
    GoPlus.config(app_key, app_secret, 30);

    // let accessTokenRet = await GoPlus.getAccessToken();
    // if (accessTokenRet.code != 1) {
    //     console.error(accessTokenRet.message);
    // } else {
    //     console.log(accessTokenRet.result);
    // }

    // supported chains
    let supportedChains = await GoPlus.supportedChains(GoPlus.API_NAMES.address_security);
    if (supportedChains.code != ErrorCode.SUCCESS) {
        console.error(supportedChains.message);
    } else {
        console.log(supportedChains.result);
    }

    // token security
    let tokenRet = await GoPlus.tokenSecurity('1', ['0xc09d9fea24901e00a19321270daf88e022050c8e']);
    if (tokenRet.code != ErrorCode.SUCCESS) {
        console.error(tokenRet.message);
    } else {
        console.log(tokenRet.result['0xc09d9fea24901e00a19321270daf88e022050c8e']);
    }

    
    process.exit(0);
}

test();