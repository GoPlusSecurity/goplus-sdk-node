import { GoPlus, ErrorCode } from '@goplus/sdk-node';

async function test() {
  let res = await GoPlus.approvalSecurity('1', '0x408e41876cccdc0f92210600ef50372656052a38', 30);
  if (res.code !== ErrorCode.SUCCESS && res.code !== ErrorCode.DATA_PENDING_SYNC) {
    console.error(res.message);
  } else {
    console.log(res.result);
  }
}

test();
