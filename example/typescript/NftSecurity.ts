import { GoPlus, ErrorCode } from '@goplus/sdk-node';

async function test() {
  let res = await GoPlus.nftSecurity('1', '0x60e4d786628fea6478f785a6d7e704777c86a7c6', '25218', 30);
  if (res.code != ErrorCode.SUCCESS && res.code != ErrorCode.DATA_PENDING_SYNC) {
    console.error(res.message);
  } else {
    console.log(res.result);
  }
}

test();
