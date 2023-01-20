function solution(n, t) {
    while(t>0){
        n *= 2;
        t--;
    }
    return n;
}


***
    
- `<<`

function solution(n, t) {
    return (n << t);
}

***
- `pow`

function solution(n,t) {
    return n * Math.pow(2,t);
}

***

- `**`

function solution(n, t) {
    return n * (2 ** (t));
}
