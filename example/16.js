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
        let matches = true;
        const propertiesToCheck = [
            { name: 'transfer_pausable', value: '0' },
            { name: 'anti_whale_modifiable', value: '0' },
            { name: 'buy_tax', value: '5', comparison: '<=' },
            { name: 'can_take_back_ownership', value: '0' },
            { name: 'personal_slippage_modifiable', value: '0' },
            { name: 'selfdestruct', value: '0' },
            { name: 'sell_tax', value: '5', comparison: '<=' },
            { name: 'slippage_modifiable', value: '0' },
            { name: 'trading_cooldown', value: '0' },
            { name: 'is_proxy', value: '0' },
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
