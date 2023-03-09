// normal recursive is n^2
//which is very very bad

const fibWithMemo = ( n: number, memo= {}): number=>{
    if(n in memo) return memo[n];
    if(n<=2)return 1;
    memo[n] = fibWithMemo(n-1,memo) + fibWithMemo(n-2,memo);
    return fibWithMemo(n-1)+ fibWithMemo(n-2)
}

const fibDP = ( n: number): number=>{
    let f: { [key: number]: number,} ={};
    f[0] =0;
    f[1] = 1;
    for(let i =2; i<=n; i++){
        f[i] = f[i-1] + f[i-2];
    }
    return f[n];
}

const fibDPWithTabulation = ( n: number): number=>{
    let f: number[]= new Array(n+1).fill(0);
    f[0] =0;
    f[1] = 1;
    for(let i =2; i<=n; i++){
        f[i] = f[i-1] + f[i-2];
    }
    return f[n];
}

console.log(fibDP(3))