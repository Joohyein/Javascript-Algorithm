function solution(n, lost, reserve) {
    var answer = 0;

    let arr = new Array(n).fill(1);
    for(let i = 0; i < n; i++){
        arr[lost[i] - 1]--;
        arr[reserve[i] - 1]++;
    }
    arr = arr.splice(0, n);   // 배열로 정렬시키기

    for(let i = 0; i < n; i++){
        if(arr[i] === 0){
            if(arr[i - 1] === 2) {
                arr[i - 1]--;
                arr[i]++;
                continue;
            }
            if(arr[i + 1] === 2){
                arr[i + 1]--;
                arr[i]++;
                continue;
            }
        }

    }
    arr.map((value, i) => {
        if(value !== 0) answer++;

    })
    return answer;
}
