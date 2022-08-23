import JSEncrypt from 'jsencrypt/bin/jsencrypt'

//公钥(前端公钥加密)
const publicKey = 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCG9IQIBDFiXdvmtYXu2dKxwAJJzc9j288986Ek3nDqn6DaoRxFs27A+LFaOsctRapVGrusFng1eyCJLvRdd917kH4kvepnBPRM/1bqr+jv5tXHjXhc/Zdhegaf/eF44FdP1fwd0Job83TBadwFjG4SdS6hJJ1OW/pFSvuoQxXhTwIDAQAB';

//私钥(后端私钥解密)
const privateKey = 'MIICdgIBADANBgkqhkiG9w0BAQEFAASCAmAwggJcAgEAAoGBAIb0hAgEMWJd2+a1he7Z0rHAAknNz2Pbzz3zoSTecOqfoNqhHEWzbsD4sVo6xy1FqlUau6wWeDV7IIku9F133XuQfiS96mcE9Ez/Vuqv6O/m1ceNeFz9l2F6Bp/94XjgV0/V/B3QmhvzdMFp3AWMbhJ1LqEknU5b+kVK+6hDFeFPAgMBAAECgYBFI/CgysUiSEPpJwa/IAm5101U0oR1/J9odfERGoVvLukSGYiKjSso4kC6oXJ51z806sVLnRdpDvPUVKINYOOvMARVC8bL7KzG/AiCP057R+fRv5nA6VclRV9RvAs56pfYMwCTX/PlXADkBXzi8kC6pFSvzrz3y1RD1QBe17SqAQJBAOSW5fA38vUqBB2wOA5smECjLwwfmZ8vZjZOlhglVEcyXZreI4m4E7crAu3j4AI29M72j3nAzNZokDD5Rthzpi8CQQCXI0mo8r7Q9YC/YBPcGOY1g7Utgvfsdx58WWE3zDNQm1FshJXQAeR+HbRuqk//6NIZBL1n6ZH9B387hmhO+c7hAkEAmATCZj7PFLwcgKHwpacSmensH+PkBjk/gF5C80vgAHk+Rv/0ImKIugegqxQgpVhm9jyCrjXKA80GF4uv0cMXgQJAEo67qan8sg2i/Fygs6K/CY0dfvQY2wkZTi1vWXmSR3B6w/dXqc3Br5aYJAp3fjWpLnc9hnfQfCAiiD2NqzzTIQJALAEVk2OlhwftnzTJPlLrPuWi4uonwemLGHZklQD6GmSIyyUTmnPlT+IMnFLP9CXR1V9xLc6Mpu9qkDSxoLAYTg==';

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
