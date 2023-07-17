/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  nums.sort((a, b) => b - a);
  console.log(nums);
  return nums[k - 1]
};

// console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2))

function insertSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let j, temp = arr[i];
    for (j = i; j > 0 && arr[j - 1] > temp; j--) {
      arr[j] = arr[j - 1];
    }
    arr[j] = temp;
  }
  return arr
}
console.log(insertSort([4,8,3,2,9]))