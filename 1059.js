const INPUT = require("fs").readFileSync("input.txt").toString().trim().split("\r\n");
// /dev/stdin

function solution() {
  const size = parseInt(INPUT[0])
  // Map
  // https://programming4myself.tistory.com/41
  const nums = INPUT[1].split(" ").map(Number)
  const n = parseInt(INPUT[2])

  // sorting in js
  // https://hianna.tistory.com/409
  // https://www.daleseo.com/js-sort-to-sorted/
  // https://philographer.github.io/development/objectArraySortByKey/
  // nums.prototype.sort()
  nums.sort(function(a, b) {
    return a - b;
  })
  
  let left = 0
  let right = 0
  for (let i = 0; i<size+1; i++) {
    if(nums[i] < n) left = nums[i]
    else if(nums[i] > n) right = nums[i]
    else return 0
    if (left < n < right) break
  }
  left = n-left
  right = right-n
  let answer = (left * right) - 1;
  return answer;
}

module.exports = solution;

console.log(module.exports());
