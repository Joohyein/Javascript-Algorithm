

function solution(k, tangerine){
    let answer = 0;
    let cntArr = {};
    for(let i = 0; i < tangerine.length; i++){
        if(cntArr[tangerine[i]]) {
            cntArr[tangerine[i]]++;
        }else{
            cntArr[tangerine[i]] = 1;
        } 
    }
    let removeArr = Object.values(cntArr);

    removeArr.sort((a, b) => b - a);
    while(k > 0){
        k -= removeArr[answer];
        answer++;
    }
    console.log(answer);
}




function solution(k, tangerine) {
    let answer = 0;
    let cntArr = {};

    for(let i = 0; i < tangerine.length; i++){
        if(cntArr[tangerine[i]]) {
            cntArr[tangerine[i]]++;
        }else{
            cntArr[tangerine[i]] = 1;
        }
    }
    let removeArr = [];
    for(let[key,value] of Object.entries(cntArr)) {
        removeArr.push(value);
    }
    removeArr.sort((a, b) => b - a);
    while(k > 0){
        k -= removeArr[answer];
        answer++;
    }

    return answer;
}
