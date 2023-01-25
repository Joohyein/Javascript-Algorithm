// 재귀함수로 풀었더니 8000부터 콜스택이 터져버렸다.
function solution(n) {
    var answer = 0;
    const MAX = 1234567;
    
    let dp = new Array(n + 1).fill(0);
    function fibo(n){
        if(n === 1 || n === 2){
            dp[n] = 1;
            return dp[n];
        } else if (dp[n] === 0){
            dp[n] = fibo(n - 1) + fibo(n - 2);
            return dp[n] % MAX;
        } else {
            return dp[n] % MAX;
        }
    }
    
    answer = fibo(n);
    return answer;
}

// 재귀함수보다 for문으로 푸는 것이 더 빠르고 콜스택에 문제가 없다.

function solution(n) {
    var answer = 0;
    const MAX = 1234567;
    
    let num1 = 0;
    let num2 = 1;
    for(let i = 1; i < n; i++){
        answer = (num1 + num2) % MAX;
        num1 = num2;
        num2 = answer;
    }
    return answer;
}
