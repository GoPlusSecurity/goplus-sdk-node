import { GoPlus, ErrorCode } from '@goplus/sdk-node';

async function test() {
  let res = await GoPlus.dappSecurity('https://for.tube', 30);
  if (res.code !== ErrorCode.SUCCESS) {
    console.error(res.message);
  } else {
    console.log(res);
  }
}

test();
