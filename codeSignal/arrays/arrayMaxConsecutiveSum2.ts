function arrayMaxConsecutiveSum2(inputArray: number[]): number {
    var max_so_far = -Infinity
    var max_ending_here = 0
       
    for (var i = 0; i < inputArray.length; i++)
    {
        max_ending_here = max_ending_here + inputArray[i]
        if (max_so_far < max_ending_here)
            max_so_far = max_ending_here
  
        if (max_ending_here < 0)
            max_ending_here = 0 
    }
    return max_so_far
}

// Given an array of integers, find the maximum possible sum you can get from one of its contiguous subarrays. The subarray from which this sum comes must contain at least 1 element.

// Example

// For inputArray = [-2, 2, 5, -11, 6], the output should be
// solution(inputArray) = 7.

// The contiguous subarray that gives the maximum possible sum is [2, 5], with a sum of 7.