function solution(board, moves) {
    var answer = 0;

    let arr = [];
    for(let i = 0; i < moves.length; i++){
        let pickNum = moves[i] - 1;
        for(let j = 0; j < board.length; j++){
            if(board[j][pickNum]){
                if(arr.length > 0){
                    if(arr[arr.length - 1] === board[j][pickNum]){
                        arr.pop();
                        answer += 2;
                    }
                    else arr.push(board[j][pickNum]);
                }
                else arr.push(board[j][pickNum]);
                board[j][pickNum] = 0;
                break;
            }
        }
    }

    return answer;
}
