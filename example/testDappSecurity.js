const { GoPlus, ErrorCode } = require('goplus-sdk-js');

async function test() {
    // dapp security
    let dappRet = await GoPlus.dappSecurity('https://for.tube');
    if (dappRet.code != ErrorCode.SUCCESS) {
        console.error(dappRet.message);
    } else {
        console.log(dappRet.result);
    }
    process.exit(0);
}

test();