
//find out if array is in increasing order and if not swap at most two digits, of one number to see if it can still be respected
//[5,70,10,15]
//7 can be swapped to 07, making it true for ex.
function solution2(numbers: number[]): boolean {
    // nums >-0
    // 010 = 10
    //only swap once
    let result = true;
    let alreadySwapped = false;
    
    const canSwap = (biggerIndex:number, smallerIndex:number): boolean =>{
        //if possible, swap and update array,
        let bigger = String(numbers[biggerIndex]);
        let smaller = String(numbers[smallerIndex]);
        let min = numbers[smallerIndex -1] ? String(numbers[smallerIndex -1]) : ""
        //can only swap two digits in one or the other
        //first try swapping the big opne
        for(let i = 0; i< bigger.length; i++){
            for(let j =i+1; j< bigger.length; j++){
                let char = bigger[i];
                // console.log(char, i, j)
                let temp = bigger.substring(0, i-1) + bigger.substring(i+1, j+1) + char + bigger.substring(j+1, bigger.length);
                console.log(temp)
                if(Number(temp)> Number(smaller)){
                    numbers[biggerIndex] = Number(temp);
                    return true;
                } 
                    
            }
        }
        
        for(let i = 0; i< smaller.length; i++){
            for(let j =i+1; j< smaller.length; j++){
                let char = smaller[i];
                // console.log(char, i, j)
                let temp = smaller.substring(0, i-1) + smaller.substring(i+1, j+1) + char + smaller.substring(j+1, smaller.length);
                // console.log(temp)
                if(Number(bigger)> Number(temp) && Number(temp) > Number(min)){
                    numbers[smallerIndex] = Number(temp);
                    return true;
                } 
            }
        }
        
        return false;
    }
    for(let i = numbers.length -1; i >1; i--){
        if(numbers[i] <= numbers[i-1]){
            if(alreadySwapped) return false;
            //perform swap operation and see if its possible to swap
            if( canSwap(i, i-1) ){
            // update alreadySwapped
                alreadySwapped = true;
            }else{
                return false;
            }
            //if not return false
        }
    }
    
    return result;
}


// Given an array of integers a, your task is to find how many of its contiguous subarrays of length m contain a pair of integers with a sum equal to k.

// More formally, given the array a, your task is to count the number of indices 0 ≤ i ≤ a.length - m such that a subarray [a[i], a[i + 1], ..., a[i + m - 1]] contains at least one pair (a[s], a[t]), where:

//     s ≠ t
//     a[s] + a[t] = k

// Example

//     For a = [2, 4, 7, 5, 3, 5, 8, 5, 1, 7], m = 4, and k = 10, the output should be solution(a, m, k) = 5.

//     Let's consider all subarrays of length m = 4 and see which fit the description conditions:
//         Subarray a[0..3] = [2, 4, 7, 5] doesn't contain any pair of integers with a sum of k = 10. Note that although the pair (a[3], a[3]) has the sum 5 + 5 = 10, it doesn't fit the requirement s ≠ t.
//         Subarray a[1..4] = [4, 7, 5, 3] contains the pair (a[2], a[4]), where a[2] + a[4] = 7 + 3 = 10.
//         Subarray a[2..5] = [7, 5, 3, 5] contains two pairs (a[2], a[4]) and (a[3], a[5]), both with a sum of k = 10.
//         Subarray a[3..6] = [5, 3, 5, 8] contains the pair (a[3], a[5]), where a[3] + a[5] = 5 + 5 = 10.
//         Subarray a[4..7] = [3, 5, 8, 5] contains the pair (a[5], a[7]), where a[5] + a[7] = 5 + 5 = 10.
//         Subarray a[5..8] = [5, 8, 5, 1] contains the pair (a[5], a[7]), where a[5] + a[7] = 5 + 5 = 10.
//         Subarray a[6..9] = [8, 5, 1, 7] doesn't contain any pair with a sum of k = 10.

//     So the answer is 5, because there are 5 contiguous subarrays that contain a pair with a sum of k = 10.



function solution3(a: number[], m: number, k: number): number {
    //sliding window. 
    let result = 0;
    let windowEnd = 0;
    let numbersNeeded = {};
    let pointer = -1;
    
    for(let start = 0; windowEnd < a.length; start++){
        //number we need for the sum of two nums to give k

        //grow window
        while(windowEnd - start <m && windowEnd < a.length){
            let needed = k - a[windowEnd];
            
            
            if(numbersNeeded[a[windowEnd]] !== undefined){
                //only add once for initial window growing, ie, cant add two while the first window is being set up
                if(windowEnd >= m || result === 0) result++;
                pointer = Math.max(pointer,numbersNeeded[a[windowEnd]])
            } else if(pointer >= start){
                //only add once for initial window growing, ie, cant add two while the first window is being set up
                if(windowEnd >= m || result === 0) result++;
            }
            // console.log(a[windowEnd], needed, numbersNeeded,result)
            
            numbersNeeded[needed] = windowEnd;
            
            
            windowEnd++;
        }
        
        if(numbersNeeded[k-a[start]] === start){
            delete numbersNeeded[k-a[start]];
        }
        
    }
    
    return result;
    
}
