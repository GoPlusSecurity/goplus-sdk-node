import {GoPlus, ErrorCode} from '../index.js';

async function test() {
    let app_key = '';
    let app_secret = '';
    let timeout = 30; // default timeout is 30s
    GoPlus.config(app_key, app_secret, 30);

    // token security
    let tokenRet = await GoPlus.tokenSecurity('1', ['0xaedfbbdbea6a6fd0ba10d6561cbeb797bd575a8f']);
    if (tokenRet.code != ErrorCode.SUCCESS) {
        console.error(tokenRet.message);
    } else {
        const expectedValues = {
            anti_whale_modifiable: '0',
            buy_tax: '0',
            can_take_back_ownership: '0',
            cannot_buy: '0',
            cannot_sell_all: '0',
            creator_percent: '0.000000',
            external_call: '0',
            hidden_owner: '0',
            honeypot_with_same_creator: '0',
            is_anti_whale: '0',
            is_blacklisted: '0',
            is_honeypot: '0',
            is_in_dex: '1',
            is_mintable: '0',
            is_open_source: '1',
            is_proxy: '0',
            is_whitelisted: '0',
            owner_address: '',
            owner_balance: '0',
            owner_change_balance: '0',
            owner_percent: '0',
            personal_slippage_modifiable: '0',
            selfdestruct: '0',
            sell_tax: '0',
            slippage_modifiable: '0',
            trading_cooldown: '0',
            transfer_pausable: '0',
        };
        const keys = Object.keys(expectedValues);
        const result = tokenRet.result['0xaedfbbdbea6a6fd0ba10d6561cbeb797bd575a8f'];
        const matchesExpected = keys.every((key) => result.hasOwnProperty(key) && result[key] === expectedValues[key]);
        if (matchesExpected) {
            console.log('It is a gem!');
        }
    }

    process.exit(0);
}

test();
