function longestPalindrome(s: string): number {
    let chars = <{string:number}>{};
    s.split("").forEach(v=>{
        if(chars[v] != undefined){
            chars[v] ++;
        } else{
            chars[v] = 1;
        }
    })
    let frequencies = Object.values(chars);
    console.log(frequencies);
    //for a palindrome we can only have one letter that's either 1 frequency, or an odd number.
    let hasSingle = false;

    return frequencies.reduce((prev: number,curr: number): number=>{
        if(!hasSingle){
            if(curr%2>0){
                hasSingle = true;
                return prev+= 1 + curr-1;
            }else{
                return prev += curr;
            }
        }else{
            return prev+= (curr%2>0 ? curr -1: curr);
        }
    }, 0);

};

// Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

// Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

 

// Example 1:

// Input: s = "abccccdd"
// Output: 7
// Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.

// Example 2:

// Input: s = "a"
// Output: 1
// Explanation: The longest palindrome that can be built is "a", whose length is 1.
