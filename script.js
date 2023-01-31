function solution(strings, n) {
    var answer = [];

    for(let i = 0; i < strings.length; i++){
        let char = strings[i][n];
        strings[i] = char + strings[i];
    }
    strings.sort();
    for(let i = 0; i < strings.length; i++){
        answer[i] = strings[i].substr(1,strings[i].length);
    }

    return answer;
}

// ---------------------------------------------------

function solution(string, n){
    if(string.length === 1) return string;
    let answer = [];

    string.sort((a, b) => {
        let char1 = a[n];
        let char2 = b[n];

        if(char1 !== char2) {
            if(char1 > char2) return 1;
            else if(char1 < char2) return -1;
            else return 0;
        } 
        else {
            if(a > b) return 1;
            else if(a < b) return -1;
            else return 0;
        }
    });
    
    return string;
}

// -----------------------------------------
// localeCompare
function solution(strings, n) {
    return strings.sort((a, b) => {
			if (a[n] === b[n]) {				
				a.localeCompare(b) // a가 b보다 전에 위치하므로 음수
			} else {
				a[n].localeCompare(b[n])
		}
    });
}
