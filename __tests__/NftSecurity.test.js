import { GoPlus, ErrorCode } from '../src';

test('NFT Security', async () => {
  let data = await GoPlus.nftSecurity('1', '0x60e4d786628fea6478f785a6d7e704777c86a7c6', '25218', 30);
  expect([ErrorCode.SUCCESS, ErrorCode.DATA_PENDING_SYNC]).toContain(data.code);
});
