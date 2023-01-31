function solution(nums) {
    var answer = -1;
    
    // 소수 찾기
    let check = new Array(3001).fill(true);
    check[0] = false;
    check[1] = false;
    for(let i = 2; i <= Math.sqrt(3000) ; i++){
        if(!check[i]) continue;
        for(let j = i * 2; j <= 3000; j += i){
            check[j] = false;
        }
    }
    let arr = [];
    let cnt = 0;
    let visited = new Array(nums.length + 1).fill(false);
    function solve(num, x){
        if(x === 3){
            let sum = nums[arr[0]] + nums[arr[1]] + nums[arr[2]];
            if(check[sum]) {
	              cnt++;
	              check[sum] = false;
	          }
        }
        else {
            for(let i = num; i < nums.length; i++){
                if(visited[i]) continue;
                visited[i] = true;
                arr.push(i);
                solve(i + 1, x + 1);
                arr.pop();
                visited[i] = false;
            }
        }
    }
    solve(0, 0);
    
    if(cnt !== 0) return cnt;
    return answer;
}


