import {GoPlus, ErrorCode} from '../index.js';

async function test() {
    let app_key = '';
    let app_secret = '';
    let timeout = 30; // default timeout is 30s
    GoPlus.config(app_key, app_secret, 30);

    // token security
    let tokenRet = await GoPlus.tokenSecurity('1', ['0x71be2bb1a994447420915c4534cbf5d0305480a6']);
    if (tokenRet.code != ErrorCode.SUCCESS) {
        console.error(tokenRet.message);
    } else {
        let isGem = true;
        const expectedValues = {
            anti_whale_modifiable: '0',
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
            slippage_modifiable: '0',
            trading_cooldown: '0',
            transfer_pausable: '0',
        };
        const tokenResult = tokenRet.result['0x71be2bb1a994447420915c4534cbf5d0305480a6'];
        for (const [key, value] of Object.entries(expectedValues)) {
            if (tokenResult[key] !== value) {
                isGem = false;
                break;
            }
        }
        if (isGem) {
            console.log("it's a gem");
        } else {
            console.log("it's not a gem");
        }
    }
    process.exit(0);
}

test();
