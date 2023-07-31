const { GoPlus, ErrorCode } = require('goplus-sdk-js');

async function test() {
    // erc1155 approval security
    let erc1155ApprovalRet = await GoPlus.erc1155ApprovalSecurity('56', '0xb0dccbb9c4a65a94a41a0165aaea79c8b2fc54ce');
    if (erc1155ApprovalRet.code != ErrorCode.SUCCESS) {
        console.error(erc1155ApprovalRet.message);
    } else {
        console.log(erc1155ApprovalRet.result);
    }
    process.exit(0);
}

test();