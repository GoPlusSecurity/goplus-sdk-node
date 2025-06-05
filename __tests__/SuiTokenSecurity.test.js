import { GoPlus, ErrorCode } from '../src';

test('Solana Token Security', async () => {
  let address = "0x40402a987c2f8a71b755561bfbd16c2cbb991e27e609ad148809491c32bacab9::kui::KUI";
  let data = await GoPlus.suiTokenSecurity([address], 30);
  expect(data.code).toBe(ErrorCode.SUCCESS);
  expect(data.result[address].blacklist.value).toBe('1');
  expect(data.result[address].mintable.value).toBe('1');
});
