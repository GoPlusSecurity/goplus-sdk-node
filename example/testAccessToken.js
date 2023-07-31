const { GoPlus, ErrorCode } = require('goplus-sdk-js');


async function test() {
    let app_key = '';
    let app_secret = '';
    let timeout = 30; // default timeout is 30s
    GoPlus.config(app_key, app_secret, timeout);

    let accessTokenRet = await GoPlus.getAccessToken();
    console.log(accessTokenRet);
    if (accessTokenRet.code != 1) {
        console.error(accessTokenRet.message);
    } else {
        console.log(accessTokenRet.result);
    }

    process.exit(0);
}

test();