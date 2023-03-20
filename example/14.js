import {GoPlus, ErrorCode} from '../index.js';

async function test() {
    let app_key = '';
    let app_secret = '';
    let timeout = 30; // default timeout is 30s
    GoPlus.config(app_key, app_secret, 30);

    // token security
    let tokenRet = await GoPlus.tokenSecurity('1', ['0x4d224452801aced8b2f0aebe155379bb5d594381']);
    if (tokenRet.code != ErrorCode.SUCCESS) {
        console.error(tokenRet.message);
    } else {
        const tokenResult = tokenRet.result['0x4d224452801aced8b2f0aebe155379bb5d594381'];
        if (tokenResult.transfer_pausable === '0' && tokenResult.anti_whale_modifiable === '0' &&
        tokenResult.buy_tax <= '5' &&
        tokenResult.can_take_back_ownership === '0' &&
        tokenResult.cannot_buy === '0' &&
        tokenResult.is_in_dex === '0' &&
        tokenResult.cannot_sell_all === '0' &&
        tokenResult.creator_percent === '0.000000' &&
        tokenResult.external_call === '0' &&
        tokenResult.hidden_owner === '0' &&
        tokenResult.honeypot_with_same_creator === '0' &&
        tokenResult.is_anti_whale === '0' &&
        tokenResult.is_blacklisted === '0' &&
        tokenResult.is_honeypot === '0' &&
        tokenResult.is_mintable === '0' &&
        tokenResult.is_open_source === '1' &&
        tokenResult.is_proxy === '0' &&
        tokenResult.is_whitelisted === '0' &&
        tokenResult.owner_address === '' &&
        tokenResult.owner_balance === '0' &&
        tokenResult.owner_change_balance === '0' &&
        tokenResult.owner_percent === '0' &&
        tokenResult.personal_slippage_modifiable === '0' &&
        tokenResult.selfdestruct === '0' &&
        tokenResult.sell_tax <= '5' &&
        tokenResult.slippage_modifiable === '0' &&
        tokenResult.trading_cooldown === '0') {
            console.log('Token matches right result');
        } else {
            console.log('Token doesnt match right result');
        }
    }

    process.exit(0);
}

test();
