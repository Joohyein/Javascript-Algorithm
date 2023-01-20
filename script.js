function solution(t, p) {
    var answer = 0;
    
    var answer = 0;
    
    let n = t.length - p.length + 1;
    for(let i = 0; i<n; i++){
        let tmp = t.substr(i,p.length);
        if(+tmp <= +p) answer++; 
    }    
    return answer;
}
