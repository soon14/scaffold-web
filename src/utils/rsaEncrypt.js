import JSEncrypt from 'jsencrypt/bin/jsencrypt'

//公钥(前端公钥加密)
const publicKey = 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCuUFaPqYNPYe7qmMJGnBlYcfbPXrVnBwlYO+ufvY8PtnLr' +
    'KZ5S42ZyfeJcAtoVX1n4REvEYUOpVsMFyQYpuQSQYBVeWNxVaWd4EZvNeF5fjbXE2kFyA7N21UlYNVJPy9GrAJ9oAnILhnnMnIxM' +
    'ZhKjdrxCVHUYqDZtnkfnmRzjwwIDAQAB';

//私钥(后端私钥解密)
const privateKey = 'MIICdgIBADANBgkqhkiG9w0BAQEFAASCAmAwggJcAgEAAoGBAK5QVo+pg09h7uqYwkacGVhx9s9etWcHCVg7' +
    '65+9jw+2cuspnlLjZnJ94lwC2hVfWfhES8RhQ6lWwwXJBim5BJBgFV5Y3FVpZ3gRm814Xl+NtcTaQXIDs3bVSVg1Uk/L0asAn2g' +
    'CcguGecycjExmEqN2vEJUdRioNm2eR+eZHOPDAgMBAAECgYBTBmLkVFn9wmiYhp/qH8mWrdlflf2TD+/sfcXRtOjiFAWSaqVFV5' +
    'hhKgJZzuXuzha9QFJSO/2NN4z2QXRVBRHdo/pEwujQ0a3tgnDP0gSmPEYJb6XYCqs7IhJVtsaFSsXJsI+tPwENjtEPU6ADQxYlf' +
    'JfnQNAoP1K66oot+TTyEQJBAOrN2xiA/LpBRTj70VMLl67CENA/ZUB19E/Wj6IVdKuICMDdiUObVj/SrKCg0Ulmrj9k9Buug9EG5' +
    '42zXEwV8tkCQQC+DJj3d9kHVrDQOWs1J++IT/opbKjcHLs4x6SWYpKZw0+cbX1b58Upqi7MSNoyGzPG5kti8V3StT33R1/+1nH7A' +
    'kA6b1zVblR3LgNCOTlRB5OKRHXWvdA/CJvyup0oY1qTzdkP1pJwptoCLDYWC6/KKqm20TMHKJlZjfRWiYqwzM2RAkBOAbW3vcWjM' +
    'X4Zube7dczn0owH/MXCszhVsfxojcVGv9gpiPdvhc5zr5rN1wlYj7nM5jIDRrcQCbyJhw5r93GJAkEA1F7jbZ+toX6tjyXYfHilu' +
    '14I/uaZZjOCb50ADoo5uGR2fp8X1/EKWkaVT20U6jZsbqn0qxiV+Hq3F0K9eoGZcA==';

//加密
export function encrypt(txt) {
    const encryptor = new JSEncrypt();
    encryptor.setPublicKey(publicKey);//设置公钥
    return encryptor.encrypt(txt);//返回加密后字符串
}

//解密
export function decrypt(txt) {
    const encryptor = new JSEncrypt();
    encryptor.setPrivateKey(privateKey);//设置私钥
    return encryptor.decrypt(txt);//返回解密后的字符串
}
