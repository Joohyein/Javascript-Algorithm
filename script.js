function solution(n) {
    var answer = 0;

    let arr = [];
    while(n >= 1){
        arr.unshift(Math.floor(n % 3));
        n /= 3;
    }
    console.log(arr);
    for(let i = 0; i < arr.length; i++){
        answer += (3 ** i) * arr[i];
    }

    return answer;
}

// -------------------------------

// parseInt 
function solution(n) {
    var answer = 0;

    answer = parseInt(n.toString(3).split('').reverse().join(''), 3);

    return answer;
}
- n.toString(3) : n을 3진수로 변환
- parseInt(’0021’, 3) : 문자열 ‘0021’을 3진수로 변환
