function solution(a, b) {
    var answer = '';
    let arr = ['FRI', 'SAT', 'SUN', 'MON',  'TUE', 'WED', 'THU'];
    let cnt = 1;
    let tmp = 0;
    while(1){
        if(cnt === a) break;
        if(cnt === 1 || cnt === 3 || cnt === 5 || cnt === 7 || cnt === 8 || cnt === 10 || cnt ===12){
            tmp += 31;
        }
        else if(cnt === 2) tmp += 29;
        else tmp += 30;
        cnt++;
    }
    
    tmp += b - 1;

    answer = arr[tmp % 7];
    return answer;
}
