# GoPlus API SDK for nodejs

### Installation

```
npm install goplus-sdk-js
```

### Description

1.After the getAccessToken method is executed, the accessToken will be passed in for each function by default. When receiving error code 4022, you need to call getAccessToken again.  
2.GoPlus.config can set the global request timeout. And each function can set its timeout by passed in the last parameter.  
3.GoPlus.approvalSecurity、 GoPlus.nftSecurity and GoPlus.rugpullDetection may return error code 2, it means partial data obtained, the complete data can be requested again in about 15 seconds.

### Get AccessToken
```javascript
import { GoPlus, ErrorCode } from 'goplus-sdk-js';

let app_key = "";
let app_secret = "";
let timeout = 30; // set global request timeout
GoPlus.config(app_key, app_secret, timeout);
let ret = await GoPlus.getAccessToken();

if (ret.code != ErrorCode.SUCCESS) {
    console.error(ret.message);
} else {
    console.log(ret.result);
}
```

### Get Supported Blockchains

```javascript
let api_name = GoPlus.API_NAMES.address_security;
let ret = await GoPlus.supportedChains(api_name);

if (ret.code != ErrorCode.SUCCESS) {
    console.error(ret.message);
} else {
    console.log(ret.result);
}

```

### Token Security

```javascript
let chainId = '1';
let addresses = ['0x408e41876cccdc0f92210600ef50372656052a38'];
// It will only return 1 result for the 1st token address if not called getAccessToken before
let ret = await GoPlus.tokenSecurity(chainId, addresses);

if (ret.code != ErrorCode.SUCCESS) {
    console.error(ret.message);
} else {
    console.log(ret.result['0x408e41876cccdc0f92210600ef50372656052a38']);
}

```

### Address Security

```javascript
let chainId = '1';
let address = '0x408e41876cccdc0f92210600ef50372656052a38';
let ret = await GoPlus.addressSecurity(chainId, address);

if (ret.code != ErrorCode.SUCCESS) {
    console.error(ret.message);
} else {
    console.log(ret.result);
}
```


### Approval Security API

```javascript
let chainId = '1';
let address = '0x408e41876cccdc0f92210600ef50372656052a38';
let ret = await GoPlus.approvalSecurity(chainId, address);

if (ret.code != ErrorCode.SUCCESS  && ret.code != ErrorCode.DATA_PENDING_SYNC) {
    console.error(ret.message);
} else {
    console.log(ret.result);
}
```


### ERC20 Approval Security

```javascript
let chainId = '56';
let address = '0xd018e2b543a2669410537f96293590138cacedf3';
let ret = await GoPlus.erc20ApprovalSecurity(chainId, address);

if (ret.code != ErrorCode.SUCCESS) {
    console.error(ret.message);
} else {
    console.log(ret.result);
}
```

#### ERC721 Approval Security

```javascript
let chainId = '56';
let address = '0xd018e2b543a2669410537f96293590138cacedf3';
let ret = await GoPlus.erc721ApprovalSecurity(chainId, address);

if (ret.code != ErrorCode.SUCCESS) {
    console.error(ret.message);
} else {
    console.log(ret.result);
}
```

#### ERC1155 Approval Security

```javascript

let ret = await GoPlus.erc1155ApprovalSecurity('56', '0xb0dccbb9c4a65a94a41a0165aaea79c8b2fc54ce');

if (ret.code != ErrorCode.SUCCESS) {
    console.error(ret.message);
} else {
    console.log(ret.result);
}
```

### Signature Data Decode

```javascript
let chainId = '1';
let contract = '0x4cc8aa0c6ffbe18534584da9b592aa438733ee66';
let data = '0xa0712d680000000000000000000000000000000000000000000000000000000062fee481';
let ret = await GoPlus.inputDecode(chainId, contract, data);

if (ret.code != ErrorCode.SUCCESS) {
    console.error(ret.message);
} else {
    console.log(ret.result);
}
// let signer = '0x0000000000000000000000000000000000000000'; // Optional param
// let decodeRet = await GoPlus.inputDecodeWithOpts(chainId, contract_address, data, {signer});
```
### NFT Security

```javascript
let chainId = '1';
let address = '0x11450058d796b02eb53e65374be59cff65d3fe7f';
let ret = await GoPlus.nftSecurity(chainId, address);

if (ret.code != ErrorCode.SUCCESS && ret.code != ErrorCode.DATA_PENDING_SYNC) {
    console.error(ret.message);
} else {
    console.log(ret.result);
}
```

### dApp Security Info API

```javascript
let dAppUrl = 'https://for.tube';
let ret = await GoPlus.dappSecurity(dAppUrl);

if (ret.code != ErrorCode.SUCCESS) {
    console.error(ret.message);
} else {
    console.log(ret.result);
}
```

### Phishing Site Detection API

```javascript
let site = 'https://xn--cm-68s.cc/';
let ret = await GoPlus.phishingSite(site);

if (ret.code != ErrorCode.SUCCESS) {
    console.error(ret.message);
} else {
    console.log(ret.result);
}
	
```

### Rugpull Detection

```javascript
let chainId = '1';
let address = '0x0785ab399Ae207cE2c7A3eAC18eda16177fAD588';
let rugpullRet = await GoPlus.rugpullDetection(chainId, address);

if (rugpullRet.code != ErrorCode.SUCCESS&& ret.code != ErrorCode.DATA_PENDING_SYNC) {
    console.error(rugpullRet.message);
} else {
    console.log(rugpullRet.result);
}
```