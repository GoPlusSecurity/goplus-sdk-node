const { GoPlus, ErrorCode } = require('goplus-sdk-js');

async function test() {
    let app_key = '';
    let app_secret = '';
    let timeout = 30; // default timeout is 30s
    GoPlus.config(app_key, app_secret, timeout);

    // let accessTokenRet = await GoPlus.getAccessToken();
    // if (accessTokenRet.code != 1) {
    //     console.error(accessTokenRet.message);
    // } else {
    //     console.log(accessTokenRet.result);
    // }

    // supported chains
    let supportedChains = await GoPlus.supportedChains(GoPlus.API_NAMES.address_security);
    if (supportedChains.code != ErrorCode.SUCCESS) {
        console.error(supportedChains.message);
    } else {
        console.log(supportedChains.result);
    }

    // token security
    let tokenRet = await GoPlus.tokenSecurity('1', ['0x408e41876cccdc0f92210600ef50372656052a38']);
    if (tokenRet.code != ErrorCode.SUCCESS) {
        console.error(tokenRet.message);
    } else {
        console.log(tokenRet.result['0x408e41876cccdc0f92210600ef50372656052a38']);
    }

    // address security
    let addressRet = await GoPlus.addressSecurity('1', '0x408e41876cccdc0f92210600ef50372656052a38');
    if (addressRet.code != ErrorCode.SUCCESS) {
        console.error(addressRet.message);
    } else {
        console.log(addressRet.result);
    }

    // approval security
    let approvalRet = await GoPlus.approvalSecurity('1', '0x408e41876cccdc0f92210600ef50372656052a38');
    if (approvalRet.code != ErrorCode.SUCCESS && approvalRet.code != ErrorCode.DATA_PENDING_SYNC) {
        console.error(approvalRet.message);
    } else {
        console.log(approvalRet.result);
    }

    // erc20 approval security
    let erc20ApprovalRet = await GoPlus.erc20ApprovalSecurity('56', '0xd018e2b543a2669410537f96293590138cacedf3');
    if (erc20ApprovalRet.code != ErrorCode.SUCCESS) {
        console.error(erc20ApprovalRet.message);
    } else {
        console.log(erc20ApprovalRet.result);
    }

    // erc721 approval security
    let erc721ApprovalRet = await GoPlus.erc721ApprovalSecurity('1', '0xd95dbdab08a9fed2d71ac9c3028aac40905d8cf3');
    if (erc721ApprovalRet.code != ErrorCode.SUCCESS) {
        console.error(erc721ApprovalRet.message);
    } else {
        console.log(erc721ApprovalRet.result);
    }

    // erc1155 approval security
    let erc1155ApprovalRet = await GoPlus.erc1155ApprovalSecurity('56', '0xb0dccbb9c4a65a94a41a0165aaea79c8b2fc54ce');
    if (erc1155ApprovalRet.code != ErrorCode.SUCCESS) {
        console.error(erc1155ApprovalRet.message);
    } else {
        console.log(erc1155ApprovalRet.result);
    }

    // input decode
    let decodeRet = await GoPlus.inputDecode('1', '0x4cc8aa0c6ffbe18534584da9b592aa438733ee66', '0xa0712d680000000000000000000000000000000000000000000000000000000062fee481');
    if (decodeRet.code != ErrorCode.SUCCESS) {
        console.error(decodeRet.message);
    } else {
        console.log(decodeRet.result);
    }

    // nft security
    let nftRet = await GoPlus.nftSecurity('1', '0x60e4d786628fea6478f785a6d7e704777c86a7c6', '25218');
    if (nftRet.code != ErrorCode.SUCCESS && nftRet.code != ErrorCode.DATA_PENDING_SYNC) {
        console.error(nftRet.message);
    } else {
        console.log(nftRet.result);
    }

    // dapp security
    let dappRet = await GoPlus.dappSecurity('https://for.tube');
    if (dappRet.code != ErrorCode.SUCCESS) {
        console.error(dappRet.message);
    } else {
        console.log(dappRet.result);
    }

    // phishing site
    let phishingRet = await GoPlus.phishingSite('https://xn--cm-68s.cc/');
    if (phishingRet.code != ErrorCode.SUCCESS) {
        console.error(phishingRet.message);
    } else {
        console.log(phishingRet.result);
    }

    // rugpull detection
    let chainId = '1';
    let address = '0x0785ab399Ae207cE2c7A3eAC18eda16177fAD588';
    let rugpullRet = await GoPlus.rugpullDetection(chainId, address);
    if (rugpullRet.code != ErrorCode.SUCCESS && ret.code != ErrorCode.DATA_PENDING_SYNC) {
        console.error(rugpullRet.message);
    } else {
        console.log(rugpullRet.result);
    }
    process.exit(0);
}

test();