import { GoPlus, ErrorCode } from '../src';

test('Phishing Site', async () => {
  let data = await GoPlus.phishingSite('https://xn--cm-68s.cc/', 30);
  expect(data.code).toBe(ErrorCode.SUCCESS);
});
