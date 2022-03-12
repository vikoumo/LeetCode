/**
 * @param {string} s
 * @return {string}
 */

// 暴力算法
var longestPalindrome = function (s) {
  if (s.length === 1) return s;
  let res = '';
  for (let i = 0; i < s.length; i++) {
    for (let j = s.length - 1; j >= 0; j--) {
      if (i > j) break;
      if (s[i] === s[j]) {
        let str = s.slice(i, j + 1);
        if (str.length > res.length && ishuiwen(str)) {
          res = str;
        }
      }
    }
  }
  return res;
};
var ishuiwen = function (s) {
  return s === s.split('').reverse().join('');
}
console.log(longestPalindrome('aba'))

