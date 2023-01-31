function solution(s){
    let answer = '';
    
    answer = s.split('').sort((a, b) => {
        if(a < b) return 1;
        else if(a > b) return -1;
        else return 0;
    }).join('');
    
    return answer;
}

// -----------------------------

function solution(s) {
	let answer = '';
	answer = s.split('').sort().reverse().join('');
	return answer;
}
