import { GoPlus, ErrorCode } from '../src';

test('dApp Security', async () => {
  let data = await GoPlus.dappSecurity('https://for.tube', 30);
  expect(data.code).toBe(ErrorCode.SUCCESS);
});
