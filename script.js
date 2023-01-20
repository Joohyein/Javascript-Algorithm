function solution(common) {
    var answer = 0;
    let check = false;
    let tmp = common[1] - common[0];
    let che = Boolean(false);
    for(let i = common.length - 1; i > 0; i--){
        if(tmp != common[i] - common[i - 1]) {
            check = true;
            continue;
        }
    }
    if(check) {
        tmp = common[1] / common[0];
        answer = common[common.length - 1] * tmp;
    }else {
        answer = common[common.length - 1] + tmp;
    }
    return answer;
}
