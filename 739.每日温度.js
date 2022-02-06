var dailyTemperatures = function (temperatures) {
  const res = [];
  for (let i = 0; i < temperatures.length; i++) {
    if (i === temperatures.length - 1) res.push(0);
    for (let j = i + 1; j < temperatures.length; j++) {
      if (temperatures[i] < temperatures[j]) {
        res.push(j - i)
        break;
      } else if (j === temperatures.length - 1) {
        res.push(0)
      }
    }
  }
  return res;
};

// test
const arr = [73, 74, 75, 71, 69, 72, 76, 73]
dailyTemperatures(arr)