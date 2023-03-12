function longestCommonPrefix(strs: string[]): string {
    let index = 0;
    let prefix = "";

    let temp;
    for(let i =0; i <strs.length; i ++){
        // console.log(i, index);
        if(strs[i][index] === undefined) break;
        if(i==0) temp = strs[0][index];
        if(temp !== strs[i][index]) break;
        // console.log(temp)
        if(temp === strs[i][index] && i === strs.length-1){
            prefix += temp;
            index ++;
            i =-1;
        }
    }
    

    return prefix.length >0 ? prefix : "";

};

// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

 

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"

// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

 

// Constraints:

//     1 <= strs.length <= 200
//     0 <= strs[i].length <= 200
//     strs[i] consists of only lowercase English letters.

