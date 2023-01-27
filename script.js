function solution(s) {
    var answer = '';
    s = s.toLowerCase();
    
    let arr = s.split("");

    let cnt = 0;
    let str = '';
    for(let i = 0; i < arr.length; i++){
        if(arr[i]===' ') {
            cnt = 0;
            answer += arr[i];
            continue;
        }
        if(cnt % 2 === 0){
            str = arr[i].toUpperCase();
            answer += str;
        } else {
            answer += arr[i];
        }
        cnt++;
        
    }
    
    return answer;
}
