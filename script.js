function solution(x) {
    var answer = true;

    let tmp = x;
    let sum = 0;
    while(tmp > 0){
        sum += Math.floor(tmp % 10);
        tmp /= 10;
    }
    if(x % sum !== 0) answer = false;
    return answer;
}



// return 간단하게
// return !(x % sum);
