function solution(n){
    let answer = [];

    for(let i = 2; i <= n; i++){
        if(n % i === 0){
            answer.push(i);
            n /= i;
            while(1){
                if(n % i !== 0){
                    break;
                }
                n /= i;
            }
        }
    }
    return answer;
}
