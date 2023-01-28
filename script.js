function solution(array) {
    let a = array.filter((num, index) => array.indexOf(num) == index); 
    if(a.length === 1) return array[0];
    let arr = {};

    for(let i = 0; i < array.length; i++){
        if(arr[array[i]]) arr[array[i]]++;
        else arr[array[i]] = 1;
    }
    
    let tmp = [];
    for(let value in arr){
        tmp.push([value, arr[value]]);
    }
    
    tmp.sort(function(a, b) {
        return b[1] - a[1];
    });
    
    if(tmp[0][1] === tmp[1][1]) return -1;
    return +tmp[0][0];
}
