import { GoPlus, ErrorCode } from '../src';

test('Solana Token Security', async () => {
  let address = "HZ1JovNiVvGrGNiiYvEozEVgZ58xaU3RKwX8eACQBCt3";
  let data = await GoPlus.solanaTokenSecurity([address], 30);
  expect(data.code).toBe(ErrorCode.SUCCESS);
  expect(data.result[address].closable.status).toBe('0');
  expect(data.result[address].balance_mutable_authority.status).toBe('0');
  expect(data.result[address].default_account_state).toBe('1');
});
