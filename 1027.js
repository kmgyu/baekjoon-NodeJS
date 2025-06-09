// 아래와 같은 코드 권장됨.
// const fs = require('fs');
// const [A, B] = fs.readFileSync(0, 'utf-8').trim().split(' ').map(Number);

const INPUT = require("fs").readFileSync("input.txt").toString().trim().split("\r\n");
// /dev/stdin
// const INPUT = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

function CCW(ax, ay, bx, by, cx, cy) {
    let op = ax*by + bx*cy + cx*ay;
    op -= ay*bx + by*cx + cy*ax;
    if (op>0) return 1; // 반시계
    else if (op==0) return 0;
    return -1; // 시계
}

// 기울기를 이용하면 부동소수점 소실문제 때문에 안될 가능성 농후
// 게시판에서 CCW 알고리즘 힌트를 얻었다. 게시글 제목 읽고 본의아니게 힌트를 얻어버림.

function solution() {
    const N = INPUT[0]
    const buildings = INPUT[1].trim().split(" ");
    let answer = 0;
    for (let i = 0; i < N; i++) {
        let building = buildings[i];
        let break_flag = false;
        let cnt = 0; // 현재 빌딩에서 볼 수 있는 다른 빌딩
        for (let left = i-1; left > -1; left--) {
            // let maximum_height = buildings[left];
            // left CCW check
            // left 선정
            break_flag = false;
            for (let j = i-1; j > left; j--) {
                // 이 부분이 문제였다. 순서를 제대로 지켜주지 않아서 문제가 생긴 것.
                if (CCW(i, building, j, buildings[j], left, buildings[left]) != -1) {
                    break_flag = true;
                    break;
                }
            }
            if (!break_flag) cnt += 1;
        }
        for (let right = i+1; right < N; right++) {
            break_flag = false;
            for (let j = i+1; j < right; j++) {
                if (CCW(i, building, j, buildings[j], right, buildings[right]) != 1) {
                    break_flag = true;
                    break;
                }
            }
            if (!break_flag) cnt += 1;
        }
        answer = (cnt > answer) ? cnt : answer;
        // console.log(i, cnt);
    }
    return answer;
}


module.exports = solution;

console.log(module.exports());
