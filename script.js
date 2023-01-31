function solution(d, budget) {
    var answer = 0;
    
    d = d.sort((a, b) => a - b);

    let tmp = 0;
    while(answer < d.length){
        tmp += d[answer];
        if(tmp > budget) break;
        answer++;
    }

    return answer;
}
