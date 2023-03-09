//calculate digits that appear the most in array, and return then
function solution9(a: number[]): number[] {
    let result = [];
    
    let obj = {};
    for(let i =0;  i< a.length; i++){
        String(a[i]).split("").forEach(v=>{
            if(obj[v]!== undefined){
                obj[v]++;
            } else {
                obj[v] = 1;
            }
        })
    }
    
    // make an object with frequencies, this one is so we have an array of numbers in the frequencies
    let freq = {};
    let max = -Infinity;
    Object.keys(obj).forEach(v=>{
        let f= obj[v];
        max = Math.max(max, f);
        if(freq[f]!== undefined){
                freq[f].push(Number(v));
        } else {
            freq[f] = [Number(v)];
        }
    })
    // console.log(obj, max, freq)
    
    // //get biggest 
    // console.log(freq[max]);
    
    return freq[max]

}


//longest contigous sawtootch array, how many contiguopus sub arrays min 2 length
// [1,2,1,2,1] = 10
function solution15(arr: number[]): number {
    if (arr.length < 2) return 0;
  
    let previousLongest = 1;
    let result = 0;
    for (let i = 1; i < arr.length; i++) {
        if (i >= arr.length) break;
        //same number doesnt do sawtooth sequence
        if (arr[i - 1] === arr[i]) continue;
        
        if (arr[i - 1] > arr[i] 
                            && arr[i] < arr[i + 1] 
                            || arr[i - 1] < arr[i] 
                            && arr[i] > arr[i + 1]) {
            previousLongest += 1;
        } else {
            //only one contiguous
            previousLongest = 1;
        }
        result += previousLongest;
    }
    return result;
}


// function solution(arr: number[]): number {
//     //min length 2, 
//     // sliding window all the way 
    
//     let start =0;
//     let result = 0;
//     let subArray = [];
    
//     let nextSize = 0;//0 is neutral reset, 1 is bigger, -1 is next should be smaller
//     for(let end = 0; end< arr.length; end++){
//         let last = arr[end];
//         subArray.push(last);
//         // console.log(subArray)
        
        
//         if(nextSize === 0){
//             if(last> subArray[subArray.length-2]){
//                 result ++;
//                 nextSize = -1;
//             }else if(last< subArray[subArray.length-2]){
//                 result ++;
//                 nextSize = 1;
//             }else {
//                 nextSize = 0;
//             }
            
//         }else if (nextSize ===1){
//             if(last> subArray[subArray.length-2]){
//                 result ++;
//                 nextSize = -1;
//             }else{
//                 nextSize = 0;
//             }
//         } else{
//             //number should be smaller
//             if(last< subArray[subArray.length-2]){
//                 result ++;
//                 nextSize = 1;
//             }else{
//                 nextSize = 0;
//             }
//         }
//         if(subArray.length> 1 && nextSize === 0 || (end === arr.length-1 && start < arr.length -2)){
            
//             start++;
//             subArray.shift();
//             end = start;
//             nextSize =0;
//             subArray = [arr[start]]
//             // console.log("start-1",result, subArray);
//         }
        
//         // console.log(result, subArray);
//     }
//     return result;
// }
