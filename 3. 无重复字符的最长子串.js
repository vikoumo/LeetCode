/**
 * @param {string} s
 * @return {number}
 */
// 暴力算法+哈希表
var lengthOfLongestSubstring = function (s) {
  if (s.length <= 1) return s.length;
  let max = 1;
  for (let i = 0; i < s.length; i++) {
    let cache = [s[i]];
    for (let j = i + 1; j < s.length; j++) {
      if (s[i] !== s[j] && !cache.includes(s[j])) {
        cache.push(s[j]);
        max = Math.max(max, j - i + 1);
      } else {
        break;
      }
    }
  }
  return max;
};

// 双指针+滑动窗口
var lengthOfLongestSubstring = function (s) {
  let max = 0;
  let cache = new Set();
  let left = 0, right = 0;
  while (right < s.length) {
    if (!cache.has(s[right])) {
      cache.add(s[right]);
      max = Math.max(max, right - left + 1)
      right++;
    } else {
      cache.delete(s[left]);
      left++;
    }
  }

  return max;
};

console.log(lengthOfLongestSubstring('abcabcbb'))