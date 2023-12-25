import { GoPlus, ErrorCode } from '../src';

test('Token Security', async () => {
  let data = await GoPlus.tokenSecurity('1', ['0x408e41876cccdc0f92210600ef50372656052a38'], 30);
  expect(data.code).toBe(ErrorCode.SUCCESS);
});

test('Fake Token', async () => {
  let data = await GoPlus.tokenSecurity('1', ['0xddaa4d542d699c63437b4950bd058e4601d80303'], 30);
  expect(data.result['0xddaa4d542d699c63437b4950bd058e4601d80303'].fake_token.value).toBe(1);
});

test('UniswapV3 lp_holders', async () => {
  let data = await GoPlus.tokenSecurity('1', ['0x4bf9f81efed4163b184568b296674dad0ae51420'], 30);
  expect(data.result['0x4bf9f81efed4163b184568b296674dad0ae51420'].lp_holders[0]).toHaveProperty("NFT_list");
});

