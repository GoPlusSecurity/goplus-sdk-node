import {GoPlus, ErrorCode} from '../index.js';

async function test() {
    let app_key = '';
    let app_secret = '';
    let timeout = 30; // default timeout is 30s
    GoPlus.config(app_key, app_secret, 30);

    // token security
    let tokenRet = await GoPlus.tokenSecurity('1', ['0xd04e772bc0d591fbd288f2e2a86afa3d3cb647f8']);
    if (tokenRet.code != ErrorCode.SUCCESS) {
        console.error(tokenRet.message);
    } else {
        const result = tokenRet.result['0xd04e772bc0d591fbd288f2e2a86afa3d3cb647f8'];
        if (
           
            result.anti_whale_modifiable === '0' &&
            result.buy_tax <= '5' &&
            result.can_take_back_ownership === '0' &&
            result.cannot_buy === '0' &&
            result.cannot_sell_all === '0' &&
            result.creator_percent === '0.000000' &&
            result.external_call === '0' &&
            result.hidden_owner === '0' &&
            result.honeypot_with_same_creator === '0' &&
            result.is_anti_whale === '0' &&
            result.is_blacklisted === '0' &&
            result.is_honeypot === '0' &&
            result.is_in_dex === '1' &&
            result.is_mintable === '0' &&
            result.is_open_source === '1' &&
            result.is_proxy === '0' &&
            result.is_whitelisted === '0' &&
            result.owner_address === '' &&
            result.owner_balance === '0' &&
            result.owner_change_balance === '0' &&
            result.owner_percent === '0' &&
            result.personal_slippage_modifiable === '0' &&
            result.selfdestruct === '0' &&
            result.sell_tax <= '5' &&
            result.slippage_modifiable === '0' &&
            result.trading_cooldown === '0' &&
            result.transfer_pausable === '0'
        ) {
            console.log("we have a gem");
        } else {
            console.log("not a gem");
        }
    }

    process.exit(0);
}

