function solution(array, commands) {
    var answer = [];

    for(let i = 0; i < commands.length; i++){
        let start = commands[i][0] - 1;
        let numCnt = commands[i][1];
        let value = commands[i][2] - 1;

        let arr = array.slice(start, numCnt);
        answer.push(arr.sort((a, b) => a - b)[value]);
    }
    return answer;
}
