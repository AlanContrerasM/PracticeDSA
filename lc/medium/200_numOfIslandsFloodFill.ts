function numIslands(grid: string[][]): number {
    //connected horizontally or vertically
    let numberOfIslands = 0;

    let maxR = grid.length-1;
    let maxC = grid[0].length-1;

    //find an island, and mark all land spots as 0
    const helper = (r:number, c:number)=>{
        // check if we are out of bounds
        if(r<0 || r>maxR || c<0 || c >maxC ) return;
        //check if its water
        if(grid[r][c] === "0") return;

        grid[r][c] = "0";

        helper(r+1,c);
        helper(r-1,c);
        helper(r,c+1);
        helper(r,c-1);

    }
    let row = 0;
    let col = 0;

    let landFinder = () =>{
        for(let i = row; i < grid.length; i++){
            let land = grid[i].findIndex(v=>v==="1");
            if(land>-1){
                row = i;
                col = land;
                return true
            }
        }
        return false
    }

    while(landFinder()){
        numberOfIslands++;
        helper(row,col)
    }



    return numberOfIslands;


};

// Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

 

// Example 1:

// Input: grid = [
//   ["1","1","1","1","0"],
//   ["1","1","0","1","0"],
//   ["1","1","0","0","0"],
//   ["0","0","0","0","0"]
// ]
// Output: 1

// Example 2:

// Input: grid = [
//   ["1","1","0","0","0"],
//   ["1","1","0","0","0"],
//   ["0","0","1","0","0"],
//   ["0","0","0","1","1"]
// ]
// Output: 3

 

// Constraints:

//     m == grid.length
//     n == grid[i].length
//     1 <= m, n <= 300
//     grid[i][j] is '0' or '1'.

