/**
 * @param {number[]} nums
 * @return {boolean}
 */
//贪心算法：每次都是跳最多次
var canJump = function (nums) {
  if (nums.length === 1) return true; //长度为1 直接就是终点
  let cover = nums[0]; //能覆盖的最远距离
  for (let i = 0; i <= cover; i++) {
    //当前覆盖距离cover和当前位置加能跳跃的距离中取一个较大者
    cover = Math.max(cover, nums[i] + i);
    //覆盖距离超过或等于nums.length - 1 说明能到达终点
    if (cover >= nums.length - 1) {
      return true;
    }
  }
  return false; //循环完成之后 还没返回true 就是不能达到终点
};
