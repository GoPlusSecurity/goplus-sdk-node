import {GoPlus, ErrorCode} from '../index.js';

async function test() {
    let app_key = '';
    let app_secret = '';
    let timeout = 30; // default timeout is 30s
    GoPlus.config(app_key, app_secret, 30);

    // token security
    let tokenRet = await GoPlus.tokenSecurity('1', ['0x796a4503b444a71b331c9556bef0815237ddeabc']);
    if (tokenRet.code != ErrorCode.SUCCESS) {
        console.error(tokenRet.message);
    } else {
        const tokenResult = tokenRet.result['0x796a4503b444a71b331c9556bef0815237ddeabc'];
        if ( tokenResult.transfer_pausable === '1') {
            console.log('Transfer is pausable');
        } else {
            console.log('Transfer is not pausable');
        }
    }

    process.exit(0);
}

test();
