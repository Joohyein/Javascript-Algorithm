function solution(n) {
    var answer = 0;
    
    let arr =  new Array(n + 1).fill(0);
    
    for(let i = 2; i <= Math.sqrt(n); i++){
        if(arr[i])continue;
        for(let j = i * 2; j <= n; j += i){
            arr[j] = 1;
        }
    }
    for(let i = 4; i <= n; i++){
        if(arr[i]) answer++;
    }
    return answer;
}

// --------------------------------

function solution(n) {
    let arr =  new Array(n + 1).fill(0);
    
    for(let i = 2; i <= n; i++){
        if(!arr[i]){
            for(let j = 2; i * j <= n; j++){
                arr[i * j] = 1;
            }
        } 
    }
    return arr.filter(el => el===1).length;
}
