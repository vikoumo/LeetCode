/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function (pushed, popped) {
  const stack = [];
  while (pushed.length !== 0) {
    stack.push(pushed.shift())
    while (popped[0] === stack[stack.length - 1]) {
      if (stack.length === 0) break;
      stack.pop();
      popped.shift();
    }

  }
  return stack.length === 0;
};

// test
const pushed = [1, 2, 3, 4, 5], popped = [4, 5, 3, 2, 1];
validateStackSequences(pushed, popped);