//compare pattern 0 and 1 strings for vowels and constants, count the numebr of times pattern is respected.

function solution1(pattern: string, source: string): number {
    //pattern is only 1 and 0, source is a string
    //patter matches is 
    
    //equal length
    //0 in pattern is a vowel
    //1 is a consonant
    
    //calculate number of substrings in source that matches pattern
    // let vowels = ["a", "e", "i", "o", "u", "y"]
    let res = 0;
    //faster
    let v = new Set(["a", "e", "i", "o", "u", "y"]);
    let memo: string[] =[]
    
    for(let i = 0; i< source.length; i++){
        if(v.has(source[i])){
            memo.push("0");
        }else{
            memo.push("1")
        }
    }
    //join result 
    let converted = memo.join("");
    let windowEnd = pattern.length;
    
    while(windowEnd <= source.length){
        //vowels is 0 constant is 1
        if(converted.slice(windowEnd - pattern.length, windowEnd) === pattern){
            res++;
        }
        
        windowEnd++;
    }
    
    
    // //can be sliding window if we want absolute fastest
    // let windowEnd = pattern.length;
    // //do we need memoization?
    // //of course we do.
    // let memo = Array(source.length).fill(-1);
    
    // while(windowEnd < source.length){
    //     //vowels is 0 constant is 1
    //     for(let left = 0; left < pattern.length; left ++){
    //         if()
    //     }
        
    //     if(source.slice(windowEnd - pattern.length, windowEnd) === pattern){
    //         res++;
    //     }
        
        
    // }
    
    return res;

}

//other excersie was about having an array of integers [1,2,3], and giving the sum  of all numbers concatenated.
//11,12,13,21,22,23,31,32,33. you can brute force it (n^2), 
//or what i didnt realize at the time was that i could've grabbed every n, raise it to the 10, and then just add single digits.
// like 10 + 10 +10, +20+20+20 +30 + 30 +30 + length(sum 1,2,3); just add zeros for bigger numbers.
// could be achieved with n complexity.