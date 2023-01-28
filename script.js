
function solution(numbers){
    let answer = [];
    let arrSet = new Set;
    for(let i = 0; i < numbers.length - 1; i++){

        for(let j = i + 1; j < numbers.length; j++){
            arrSet.add(numbers[i] + numbers[j]);
        }
    }
    answer = Array.from(arrSet).sort((a, b) => a - b);
    return answer;
}
