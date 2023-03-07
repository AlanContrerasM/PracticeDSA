//find out if a grid 9x9 respects sudoku rules so far, with the progress, empty places are "."
//
function sudoku2(grid: string[][]): boolean {
    // BigO is technically 81, since its 9 by 9
    //brute force it?
    //grid is 9x9
    let rows = Array.from({length:9}, ()=>({}));
    let columns = Array.from({length:9}, ()=>({}));
    let boxes = Array.from({length:9}, ()=>({}));
    for(let i =0; i< grid.length; i++){
        for(let j =0; j<grid.length; j++){
            //fill row
            let r = grid[i][j];
            if(r !== "." && rows[i][r]){
                return false;
            } else if(r !== "."){
                rows[i][r] = true;
            }
            
            //fill column
            if(r !== "." && columns[j][r]){
                return false;
            } else if(r !== "."){
                columns[j][r] = true;
            }
            // console.log(c, columns);
            
            //fill boxes
            //0-2  and 0-2 is box 1
            //0-2 and 3-5 is box 2
            //0-2, 6-8 is box 3
            //to know which box we do 
            let index = (Math.floor(i/3)*3) + Math.floor(j/3);
            if(r !== "." && boxes[index][r]){
                console.log(r, boxes);
                return false;
            } else if(r !== "."){
                boxes[index][r] = true;
            }
        }
    }
    // console.log(rows, columns, boxes)
    
    return true;
}
