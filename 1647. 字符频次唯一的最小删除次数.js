/**
 * @param {string} s
 * @return {number}
 */
var minDeletions = function (s) {
  const arr = s.split('');
  const map = {};
  arr.forEach((item) => {
    if (map[item]) {
      map[item]++;
    } else {
      map[item] = 1;
    }
  })
  const stack = Object.keys(map).sort((a, b) => a - b);
  let time = 0;

  
  return time;
};



console.log(minDeletions('aab'))