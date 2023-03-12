//this works by every multiplication of base digits, we store in array at correct index. ob base power 10
// exmaple, 72*23
//3*2 = 6, is index 0;
//[6]
//3*7 = 21, 1 is index 1, 2 would be idnex 2
// [6,1,2]
// 2*2 = 4, that is index 1, 
//  [6,5,2]
// 2*7 = 14, in index 2, and 3
// [6,5,6,1]
// reverse array and join. answer 1656

function multiply(num1: string, num2: string): string {
    //numbers are positive, we need to multiply them. 
    //dont use numbers library and dont cast?
    //edge cases
    if(num1 === "0" || num2 === "0") return "0";
    if(num1 === "1" || num2 === "1") return num1 > num2? num1: num2;

    let result: number[] = [];
    //just easier to follow numbers, but no need for reverse; can further optimize
    num1 = num1.split("").reverse().join("");
    num2 = num2.split("").reverse().join("");

    //keep adding in correct position of array.
    const helper = (n: number, index):number =>{
        if(result[index] ==undefined){
            result.push(0);
        }  
        let nextLevel = 0;
        let current = result[index];
        if(n> 9){
            nextLevel += (n - (n%10))/10;
            n = n%10;
        }
        let newSum  =current + n;
        if(newSum > 9){
            nextLevel += (newSum -(newSum%10))/10;
            result[index]= newSum %10;
        }else{
            result[index]= newSum;
        }
        return nextLevel;
    }

    for(let i=0; i < num1.length; i++){
        let a = (num1.charCodeAt(i) - "0".charCodeAt(0)) ;
        for(let j=0; j < num2.length; j++){
            //get number and multiply for base 10, 100, etc. depending on position.
            
            let b = (num2.charCodeAt(j) - "0".charCodeAt(0));
            let r = a*b;
            let index = i+j;
            while(true){
                r = helper(r, index);
                if(r <1){
                    break;
                }
                index++;
            }
                   
        }
           
    }
    return result.reverse().join("");

    //bigInt issue again
    //just easier to follow numbers, but no need for reverse; can further optimize
    // num1 = num1.split("").reverse().join("");
    // num2 = num2.split("").reverse().join("");

    // for(let i=0; i < num1.length; i++){
    //     let a = (num1.charCodeAt(i) - "0".charCodeAt(0)) ;
    //     for(let j=0; j < num2.length; j++){
    //         //get number and multiply for base 10, 100, etc. depending on position.
            
    //         let b = (num2.charCodeAt(j) - "0".charCodeAt(0));
    //         console.log(a,b, a*b *  ((10 ** i) * (10**j)))                
    //         result += a*b *  ((10 ** i) * (10**j));          
    //     }
           
    // }
    // return result + "";
    //Doesnt work with bigInts
    // let n1 = 0;
    // let nMultiplier = 0;
    // let n2 = 0;

    // for(let i = num1.length -1; i >=0; i--){
    //     //get number and multiply for base 10, 100, etc. depending on position.
    //     let temp = (num1.charCodeAt(i) - "0".charCodeAt(0)) 
    //                     * (10 **(num1.length-1 -i));
    //     if(temp ===0){
    //         nMultiplier++;
    //     } else{
    //         nMultiplier = 0;
    //         n1+= temp *(10**nMultiplier);
    //     }                
    // }

    // for(let i = num1.length -1; i >=0; i--){
    //     //get number and multiply for base 10, 100, etc. depending on position.
    //     let temp = (num1.charCodeAt(i) - "0".charCodeAt(0)) 
    //                     * (10 **(num1.length-1 -i));
    //     if(temp ===0){
    //         nMultiplier++;
    //     } else{
    //         nMultiplier = 0;
    //         n1+= temp *(10**nMultiplier);
    //     }                
    // }
    // nMultiplier =0;

    // for(let i = num2.length -1; i >=0; i--){
    //     let temp = (num2.charCodeAt(i) - "0".charCodeAt(0)) 
    //                     * (10 **(num2.length-1 -i));
    //     if(temp ===0){
    //         nMultiplier++;
    //     } else{
    //         nMultiplier = 0;
    //         n2+= temp *(10**nMultiplier);
    //     }  
    // }
    // console.log(n1, n2)
    // return (n1*n2)+"";

};

// /https://leetcode.com/problems/multiply-strings/description/?envType=study-plan&id=level-2

// iven two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.

// Note: You must not use any built-in BigInteger library or convert the inputs to integer directly.

 

// Example 1:

// Input: num1 = "2", num2 = "3"
// Output: "6"

// Example 2:

// Input: num1 = "123", num2 = "456"
// Output: "56088"

 

// Constraints:

//     1 <= num1.length, num2.length <= 200
//     num1 and num2 consist of digits only.
//     Both num1 and num2 do not contain any leading zero, except the number 0 itself.
