import { GoPlus, ErrorCode } from '../src';

test('Token Security', async () => {
  let data = await GoPlus.tokenSecurity('1', ['0x408e41876cccdc0f92210600ef50372656052a38'], 30);
  expect(data.code).toBe(ErrorCode.SUCCESS);
});
