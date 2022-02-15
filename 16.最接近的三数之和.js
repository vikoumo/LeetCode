/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 双指针
var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b);
  let min = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    let left = i + 1;
    let right = nums.length - 1;
    
    while (right > left) {
      let sum = nums[i] + nums[left] + nums[right];
      if (Math.abs(sum - target) < Math.abs(min - target)) {
        min = sum;
      }
      if (sum > target) {
        right--;
      } else if (sum < target) {
        left++;
      } else {
        return sum;
      }
    }
  }
  return min;
};
console.log(threeSumClosest([-1, 2, 1, -4], 1))