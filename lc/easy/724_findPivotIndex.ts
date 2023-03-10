function pivotIndex(nums: number[]): number {
    let pivot = -1;
    nums.forEach((v,i)=>{
        if(pivot<0){
            let left = 0;
            let right = 0;
            for(let j = 0; j< i; j++){
                left += nums[j];
            }
            for(let j = nums.length -1; j> i; j--){
                right += nums[j];
            }
            if(left === right){
                pivot = i;
            }
        }
    })
    return pivot;
};

// Given an array of integers nums, calculate the pivot index of this array.

// The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.

// If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.

// Return the leftmost pivot index. If no such index exists, return -1.