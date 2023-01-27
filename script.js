function solution(s, n) {
    var answer = '';
    let alpha = "Aa";

    for(let i = 0; i < s.length; i++){
        let num = s[i].charCodeAt(0);
        let tmp = 0;
        if(s[i] >= 'A' && s[i] <= 'Z'){
            tmp = Math.floor((num - alpha.charCodeAt(0) + n) % 26);
            answer += String.fromCharCode(tmp + alpha.charCodeAt(0));
        } 
        else if(s[i] >= 'a' && s[i] <= 'z'){
            tmp = Math.floor((num - alpha.charCodeAt(1) + n) % 26);
            answer += String.fromCharCode(tmp + alpha.charCodeAt(1));
        }
        else answer += s[i];
    }

    return answer;
}
