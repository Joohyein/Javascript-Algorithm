function solution(num) {
    var answer = 0;

    while(1){
        if(num === 1 || answer === 500) break;
        if(Math.floor(num % 2) === 0) num /= 2;
        else {
            num *= 3;
            num++;
        }
        answer++;

    }
    if(answer === 500) answer = -1;
    return answer;
}
