function solution(arr, divisor) {
    var answer = [];

    for(let i = 0; i < arr.length; i++){
        if(arr[i] % divisor === 0) answer.push(arr[i]);
    }
    if(answer.length === 0) answer.push(-1);
    answer.sort((a,b) => a - b);
    return answer;
}

// -------------------------------------

function solution(arr, divisor) {
    var answer = [];
    arr.map((o) => {
        o % divisor === 0 && answer.push(o);
    })
    return answer.length ? answer.sort((a, b) => a - b) : [-1];

}
