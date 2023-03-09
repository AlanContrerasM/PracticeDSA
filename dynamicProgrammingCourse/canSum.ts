//return if we can sum k, in array a
//we can reuse digits
// recursively
//if we want 7, and we have 5, 7-5, remainder equals 2,
//[2,3], these wil be remainders
//7
//5 || 4
//3,2 || 2, 1
//1, 0, 0  || 0
//return trues 
const canSum = (numbers: number[], k:number, memo: { [key: number]: boolean,} ={})=>{
if(k=== 0) return true;
if(k<0) return false;
if(k in memo) return memo[k];

    for(let num of numbers){
        const remainder = k- num;
        if(canSum(numbers, remainder)){
            memo[k] = true;
            return memo[k];
        }
    }

    memo[k]= false;
    return false;

}

console.log(canSum([2,3],7)); //true
console.log(canSum([5,3,4,7],7)); //true
console.log(canSum([2,4],7)); //false
// ts-node  filename