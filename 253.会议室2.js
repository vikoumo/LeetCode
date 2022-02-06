// 贪心算法
var minMeetingRooms = function (intervals) {
  let room = 0;
  intervals.sort((a, b) => a[0] - b[0])
  console.log(intervals.toString())
  while (intervals.length) {
    let roomStart = intervals[0][0]
    let roomEnd = intervals[0][1];
    intervals.shift();
    for (let i = 0; i < intervals.length; i++) {
      if (intervals[i][0] >= roomEnd || intervals[i][1] <= roomStart) {
        roomStart = Math.min(roomStart, intervals[i][0]);
        roomEnd = Math.max(roomEnd, intervals[i][1]);
        intervals.splice(i, 1);
        i--;
      }
    }
    room++;
  }
  return room;
};

console.log(minMeetingRooms([[20, 45], [12, 13], [2, 50], [14, 20], [3, 5]]))