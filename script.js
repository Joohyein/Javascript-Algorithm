function solution(n) {
    let arr = function(n) {
        return new Array(n).fill(false);
    }
    let arrReset = arr(n + 1);

    for(let i = 2; i <= Math.sqrt(n); i++){
        if(arrReset[i]) continue;
        for(let j = i * 2; j <= n; j += i){
            arrReset[j] = true;
        }
    }
    let answer = 0;
    for(let i = 2; i <= n; i++){
        if(!arrReset[i]){
            answer++;
        }
    }
   return answer;
}
