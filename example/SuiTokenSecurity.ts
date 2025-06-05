import { GoPlus, ErrorCode } from '@goplus/sdk-node';

async function test() {
  let address = "0x40402a987c2f8a71b755561bfbd16c2cbb991e27e609ad148809491c32bacab9::kui::KUI";
  let res = await GoPlus.suiTokenSecurity([address], 30);
  if (res.code != ErrorCode.SUCCESS) {
    console.error(res.message);
  } else {
    console.log(res.result[address]);
  }
}

test();
