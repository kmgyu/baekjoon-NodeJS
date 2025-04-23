const INPUT = require("fs").readFileSync("input.txt").toString().trim().split("\r\n");
// /dev/stdin

function solution() {
    // console.log(asdf)
    // 1059
    let N = parseInt(INPUT[0]);
    let task = [];
    let start, end;
    for(let i = 0; i<N; i++) {
        // console.log(INPUT[i+1]);
        [start, end] = INPUT[i+1].trim().split(" ");
        task.push([parseInt(start), parseInt(end)]);
        // [start, end] = INPUT[i+1];
    }
    task.sort(function(a, b) {
        if (a[1] != b[1]) return (a[1] - b[1]);
        return (a[0] - b[0]);
    })

    let time = 0;
    let count = 0;
    for(let t of task) {
        if (t[0] >= time) {
            count += 1;
            time = t[1];
        }
    }

    return count;
}

module.exports = solution;

console.log(module.exports());
