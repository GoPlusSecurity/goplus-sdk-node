import { GoPlus, ErrorCode } from '../src';

test('Solana Token Security', async () => {
  let data = await GoPlus.solanaTokenSecurity(["HZ1JovNiVvGrGNiiYvEozEVgZ58xaU3RKwX8eACQBCt3"], 30);
  expect(data.code).toBe(ErrorCode.SUCCESS);
});
