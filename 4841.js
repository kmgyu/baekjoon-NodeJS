// 아래와 같은 코드 권장됨.
// const fs = require('fs');
// const [A, B] = fs.readFileSync(0, 'utf-8').trim().split(' ').map(Number);

const INPUT = require("fs").readFileSync("input.txt").toString().trim().split("\r\n");
// /dev/stdin
// const INPUT = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
function solution() {
    N = INPUT[0]
    for (let i=1; i<=N; i++) {
        let str = INPUT[i];
        let answer = '';
        let cnt = 0;
        let current = str[0];
        for (let j=0; j<str.length; j++) {
            if (current != str[j]) {
                answer += cnt.toString()+current;
                cnt = 1;
                current = str[j]
            } else {
                cnt += 1;
            }
        }
        answer += cnt.toString()+current;
        console.log(answer);
    }
}

module.exports = solution;

module.exports();
