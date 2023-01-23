function solution(n) {
    let answer = [];

    for(let i = 1; i <= Math.sqrt(n); i++){
        let tmp = n / i;
        if(Number.isInteger(tmp)){
            answer.push(i);
            if(i !== tmp){
                answer.push(tmp);
            }
        }
    }
    answer.sort((a, b) => a - b);
    return answer;
}

// Set객체 : 자료형에 관계 없이 원시값과 객체 참조 모두 유일한 값만 저장할 수 있다.
function solution(n) {
    let answer = new Set;

    for(let i = 1; i <= Math.sqrt(n); i++){
        if(n % i === 0){
            answer.add(i);
            answer.add(n / i);
        }
    }
    return [...answer].sort((a, b) => a - b);
}
