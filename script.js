function solution(dartResult) {
    var answer = 0;

    let score = 0;
    let index = -1;
    let ansArr = [];
    for(let i = 0; i < dartResult.length; i++){
        let tmp = dartResult[i];
        if(tmp >= 0 && tmp <= 9){
            score = dartResult[i];
            index++;
            if(dartResult[i + 1] == 0) {
                score = 10;
                i++;
            }
        } 
        if(tmp == 'S') ansArr.push(score);
        else if(tmp == 'D') ansArr.push(Math.pow(score, 2));
        else if(tmp == 'T') ansArr.push(Math.pow(score, 3));
        else if(tmp == '*') {
            ansArr[index] *= 2;
            if(index > 0) ansArr[index - 1] *= 2;
        }
        else if(tmp == '#'){
            ansArr[index] = ansArr[index] * (-1);
        }
    }
    for(let i = 0; i < 3; i++){
        answer += +ansArr[i];
    }
    return answer;
}
