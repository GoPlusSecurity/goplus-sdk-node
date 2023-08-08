import { GoPlus, ErrorCode } from '../src';

test('Rug-pull Detection', async () => {
  let chainId = '1';
  let address = '0x0785ab399Ae207cE2c7A3eAC18eda16177fAD588';
  let data = await GoPlus.rugpullDetection(chainId, address, 30);
  expect([ErrorCode.SUCCESS, ErrorCode.DATA_PENDING_SYNC]).toContain(data.code);
});
