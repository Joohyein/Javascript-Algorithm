function solution(n, arr1, arr2) {
    var answer = [];
    for(let i = 0; i < n; i++){
        let tmp = '';
        for(let j = 0; j < n; j++){
            tmp += arr1[i] % 2;
            arr1[i] = Math.floor(arr1[i] / 2);           
        }
        arr1[i] = tmp;
    }
    for(let i = 0; i < n; i++){
        let tmp = '';
        for(let j = 0; j < n; j++){
            tmp += Math.floor(arr2[i] % 2);
            arr2[i] = Math.floor(arr2[i] / 2);           
        }
        arr2[i] = tmp;
    }
    let sumArr = [];
    for(let i = 0; i < n; i++){
        sumArr.push(+arr1[i] + +arr2[i]);
    }

    // 문자열 뒤집기
    for(let i = 0; i < n; i++){
        let tmp = (''+sumArr[i]).split('').reverse().join('');
        sumArr[i] = tmp;
    }
    console.log(sumArr);
    for(let i = 0; i < n; i++){
        let str = '';
        sumArr[i] = sumArr[i] + '';
        for(let j = 0; j < n; j++){
            if(sumArr[i][j] == 1 || sumArr[i][j] == 2) str += '#';
            else str += ' ';
        }
        answer.push(str);
    }
    return answer;
}

// ------------------------------------------------

// toString(2), padStart
function solution(n, arr1, arr2) {
    var answer = [];
    arr1 = arr1.map((v, i) => arr1[i].toString(2).padStart(n, '0'));
    arr2 = arr2.map((v, i) => arr2[i].toString(2).padStart(n, '0'));

    for(let i = 0; i < n; i++){
        let str = '';
        for(let j = 0; j < n; j++){
            if(arr1[i][j] + arr2[i][j] == 0) str += ' ';
            else str += '#';
        }
        answer.push(str);
    }

    return answer;
}
