/**
 * https://juejin.im/post/5ddfa3def265da05ef59fe6e
 * 给定一个只包括 '('，')'的字符串，判断字符串是否有效。注：空字符串属于有效字符串
 * 示例 1:  输入: "(())"  输出: true
 * 实例 2： 输入: "())("  输出: false
 * 
 * @param {string} str
 * @return {boolean}
 */

//时间复杂度O(n),空间复杂度 O(n)
const isValid1 = function(str) {
    if(!str || str.length < 1) return true;
    const stack = [];// 空间复杂度 O(n)
    // push pop 栈=>FILO
    // push shift 栈=>FIFO
    for(const i in str) { //时间复杂度O(n)
        if(str[i] === '(') {
            stack.push(str[i]);
        } else {
            // 第一个是')'或者都匹配完成后下一个出现')'
            if(stack.length === 0) return false;
            stack.pop();
        }
    }
    return stack.length === 0;
};

//时间复杂度O(n),空间复杂度 O(1)
const isValid2 = function(str) {
    if(!str || str.length < 1) return true;
    let stack = 0;
    for(const i in str) { //时间复杂度O(n)
        if(str[i] === '(') {
            stack++;
        } else {
            if(stack === 0) return false;
            stack--;
        }
    }
    return stack === 0;
};

console.log(isValid1('(())'));// true
console.log(isValid1('())('));// false
console.log(isValid2('(())'));// true
console.log(isValid2('())('));// false
