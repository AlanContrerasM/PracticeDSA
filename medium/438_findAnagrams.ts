function findAnagrams(s: string, p: string): number[] {
    if (s.length < p.length) return [];
    
    // Initialise maps
    let pMap = new Map();
    let examineMap = new Map();
    for (let i = 0; i < p.length; i++) {
        pMap.set(p[i], pMap.has(p[i]) ? pMap.get(p[i]) + 1 : 1);
        examineMap.set(s[i], examineMap.has(s[i]) ? examineMap.get(s[i]) + 1 : 1);
    }
    
    const res: number[] = [];

    let windowEnd = p.length;
    // Check whether two maps are same
    const equal = () => {
        for (let [char, count] of examineMap) if (pMap.get(char) !== count) return false;
        return true;
    };
    
    while (windowEnd < s.length) {
        if (equal()) res.push(windowEnd - p.length);
        
        // Slide the window to the right
        const aquireChar = s.charAt(windowEnd);
        examineMap.set(aquireChar, examineMap.has(aquireChar) ? examineMap.get(aquireChar) + 1 : 1);
        
        const releaseChar = s.charAt(windowEnd - p.length);
        if (examineMap.get(releaseChar) === 1) examineMap.delete(releaseChar);
        else examineMap.set(releaseChar, examineMap.get(releaseChar) - 1);
        
        windowEnd++;
    }
    if (equal()) res.push(windowEnd - p.length);
    
    return res;
}

// Given two strings s and p, return an array of all the start indices of p's anagrams in s. You may return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

// Example 1:

// Input: s = "cbaebabacd", p = "abc"
// Output: [0,6]
// Explanation:
// The substring with start index = 0 is "cba", which is an anagram of "abc".
// The substring with start index = 6 is "bac", which is an anagram of "abc".

// Example 2:

// Input: s = "abab", p = "ab"
// Output: [0,1,2]
// Explanation:
// The substring with start index = 0 is "ab", which is an anagram of "ab".
// The substring with start index = 1 is "ba", which is an anagram of "ab".
// The substring with start index = 2 is "ab", which is an anagram of "ab".

 

// Constraints:

//     1 <= s.length, p.length <= 3 * 104
//     s and p consist of lowercase English letters.

