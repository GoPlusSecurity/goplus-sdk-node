const { GoPlus, ErrorCode } = require('goplus-sdk-js');


async function test() {
    // address security
    let addressRet = await GoPlus.addressSecurity('1', '0x408e41876cccdc0f92210600ef50372656052a38');
    if (addressRet.code != ErrorCode.SUCCESS) {
        console.error(addressRet.message);
    } else {
        console.log(addressRet.result);
    }
    process.exit(0);
}

test();