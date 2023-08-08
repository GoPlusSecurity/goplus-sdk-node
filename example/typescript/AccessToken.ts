import { GoPlus, ErrorCode } from '@goplus/sdk-node';

async function test() {
  let appKey = 'xxxxxx';
  let appSecret = 'xxxxxx';
  let timeout = 30; // default timeout is 30s

  GoPlus.config(appKey, appSecret, timeout);

  let res = await GoPlus.getAccessToken();

  if (res.code !== ErrorCode.SUCCESS) {
    console.error(res.message);
  } else {
    console.log(res);
  }
}

test();
