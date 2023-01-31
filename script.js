function solution(lottos, win_nums) {
    var answer = [];
    let rank = [6, 6, 5, 4, 3, 2, 1];
    let cnt = 0;
    let zeroCnt = 0;
    for(let i = 0; i < 6; i++){
        if(lottos[i] === 0){
            zeroCnt++;
            continue;
        }
        for(let j = 0; j < 6; j++){
            if(lottos[i] === win_nums[j]) cnt++;
        }
    }
    
    answer.push(rank[cnt + zeroCnt]);
    answer.push(rank[cnt]);

    return answer;
}

// answer.push(rank[cnt + zeroCnt], rank[cnt]);
