const { GoPlus, ErrorCode } = require('goplus-sdk-js');

async function test() {
    // rugpull detection
    let chainId = '1';
    let address = '0x0785ab399Ae207cE2c7A3eAC18eda16177fAD588';
    let rugpullRet = await GoPlus.rugpullDetection(chainId, address);
    if (rugpullRet.code != ErrorCode.SUCCESS && rugpullRet.code != ErrorCode.DATA_PENDING_SYNC) {
        console.error(rugpullRet.message);
    } else {
        console.log(rugpullRet.result);
    }
    process.exit(0);
}

test();