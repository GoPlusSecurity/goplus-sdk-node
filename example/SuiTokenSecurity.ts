import { GoPlus, ErrorCode } from '@goplus/sdk-node';

async function test() {
  let address = "HZ1JovNiVvGrGNiiYvEozEVgZ58xaU3RKwX8eACQBCt3";
  let res = await GoPlus.solanaTokenSecurity([address], 30);
  if (res.code != ErrorCode.SUCCESS) {
    console.error(res.message);
  } else {
    console.log(res.result[address]);
  }
}

test();
