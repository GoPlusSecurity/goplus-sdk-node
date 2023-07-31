const { GoPlus, ErrorCode } = require('goplus-sdk-js');

async function test() {
    // nft security
    let nftRet = await GoPlus.nftSecurity('1', '0x60e4d786628fea6478f785a6d7e704777c86a7c6', '25218');
    if (nftRet.code != ErrorCode.SUCCESS && nftRet.code != ErrorCode.DATA_PENDING_SYNC) {
        console.error(nftRet.message);
    } else {
        console.log(nftRet.result);
    }
    process.exit(0);
}

test();