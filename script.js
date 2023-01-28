function solution(arr)
{
    var answer = [arr[0]];
    
    let tmp = arr[0];
    for(let i = 0; i < arr.length; i++){
        if(tmp !== arr[i]) {
            answer.push(arr[i])
            tmp = arr[i];
        }
    }
    
    return answer;
}

// -------------------------------

// filter
function solution(arr){
    answer = arr.filter((num, index) => num != arr[index + 1])
    return answer;
}
