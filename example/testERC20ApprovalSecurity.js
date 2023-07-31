const { GoPlus, ErrorCode } = require('goplus-sdk-js');

async function test() {
    // erc20 approval security
    let erc20ApprovalRet = await GoPlus.erc20ApprovalSecurity('56', '0xd018e2b543a2669410537f96293590138cacedf3');
    if (erc20ApprovalRet.code != ErrorCode.SUCCESS) {
        console.error(erc20ApprovalRet.message);
    } else {
        console.log(erc20ApprovalRet.result);
    }
    process.exit(0);
}

test();