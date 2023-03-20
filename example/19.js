import {GoPlus, ErrorCode} from '../index.js';

async function test() {
    let app_key = '';
    let app_secret = '';
    let timeout = 30; // default timeout is 30s
    GoPlus.config(app_key, app_secret, 30);

    // token security
    let tokenRet = await GoPlus.tokenSecurity('1', ['0xd015422879a1308ba557510345e944b912b9ab73']);
    if (tokenRet.code != ErrorCode.SUCCESS) {
        console.error(tokenRet.message);
    } else {
        const tokenResult = tokenRet.result['0xd015422879a1308ba557510345e944b912b9ab73'];
        let matches = true;
        const propertiesToCheck = [
            { name: 'transfer_pausable', value: '0' },
            { name: 'anti_whale_modifiable', value: '0' },
            { name: 'buy_tax', value: '5', comparison: '<=' },
            { name: 'can_take_back_ownership', value: '0' },
            { name: 'cannot_buy', value: '0' },
            { name: 'is_in_dex', value: '1' },
            { name: 'cannot_sell_all', value: '0' },
            { name: 'creator_percent', value: '0.000000' },
            { name: 'external_call', value: '0' },
            { name: 'hidden_owner', value: '0' },
            { name: 'honeypot_with_same_creator', value: '0' },
            { name: 'is_anti_whale', value: '0' },
            { name: 'is_blacklisted', value: '0' },
            { name: 'is_honeypot', value: '0' },
            { name: 'is_mintable', value: '0' },
            { name: 'is_open_source', value: '1' },
            { name: 'is_proxy', value: '0' },
            { name: 'is_whitelisted', value: '0' },
            { name: 'owner_address', value: '' },
            { name: 'owner_balance', value: '0' },
            { name: 'owner_change_balance', value: '0' },
            { name: 'owner_percent', value: '0' },
            { name: 'personal_slippage_modifiable', value: '0' },
            { name: 'selfdestruct', value: '0' },
            { name: 'sell_tax', value: '5', comparison: '<=' },
            { name: 'slippage_modifiable', value: '0' },
            { name: 'trading_cooldown', value: '0' },
        ];

        for (let property of propertiesToCheck) {
            if (property.name in tokenResult) {
                const tokenValue = tokenResult[property.name];
                if (property.comparison === '<=') {
                    matches = matches && parseFloat(tokenValue) <= parseFloat(property.value);
                } else {
                    matches = matches && tokenValue === property.value;
                }
            }
        }

        if (matches) {
            console.log('Token matches the expected properties and values. It is a gem!');
        } else {
            console.log('Token does not match the expected properties and values.');
        }
    }

    process.exit(0);
}

test();
