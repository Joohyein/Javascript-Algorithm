function solution(s) {
    var answer = '';

    for(let i = 0; i < s.length; i++){
        if(s.substr(i, 4) === "zero") {
            answer += 0;
            i += 3;
        } 
        else if(s.substr(i, 3) === "one") {
            answer += 1;
            i += 2;
        }else if(s.substr(i, 3) === "two") {
            answer += 2;
            i += 2;
        }else if(s.substr(i, 5) === "three") {
            answer += 3;
            i += 4;
        }else if(s.substr(i, 4) === "four") {
            answer += 4;
            i += 3;
        }else if(s.substr(i, 4) === "five") {
            answer += 5;
            i += 4;
        }else if(s.substr(i, 3) === "six") {
            answer += 6;
            i += 2;
        }else if(s.substr(i, 5) === "seven") {
            answer += 7;
            i += 4;
        }else if(s.substr(i, 5) === "eight") {
            answer += 8;
            i += 4;
        }else if(s.substr(i, 4) === "nine") {
            answer += 9;
            i += 3;
        } else {
            answer += s[i];
        }
    }

    return +answer;
}

//-------------------------------------------
// join(n)
function solution(s) {
    let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    var answer = s;

    for(let i=0; i< numbers.length; i++) {
        let arr = answer.split(numbers[i]);
        console.log(arr);
        answer = arr.join(i);
    }

    return Number(answer);
}
