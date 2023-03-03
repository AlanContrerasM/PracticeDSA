function characterReplacement(s: string, k: number): number {
    let left = 0;
    let freq = {};
    let maxFreq = 0;
    let longest = 0;
    
    for (let right = 0; right < s.length; right++) {
		// If character is already present in the dictionary, we increase its count, else we initialise the entry with 1.
        freq[s[right]] = freq[s[right]] ? freq[s[right]] + 1 : 1 ;
		
		// We re compute the max frequency
        maxFreq = Math.max(maxFreq, freq[s[right]]);
        
        // We move our window from the left till we are in range of the k replacements
		while (right - left + 1 - maxFreq > k) {
            freq[s[left]]--;
            left++;
        }
        
		//We compute the longest repeating character after performing the sliding window technique
        longest = Math.max(longest, right-left+1);
    }
    return longest;

};

//You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

// Return the length of the longest substring containing the same letter you can get after performing the above operations.

 

// Example 1:

// Input: s = "ABAB", k = 2
// Output: 4
// Explanation: Replace the two 'A's with two 'B's or vice versa.

// Example 2:

// Input: s = "AABABBA", k = 1
// Output: 4
// Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
// The substring "BBBB" has the longest repeating letters, which is 4.

 

// Constraints:

//     1 <= s.length <= 105
//     s consists of only uppercase English letters.
//     0 <= k <= s.length

