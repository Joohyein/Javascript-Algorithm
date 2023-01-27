function solution(n) {
    var answer = 0;
    let cnt = 0;
    
    while(1){
    if(cnt === n) break;
    cnt++;
    answer++;

    let str = answer.toString();
    while(1){
        str = answer.toString();
        if(answer === 3 || answer % 3 === 0 || str.includes(3)){
            answer++;
        } 
        str = answer.toString();
        if(answer !== 3 && answer % 3 !== 0 && !str.includes(3)) {
            break;
        }
    }
}
    return answer;
}
