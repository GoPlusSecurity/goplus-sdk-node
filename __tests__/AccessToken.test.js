import { GoPlus, ErrorCode } from '../src';

test('Get Access Token', async () => {
  let appKey = 'test';
  let appSecret = 'test';
  let timeout = 30;
  GoPlus.config(appKey, appSecret, timeout);

  let data = await GoPlus.getAccessToken();
  expect(data.code).toBe(ErrorCode.APP_KEY_NOT_EXIST);
});
