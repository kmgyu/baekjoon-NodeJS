const INPUT = require("fs").readFileSync("input.txt").toString().trim().split("\r\n");
// /dev/stdin

function parse(a) {
  ans = '';
  for(bit in a) {
    if (a[bit]==1) ans+='7';
    else ans+='4';
  }
  return parseInt(ans);
}

function solution() {
  let num = parseInt(INPUT[0]);
  let zerofill = INPUT[0].length;
  // console.log(parse('0'.repeat(INPUT[0].length)), zerofill);
  if (parse('0'.repeat(INPUT[0].length)) > num) zerofill -= 1;
  let current = ''.padStart(zerofill, '0');

  while (parse(current) < num) {
    // console.log(current);
    if (parse((parseInt(current, 2) + 1).toString(2).padStart(zerofill, '0')) > num) break;
    current = parseInt(current, 2) + 1;
    current = current.toString(2).padStart(zerofill, '0');
  }

  return parse(current);
}

module.exports = solution;

console.log(module.exports());
