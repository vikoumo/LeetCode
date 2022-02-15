/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  // 最左侧值为定值，右侧所有值进行两边推进计算
  let res = [];
  if (nums.length < 3) return res;
  nums.sort((a, b) => a - b); // 排序
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) break; // 如果当前数字大于0，则三数之和一定大于0，所以结束循环
    if (nums[i] === nums[i - 1]) continue;// 重复值跳过
    let first = i + 1;
    let last = nums.length - 1;
    while (last > first) {
      let sum = nums[i] + nums[first] + nums[last];
      if (sum > 0) {
        while (nums[last] === nums[last - 1]) last--;
        last--;
      } else if (sum < 0) {
        while (nums[first] === nums[first + 1]) first++;
        first++;
      } else {
        res.push([nums[i], nums[first], nums[last]])
        while (nums[last] === nums[last - 1]) last--;// 重复值跳过
        last--;
        while (nums[first] === nums[first + 1]) first++;// 重复值跳过
        first++;
      }
    }
  }
  return res;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]))