import { GoPlus, ErrorCode } from '@goplus/sdk-node';

async function test() {
  let chainId = '1';
  let address = '0x0785ab399Ae207cE2c7A3eAC18eda16177fAD588';
  let res = await GoPlus.rugpullDetection(chainId, address, 30);
  if (res.code != ErrorCode.SUCCESS && res.code != ErrorCode.DATA_PENDING_SYNC) {
    console.error(res.message);
  } else {
    console.log(res.result);
  }
}

test();
