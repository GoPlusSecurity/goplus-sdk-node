import { GoPlus, ErrorCode } from '../src';

test('ERC721 Approval Security', async () => {
  let data = await GoPlus.erc721ApprovalSecurity('1', '0xd95dbdab08a9fed2d71ac9c3028aac40905d8cf3', 30);
  expect(data.code).toBe(ErrorCode.SUCCESS);
});
