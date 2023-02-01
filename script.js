function solution(n) {
    var answer = 0;
    for(let i = 1; i <= n; i++){
        let sum = i;
        if((i * 2) >= n) break;
        for(let j = i + 1; j <= n; j++){
            if(sum >= n){
                if(sum === n) answer++;
                break;
            }
            sum += j;
        }
    }
    answer++;
    return answer;
}

//-----------------------------

// 점화식
function solution(n) {
    let result = 0;
    for (let i = 1; i <= n; i++) {
        if (n % i == 0 && i % 2 == 1) {
            result++;
        }
    }
    return result;
}
