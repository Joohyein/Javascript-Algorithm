function solution(participant, completion) {
    var answer = '';

    for(let i = 0; i < participant.length; i++){
        for(let j = 0; j < completion.length; j++){
            if(participant[i] === completion[j]){
                participant.splice(i,1);
                completion.splice(j,1);
                j--;
                i--;
            }
        }
    }
    answer = participant[0];
    
    return answer;
}
// -----> 시간초과


// ------------------------------------

function solution(participant, completion) {
    var answer = '';
    participant.sort();
    completion.sort();
    for(let i = 0; i < completion.length; i++){
        if(participant[i] !== completion[i]){
            answer = participant[i];
            break;
        }
    }
    if(answer === '') answer = participant[participant.length-1];
    return answer;
}
