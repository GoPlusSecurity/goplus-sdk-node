const { GoPlus, ErrorCode } = require('goplus-sdk-js');

async function test() {
    // erc721 approval security
    let erc721ApprovalRet = await GoPlus.erc721ApprovalSecurity('1', '0xd95dbdab08a9fed2d71ac9c3028aac40905d8cf3');
    if (erc721ApprovalRet.code != ErrorCode.SUCCESS) {
        console.error(erc721ApprovalRet.message);
    } else {
        console.log(erc721ApprovalRet.result);
    }
    process.exit(0);
}

test();