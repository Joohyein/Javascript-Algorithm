function solution(arr){
    let answer = [];
    
    answer = arr.sort((a, b) => b - a);
    answer.pop();
    if(answer.length === 0) return [-1];

    return answer;
}
// 배열의 순서를 바꿔서 틀렸다.

//---------------------------------------

function solution(arr){
    let answer = [];
    
    let mini = arr[0];
    let index = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < mini){
            mini = arr[i];
            index = i;
        }
    }

    arr.splice(index, 1);

    return arr;
}
// splice를 이용해서 최솟값을 삭제했다.
// 문제에서 최댓값이 주어지지 않아서 mini값은 배열의 첫 번째 값으로 정하면 된다.

//---------------------------------------

function solution(arr) {
    arr.splice(arr.indexOf(Math.min(...arr)),1);
    if(arr.length < 1) return[-1];
    return arr; 
}
// 자바스크립트 문법 사용 - Math.min
