import { GoPlus, ErrorCode } from '../src';

test('ERC1155 Approval Security', async () => {
  let data = await GoPlus.erc1155ApprovalSecurity('56', '0xb0dccbb9c4a65a94a41a0165aaea79c8b2fc54ce', 30);
  expect(data.code).toBe(ErrorCode.SUCCESS);
});
