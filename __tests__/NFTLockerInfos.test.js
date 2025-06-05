import { GoPlus, ErrorCode } from '../src';

test('Solana Token Security', async () => {
  let chain_id = "56"
  let pool = "0x579df956c6cE6178fBBD78bbE4f05786cFBA9B76";
  let pageNum = 1
  let pageSize = 100;
  let data = await GoPlus.getNFTLockerInfo(chain_id, pool, pageNum, pageSize, 30);
  expect(data.code).toBe(ErrorCode.SUCCESS);
});
