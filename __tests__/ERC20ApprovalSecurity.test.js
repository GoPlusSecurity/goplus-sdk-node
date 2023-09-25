import { GoPlus, ErrorCode } from '../src';

test('ERC20 Approval Security', async () => {
  let data = await GoPlus.erc20ApprovalSecurity('56', '0xd018e2b543a2669410537f96293590138cacedf3', 30);
  expect([ErrorCode.SUCCESS, ErrorCode.DATA_PENDING_SYNC]).toContain(data.code);
});
