import { GoPlus, ErrorCode } from '@goplus/sdk-node';

async function test() {
  let res = await GoPlus.phishingSite('https://xn--cm-68s.cc/', 30);
  if (res.code != ErrorCode.SUCCESS) {
    console.error(res.message);
  } else {
    console.log(res.result);
  }
}

test();
