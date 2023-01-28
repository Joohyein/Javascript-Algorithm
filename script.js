function solution(sizes) {
    var answer = 0;
    
    let left = 0;
    let right = 0;
    let maxLeft = 0;
    let maxRight = 0;
    
    for(let i = 0; i < sizes.length; i++){
        if(sizes[i][0] > sizes[i][1]){
            left = sizes[i][0];
            right = sizes[i][1];
        }else {
            left = sizes[i][1];
            right = sizes[i][0];
        }
        maxLeft = Math.max(maxLeft, left);
        maxRight = Math.max(maxRight, right);
    }
    
    answer = maxLeft * maxRight;
    return answer;
}
