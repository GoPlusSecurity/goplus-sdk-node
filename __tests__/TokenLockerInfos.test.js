import { GoPlus, ErrorCode } from '../src';

test('Solana Token Security', async () => {
  let chain_id = "8453"
  let token = "0x6fd0303649296360f10c07b24521deda9223086d";
  let pageNum = 1
  let pageSize = 100;
  let data = await GoPlus.getTokenLockerInfo(chain_id, token, pageNum, pageSize, 30);
  expect(data.code).toBe(ErrorCode.SUCCESS);
});
