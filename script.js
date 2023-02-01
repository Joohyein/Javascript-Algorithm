const fs = require('fs');
const inputData = fs.readFileSync('/dev/stdin').toString().split(' ');

function solution(n) {
    let answer = 0;
    
    let arr = [500, 100, 50, 10, 5, 1];

    n = 1000 - n;

    for(let i = 0; i < 6; i++){
        while(Math.floor(n / arr[i])){
            n -= arr[i];
            answer++;
        }
    }
    return answer;
}
console.log(solution(inputData));


