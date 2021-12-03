/**
 * https://leetcode-cn.com/problems/climbing-stairs/solution/yuan-lai-hui-pa-lou-ti-de-zheng-que-zi-s-pjez/
 * -leetcode 70题
 * 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
 * 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
 * 注意：给定 n 是一个正整数。

 * 示例 1： 输入： 2 输出： 2
 * 解释： 有两种方法可以爬到楼顶。
 * 1.  1 阶 + 1 阶
 * 2.  2 阶

 * 示例 2： 输入： 3 输出： 3
 * 解释： 有三种方法可以爬到楼顶。
 * 1.  1 阶 + 1 阶 + 1 阶
 * 2.  1 阶 + 2 阶
 * 3.  2 阶 + 1 阶
*/

// 斐波那契数列: f(n + 1) = f(n) + f(n - 1)
// f(n) = f(n-1) + f(n - 2)
// 有n阶台阶那么就是 n - 1 阶台阶和 n - 2 阶台阶爬上楼顶的方法的和

// 时间的复杂度为O(n^2)
// 性能很不好，浏览器基本上较大的数值会卡住了
// function climbStairs(n) {
//     if(n<=3){
//         return n;
//     }else {
//         return climbStairs(n-1) + climbStairs(n-2);
//     }
// };
// console.log(climbStairs(10));

// 递归优化 => 数组记忆 => 空间压缩 => 遍历相加
//时间的复杂度为O(n),空间复杂度为O(1)
function climbStairs(n) {
    if (n <= 2) return n;
    let a = 2, b = 1, res, idx;
    for (idx = 3; idx <=n; idx++) {
        res = a + b;
        b = a;
        a = res;
    }
    return res;
}
console.log(climbStairs(10));// 89

// 大数优化，如果n=1000，就会取模。浏览器二进制的原因，数值就不准确了如果题目有说明可以取模
/**
 * 
 * 一只青蛙一次可以跳上1级台阶，也可以跳上2级台阶。求该青蛙跳上一个 n 级的台阶总共有多少种跳法。
 * 答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008。
 * 0 <= n <= 100
 */
function numWay(n) {
    if (n <= 2) return n;
    let a = 2, b = 1, res, idx;
    for (idx = 3; idx <= n; idx++) {
        res = (a + b) % 1000000007;
        b = a;
        a = res;
    }
    return res;
}
console.log(climbStairs(100));// 573147844013817200000
console.log(numWay(100));// 782204094