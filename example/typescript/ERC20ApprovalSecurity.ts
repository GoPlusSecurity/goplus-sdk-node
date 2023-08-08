import { GoPlus, ErrorCode } from '@goplus/sdk-node';

async function test() {
  let res = await GoPlus.erc20ApprovalSecurity('56', '0xd018e2b543a2669410537f96293590138cacedf3', 30);

  if (res.code !== ErrorCode.SUCCESS) {
    console.error(res.message);
  } else {
    console.log(res);
  }
}

test();
