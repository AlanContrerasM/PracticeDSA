function uniquePaths(m: number, n: number): number {
    //robot goes either down or right, 
    //needs to reach [m][n]
    //find number of paths

    //old wyas were too expensive, so now so we dont exceed time limit, we are gonna add memoization
    //meaning for every square or coordinate, we are gonna start keeping tabs of how mnay unique paths we have from that square. so at the end we'll return the memo value on the end square
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


    //too expensive
    // let paths = 0;

    // const helper=(x:number,y: number)=>{
    //     if((m-1)===x && (n-1)===y){
    //         paths ++;
    //         return;
    //     }else if(x>(m-1) || y>(n-1)){
    //         return;
    //     }else{
    //         helper(x+1,y);
    //         helper(x,y+1);
    //     }

    // }
    // helper(0,0);
    // return paths;


    //Both last tries exceeded time limit
    //constraints
    // if(m === 1 && n === 1){
    //     return 1;
    // }else if(m <1 || n <1){
    //     return 0
    // }else{
    //     return uniquePaths(m-1,n) + uniquePaths(m,n-1);
    // }
    

};

// There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.

// Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.

// The test cases are generated so that the answer will be less than or equal to 2 * 109.

 

// Example 1:

// Input: m = 3, n = 7
// Output: 28

// Example 2:

// Input: m = 3, n = 2
// Output: 3
// Explanation: From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
// 1. Right -> Down -> Down
// 2. Down -> Down -> Right
// 3. Down -> Right -> Down

 

// Constraints:

//     1 <= m, n <= 100

