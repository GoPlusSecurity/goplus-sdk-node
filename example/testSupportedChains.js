const { GoPlus, ErrorCode } = require('goplus-sdk-js');

async function test() {
    // supported chains
    let supportedChains = await GoPlus.supportedChains(GoPlus.API_NAMES.address_security);
    if (supportedChains.code != ErrorCode.SUCCESS) {
        console.error(supportedChains.message);
    } else {
        console.log(supportedChains.result);
    }
    process.exit(0);
}

test();