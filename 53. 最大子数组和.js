/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let preMax = nums[0], res = nums[0];
  for (let i = 1; i < nums.length; i++) {
    // 以i位置结尾的最大数（两种情况：一个加起来大，继续加下去。一个当前位置的大，断开前面加的数）
    preMax = Math.max(preMax + nums[i], nums[i]);
    res = Math.max(res, preMax)
  }
  return res;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))