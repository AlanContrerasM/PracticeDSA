

//NOTE We could probably do it with O(1) space, by starting from the end, then we know, if any characters will be ignored or not.
//and then assigning stuff
function backspaceCompare(s: string, t: string): boolean {
    let sIndex = s.length - 1;
    let tIndex = t.length - 1;
    
    // Start from end of strings and compare the surviving characters (those that don't get backspaced)
    while (sIndex >= 0 || tIndex >= 0) {
        
        // Go to index of next surviving character in s
        if (s.charAt(sIndex) === '#') {
            let charactersToSkip = 1;
            while (charactersToSkip >= 0) {
                sIndex--;
                if (s.charAt(sIndex) === '#')
                    charactersToSkip++;
                else
                    charactersToSkip--;
            }
        }
        
        // Go to index of next surviving character in t
        if (t.charAt(tIndex) === '#') {
            let charactersToSkip = 1;
            while (charactersToSkip >= 0) {
                tIndex--;
                if (t.charAt(tIndex) === '#')
                    charactersToSkip++;
                else
                    charactersToSkip--;
            }
        }
        
        // If the surviving characters do not match, the strings are different
        if (s.charAt(sIndex) !== t.charAt(tIndex)) return false;
        
        sIndex--;
        tIndex--;
    }
    return true;
};


// function backspaceCompareOriginal(s: string, t: string): boolean {
//     let back = "#";
//     let first = [];
//     let second = [];
//     for(let i =0; i <s.length; i++){
//         if(s[i] !== back){
//             // @ts-ignore
//             first.push(s[i])
//         }else{
//             first.pop();
//         }
//     }

//     for(let i =0; i <t.length; i++){
//         if(t[i] !== back){
//             // @ts-ignore
//             second.push(t[i])
//         }else{
//             second.pop();
//         }
//     }

//     return first.join("") === second.join("");
// };

// Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.

// Note that after backspacing an empty text, the text will continue empty.

 

// Example 1:

// Input: s = "ab#c", t = "ad#c"
// Output: true
// Explanation: Both s and t become "ac".

// Example 2:

// Input: s = "ab##", t = "c#d#"
// Output: true
// Explanation: Both s and t become "".

// Example 3:

// Input: s = "a#c", t = "b"
// Output: false
// Explanation: s becomes "c" while t becomes "b".

 

// Constraints:

//     1 <= s.length, t.length <= 200
//     s and t only contain lowercase letters and '#' characters.

 