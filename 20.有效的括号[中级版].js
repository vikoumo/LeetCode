/**
 * leetcode 20题
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

 * 有效字符串需满足：
 * 左括号必须用相同类型的右括号闭合。
 * 左括号必须以正确的顺序闭合。
 * 注意空字符串可被认为是有效字符串。

 * 示例 1: 输入: "()"     输出: true
 * 示例 2: 输入: "()[]{}" 输出: true
 * 示例 3: 输入: "(]"     输出: false
 * 示例 4: 输入: "([)]"   输出: false
 * 示例 5: 输入: "{[]}"   输出: true
 * 
 * @param {string} str
 * @return {boolean}
 */
const isValid = function(str) {
    if(!str || str.length < 1) return true;
    const map = {
        '{': '}',
        '[': ']',
        '(': ')',
    }
    const left = Object.keys(map);
    const right = Object.values(map);
    const stack = [];// 空间复杂度 O(n)
    for(const i in str) {//时间复杂度O(n)
        if(left.includes(str[i])) {
            stack.push(str[i]);
        } else {
            if(stack.length === 0) return false;
            if(right[left.indexOf(stack.pop())] !== str[i]) return false;
        }
    }
    return stack.length === 0;
};

console.log(isValid('()')) // true
console.log(isValid('()[]{}')) // true
console.log(isValid('(]')) // false
console.log(isValid('([)]')) // false
console.log(isValid('{[]}')) // true