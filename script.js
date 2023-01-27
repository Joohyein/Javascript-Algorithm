function solution(n) {
    var answer = [];
    let tmp = n.toString().split("").reverse();
    for(let i = 0; i < tmp.length; i++){
    answer.push(+tmp[i]);
    }
    return answer;
}

// --------------------------------
// map

function solution(n) {
    var answer = [];
    
    let tmp = n.toString().split("").reverse().map(n => parseInt(n));
    for(let i = 0; i < tmp.length; i++){
        answer.push(tmp[i]);
    }
    console.log(answer);
}

// --------------------------------
// Array.from

function solution(n) {
    let reverseN = String(n).split('').reverse();  
    answer = Array.from(reverseN, (v) => Number(v));

    return answer;
}
