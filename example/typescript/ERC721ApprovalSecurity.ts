import { GoPlus, ErrorCode } from '@goplus/sdk-node';

async function test() {
  let res = await GoPlus.erc721ApprovalSecurity('1', '0xd95dbdab08a9fed2d71ac9c3028aac40905d8cf3', 30);

  if (res.code !== ErrorCode.SUCCESS) {
    console.error(res.message);
  } else {
    console.log(res);
  }
}

test();
