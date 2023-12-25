import { GoPlus, ErrorCode } from '@goplus/sdk-node';

async function test() {
  let res = await GoPlus.tokenSecurity('1', ['0x408e41876cccdc0f92210600ef50372656052a38'], 30);
  if (res.code != ErrorCode.SUCCESS) {
    console.error(res.message);
  } else {
    console.log(res.result['0x408e41876cccdc0f92210600ef50372656052a38']);
  }

  // test fake_token
  let res1 = await GoPlus.tokenSecurity('1', ['0xddaa4d542d699c63437b4950bd058e4601d80303'], 30);
  if (res1.code != ErrorCode.SUCCESS) {
    console.error(res1.message);
  } else {
    console.log(res1.result['0xddaa4d542d699c63437b4950bd058e4601d80303'].fake_token);
  }

  // test uniswapV3 lp_holders
  let res2 = await GoPlus.tokenSecurity('1', ['0x4bf9f81efed4163b184568b296674dad0ae51420'], 30);
  if (res2.code != ErrorCode.SUCCESS) {
    console.error(res2.message);
  } else {
    console.log(res2.result['0x4bf9f81efed4163b184568b296674dad0ae51420'].lp_holders);
  }

}

test();
