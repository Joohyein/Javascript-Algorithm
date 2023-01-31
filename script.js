function solution(N, stages) {
    var answer = [];

    let cntArr = {};
    for(let i = 1; i <= N; i++){
        cntArr[i] = 0;
    }

    for(let i = 0; i < stages.length; i++){
        if(cntArr[stages[i]]) cntArr[stages[i]]++;
        else cntArr[stages[i]] = 1;
    }
    console.log(cntArr);
    let arr = [];
    let person = stages.length;
    for(let tmp in cntArr){
        console.log(person);
        arr.push([tmp, cntArr[tmp]/person]);
        person -= cntArr[tmp];

    }
    arr = arr.sort((a, b) => {
        if(a[1] === b[1]) return a - b;
        return b[1] - a[1];
    });

    for(let i = 0; i < arr.length; i++){
        if(arr[i][0] > N) continue;
        answer.push(+arr[i][0]);
    }
    return answer;
}
