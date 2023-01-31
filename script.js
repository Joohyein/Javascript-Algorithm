function solution(n, m) {
    var answer = [];

    function solve(a, b){
        if(a % b === 0) return b;
        return solve(b, a % b);
    }
    let gcd = solve(m, n);
    let lcm = m * n / gcd;
    answer.push(gcd, lcm);
    return answer;
}
