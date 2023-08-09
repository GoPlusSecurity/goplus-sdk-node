import { GoPlus, ErrorCode } from '../src';

test('Supported Chain', async () => {
  let data = await GoPlus.supportedChains(GoPlus.API_NAMES.address_security);
  expect(data.code).toBe(ErrorCode.SUCCESS);
});
