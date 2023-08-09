import { GoPlus, ErrorCode } from '@goplus/sdk-node';

async function test() {
  let res = await GoPlus.supportedChains(GoPlus.API_NAMES.address_security, 30);

  if (res.code !== ErrorCode.SUCCESS) {
    console.error(res.message);
  } else {
    console.log(res);
  }
}

test();
