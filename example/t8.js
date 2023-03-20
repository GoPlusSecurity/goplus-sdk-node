import {GoPlus, ErrorCode} from '../index.js';

async function test() {
  let app_key = '';
  let app_secret = '';
  let timeout = 30; // default timeout is 30s
  GoPlus.config(app_key, app_secret, 30);

  let variables = {
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

  // Token security
  let tokenRet = await GoPlus.tokenSecurity('1', ['0x718eb6523592d91403bd2c6a1efa10cdabab0826']);
  if (tokenRet.code != ErrorCode.SUCCESS) {
    console.error(tokenRet.message);
  } else {
    let isGem = true;
    for (let variable in variables) {
      if (variable in tokenRet.result['0x718eb6523592d91403bd2c6a1efa10cdabab0826']) {
        if (variable === 'buy_tax' || variable === 'sell_tax') {
          if (Number(tokenRet.result['0x718eb6523592d91403bd2c6a1efa10cdabab0826'][variable]) > 5) {
            isGem = false;
            break;
          }
        } else {
          if (tokenRet.result['0x718eb6523592d91403bd2c6a1efa10cdabab0826'][variable] !== variables[variable]) {
            isGem = false;
            break;
          }
        }
      }
    }
    if (isGem) {
      console.log("It's a gem!");
    } else {
      console.log("Not a gem");
    }
  }

  process.exit(0);
}

test();
