const { GoPlus, ErrorCode } = require('goplus-sdk-js');

async function test() {
    // token security
    let tokenRet = await GoPlus.tokenSecurity('1', ['0x408e41876cccdc0f92210600ef50372656052a38']);
    if (tokenRet.code != ErrorCode.SUCCESS) {
        console.error(tokenRet.message);
    } else {
        console.log(tokenRet.result['0x408e41876cccdc0f92210600ef50372656052a38']);
    }
    process.exit(0);
}

test();