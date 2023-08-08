export const CONTRACT_ADDRESS= '0xc55e54e8c89657cF1d249fBCDBE0e28532Be5ec7'

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