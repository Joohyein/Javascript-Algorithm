const fs = require('fs');
const inputData = fs.readFileSync('/dev/stdin').toString().split(' ');

let n = inputData;
let checkNum = inputData;
let cnt = 0;
while(1){
    cnt++;
    let sum = Math.floor((n % 10) + (n / 10)); // 8
    n = (n % 10 * 10) + (sum % 10);
    if(n == checkNum) break;
}
console.log(cnt);
