/**
 * https://juejin.im/post/5ddfa3def265da05ef59fe6e
 * -leetcode 32题
 * 给定一个只包含 '(' 和 ')' 的字符串，找出最长的包含有效括号的子串的长度。
 * 示例 1: 输入: "(()" 输出: 2 解释: 最长有效括号子串为 "()"
 * 示例 2: 输入: ")()())" 输出: 4 解释: 最长有效括号子串为 "()()"
 * @param {string}
 * @return {number}
 */

//时间复杂度O(n),空间复杂度 O(n)
// 利用下标相减的长度
// 动态规划
const longestValidParentheses1 = function(str) {
    let max = 0;
    let stack = [-1];
    if(str.length < 2) return max;
    for(let i = 0; i < str.length; i++) {//时间复杂度O(n)
        if(str[i] === '(') {
            stack.push(i);
        } else {
            stack.pop();
            if (stack.length === 0) {
                stack.push(i);
            } else {
                max = Math.max(max, i - stack[stack.length - 1]);
            }
        }
    }
    return max;
};

// 时间复杂度O(n),空间复杂度 O(1)
// 利用左右括号个数相等
const longestValidParentheses2 = function(str) {
    let max = right = left = 0;
    if(str.length < 2) return max;
    // 从左到右
    for(let i = 0; i < str.length; i++) {//时间复杂度O(n)
        if(str[i] === '(') {
            left++;
        } else {
            right++;
        }
        if(left === right) {
            max = Math.max(max, 2 * right);
        } else if(right > left) {
            left = right = 0;
        }
    }
    left = right = 0;
    // 从右到左
    for(let i = str.length - 1; i >= 0; i--) {//时间复杂度O(n)
        if(str[i] === '(') {
            left++;
        } else {
            right++;
        }
        if(left === right) {
            max = Math.max(max, 2 * right);
        } else if(left > right) {
            left = right = 0;
        }
    }
    return max;
};

console.log(longestValidParentheses1('(()')); // 2
console.log(longestValidParentheses1(')()(')); // 2
console.log(longestValidParentheses1(')()())'));// 4
console.log(longestValidParentheses1('()()(')); // 4
console.log(longestValidParentheses1('()(()()')); // 4
console.log(longestValidParentheses1('()(()())')); // 8


console.log(longestValidParentheses2('(()')); // 2
console.log(longestValidParentheses2(')()(')); // 2
console.log(longestValidParentheses2(')()())'));// 4
console.log(longestValidParentheses2('()()(')); // 4
console.log(longestValidParentheses2('()(()()')); // 4
console.log(longestValidParentheses2('()(()())')); // 8