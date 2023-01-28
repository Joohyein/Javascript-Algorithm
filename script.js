function solution(n){
    let answer = 0;
    let root = Math.sqrt(n)

    if(Number.isInteger(root)) answer = (root + 1) ** 2;
    else answer = -1;

    return answer;
}
