let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let tc = Number(input[0]);

for (let i = 1; i <= tc; i++) {
    let answer = 0;
    let cnt = 0;
    for(let j = 0; j < input[i].length; j++){
        if(input[i][j] === 'O') cnt++;
        else cnt = 0;
        answer += cnt;

    }
    
  
    console.log(answer);
}
