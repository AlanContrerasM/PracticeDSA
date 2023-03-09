function lastStoneWeight(stones: number[]): number {
    //first sort stones
    // small to big
    // 
    // stones.sort((a, b) => a - b);  
    // populate object
    // let obj= {};
    //if we want to diminish time complexity, wee implement a binary search to find new position to isnert stone in array, isntead of resorting.
    // arr.splice(indexToInsertAt, 0, Stone weight); 
    // for(let i = 0; i< stones.length; i ++){
    //     let s = stones[i];
    //     if(obj[s] !== undefined){
    //         obj[s].freq++;
    //     }else{
    //         obj[s] = {i: i, freq:1};
    //     }
    // }

    // const findIndex = (n:number):number =>{
    //     let index = 0;

    // }

    

    while (stones.length > 1) {
        stones.sort((a, b) => a - b);  
        const first = stones.pop();
        const second = stones.pop();
        if (first != undefined && second != undefined) {
            if (first - second != 0) {
                stones.push(first - second);
            }
        }
    }

  return stones.length == 0 ? 0 : stones[0];
};