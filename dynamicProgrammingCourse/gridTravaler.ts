function gridTravelerMemoRecursive(m: number, n: number, memo ={}): number {
    //we are on a grid and we have to raverse it, only down and right moves. 
    // find unique paths
    //are the args in memo
    //concatenate 
    const key = m + ","+n;
    if(key in memo) return memo[key];
    if(m === 1 && n === 1){
        return 1;
    }
    if(m <1 || n <1){
        return 0
    }


    memo[key] = gridTravelerMemoRecursive(m-1, n, memo) + gridTravelerMemoRecursive(m,n-1,memo);
    return memo[key];
};


//this one is based 1, taken from leetcode problem
function gridTraveler(m: number, n: number): number {
    if(m<1|| n <1) return 0;
    //we are on a grid and we have to raverse it, only down and right moves. 
    // find unique paths
    let memo = Array(m).fill(-1).map(v=>Array(n).fill(-1));

    const helper=(x:number,y: number)=>{
        if(x === 0 && y === 0){
            return 1;
        }else if(x <0 || y <0){
            return 0
        }else if (memo[x][y] !== -1) {return memo[x][y]}
        else {
            const numOfPaths = helper(x-1, y) + helper(x,y-1);
            memo[x][y] = numOfPaths;
            return numOfPaths;
        }

    }
    return helper(m-1,n-1);


};

