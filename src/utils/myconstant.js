export const CONTRACT_ADDRESS= '0x700AF0faD562e130dD2F4301aA11509789261443'
export const YOUR_API_KEY_PINATA="9aa1b79bee1371c026bf"
export const YOUR_API_SECRET_PINATA="5e7745dcd32d4610efc64d42ce5877e482d5ac119d9dbd44144c6b28c19c5a4e"

export const BASE_MINT_URL = "https://gateway.pinata.cloud/ipfs/QmPYGbu3adKcGekD47tNeEUXwZThtE6bqr1UcTNxxR5c9F"

 export function preserveReplaceLast(string) {
    if (string.length <= 6) {
      return string + '.'.repeat(6 - string.length);
    } else {
      var preserved = string.slice(0, 6);
      var replaced = '.'.repeat(5);
      var lastSix = string.slice(-6);
      return preserved + replaced + lastSix;
    }
  }