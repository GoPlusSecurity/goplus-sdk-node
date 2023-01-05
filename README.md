# GoPlus API SDK for nodejs

### Installation

```
npm install goplus-sdk-js
```

### Description


1.After the getAccessToken method is executed, the accessToken will be passed in for each function by default. When receiving error code 4022, you need to call getAccessToken again
2.GoPlus.config can set the global request timeout. And each function can set its timeout by passed in the last parameter.

### Get AccessToken
```javascript
import {GoPlus} from './index.js';

let app_key = "";
let app_secret = "";
let timeout = 30; // set global request timeout
GoPlus.config(app_key, app_secret, timeout);
let ret = await GoPlus.getAccessToken();

if (ret.code != 1) {
    console.error(ret.message);
} else {
    console.log(ret.result);
}
```

### Get Supported Blockchains

```javascript
let ret = await GoPlus.supportedChains(GoPlus.API_NAMES.address_security);


if (ret.code != 1) {
    console.error(ret.message);
} else {
    console.log(ret.result);
}

```

### Token Security

```javascript

// It will only return 1 result for the 1st token address if not called getAccessToken before
let ret = await GoPlus.tokenSecurity('1', ['0x408e41876cccdc0f92210600ef50372656052a38']);
if (ret.code != 1) {
    console.error(ret.message);
} else {
    console.log(ret.result['0x408e41876cccdc0f92210600ef50372656052a38']);
}

```

### Address Security

```javascript

let ret = await GoPlus.addressSecurity('1', '0x408e41876cccdc0f92210600ef50372656052a38');

if (ret.code != 1) {
    console.error(ret.message);
} else {
    console.log(ret.result);
}
```


### Approval Security API
```javascript

let ret = await GoPlus.approvalSecurity('1', '0x408e41876cccdc0f92210600ef50372656052a38');

if (ret.code != 1) {
    console.error(ret.message);
} else {
    console.log(ret.result);
}
```


### ERC20 Approval Security

```javascript

let ret = await GoPlus.erc20ApprovalSecurity('56', '0xd018e2b543a2669410537f96293590138cacedf3');

if (ret.code != 1) {
    console.error(ret.message);
} else {
    console.log(ret.result);
}
```

#### ERC721 Approval Security

```javascript
let ret = await GoPlus.erc721ApprovalSecurity('1', '0xd95dbdab08a9fed2d71ac9c3028aac40905d8cf3');

if (ret.code != 1) {
    console.error(ret.message);
} else {
    console.log(ret.result);
}
```

#### ERC1155 Approval Security

```javascript

let ret = await GoPlus.erc1155ApprovalSecurity('56', '0xb0dccbb9c4a65a94a41a0165aaea79c8b2fc54ce');

if (ret.code != 1) {
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

if (ret.code != 1) {
    console.error(ret.message);
} else {
    console.log(ret.result);
}
```
### NFT Security
```javascript

let ret = await GoPlus.nftSecurity('1', '0x11450058d796b02eb53e65374be59cff65d3fe7f');

if (ret.code != 1) {
    console.error(ret.message);
} else {
    console.log(ret.result);
}
```

### dApp Security Info API
```javascript
let ret = await GoPlus.dappSecurity('https://for.tube');

if (ret.code != 1) {
    console.error(ret.message);
} else {
    console.log(ret.result);
}
```

### Phishing Site Detection API
```javascript
let ret = await GoPlus.phishingSite('https://xn--cm-68s.cc/');

if (ret.code != 1) {
    console.error(ret.message);
} else {
    console.log(ret.result);
}
	
```