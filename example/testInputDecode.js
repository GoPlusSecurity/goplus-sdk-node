const { GoPlus, ErrorCode } = require('goplus-sdk-js');


async function test() {
    // input decode
    let decodeRet = await GoPlus.inputDecode('1', '0x4cc8aa0c6ffbe18534584da9b592aa438733ee66', '0xa0712d680000000000000000000000000000000000000000000000000000000062fee481');
    if (decodeRet.code != ErrorCode.SUCCESS) {
        console.error(decodeRet.message);
    } else {
        console.log(decodeRet.result);
    }

    // input decode with signer
    let signer = '0x0000000000000000000000000000000000000000';
    let data = '0x18cbafe500000000000000000000000000000000000000000000018d3f36640ede281bf40000000000000000000000000000000000000000000000001ea33680437e6bcd00000000000000000000000000000000000000000000000000000000000000a00000000000000000000000000c3289e4bfb8868c242833479232ff0ee4efae7800000000000000000000000000000000000000000000000000000000638f084b000000000000000000000000000000000000000000000000000000000000000200000000000000000000000031a9975f71f53d5cdeb4bf4a48b3857e3827d487000000000000000000000000bb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c';
    // input decode
    let decodeRet2 = await GoPlus.inputDecodeWithOpts('56', '0x10ED43C718714eb63d5aA57B78B54704E256024E', data, {signer});
    if (decodeRet2.code != ErrorCode.SUCCESS) {
        console.error(decodeRet2.message);
    } else {
        console.log(decodeRet2.result.risk);
    }
    process.exit(0);
}

test();