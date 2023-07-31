const { GoPlus, ErrorCode } = require('goplus-sdk-js');

async function test() {
    // approval security
    let approvalRet = await GoPlus.approvalSecurity('1', '0x408e41876cccdc0f92210600ef50372656052a38');
    if (approvalRet.code != ErrorCode.SUCCESS && approvalRet.code != ErrorCode.DATA_PENDING_SYNC) {
        console.error(approvalRet.message);
    } else {
        console.log(approvalRet.result);
    }
    process.exit(0);
}

test();