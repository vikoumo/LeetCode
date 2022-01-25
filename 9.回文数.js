/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  return x.toString() === x.toString().split('').reverse().join('');
};

// test
isPalindrome(121)