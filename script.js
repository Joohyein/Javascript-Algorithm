function solution(new_id) {
    var answer = '';

    new_id = new_id.toLowerCase();  // 1단계

    new_id = new_id.split('');
    for(let i = 0; i < new_id.length; i++){
        if(new_id[i]>='a' && new_id[i]<='z') continue;
        if(new_id[i] === '-' || new_id[i]==='_' || new_id[i]==='.') continue;
        if(new_id[i] >= '0' && new_id[i] <= '9') continue;
        new_id.splice(i, 1);
        i--;
    } // 2단계

    for(let i = 0; i < new_id.length - 1; i++){
        if(new_id[i] === '.'){
            if(new_id[i + 1] === '.'){
                new_id.splice(i, 1);
                i--;
            }
        }
    } // 3단계

    if(new_id[0] === '.') new_id.shift();
    if(new_id[new_id.length - 1] === '.') new_id.pop(); // 4단계

    if(new_id.length === 0) new_id.push('a'); // 5단계
    if(new_id.length > 15) new_id.splice(15, new_id.length - 15); // 6단계

    if(new_id[new_id.length - 1] === '.') new_id.pop(); // 4단계


    if(new_id.length < 3) {
        let tmp = new_id[new_id.length - 1];
        while(new_id.length < 3){
            new_id.push(tmp);
        }
    } // 7단계

    answer = new_id.join('');
    return answer;
}
