const { GoPlus, ErrorCode } = require('goplus-sdk-js');

async function test() {
    // phishing site
    let phishingRet = await GoPlus.phishingSite('https://xn--cm-68s.cc/');
    if (phishingRet.code != ErrorCode.SUCCESS) {
        console.error(phishingRet.message);
    } else {
        console.log(phishingRet.result);
    }
    process.exit(0);
}

test();