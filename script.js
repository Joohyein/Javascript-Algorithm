function solution(n) {
    let tmp = Math.sqrt(n);
    
    if((tmp % Math.floor(tmp)) === 0){
        return 1;
    }else{
        return 2;
    }
}

// ----------------------------

function solution(n) {
    let tmp = Math.sqrt(n);
    
    if(Number.isInteger(tmp)){
        return 1;
    }else{
        return 2;
    }
}
