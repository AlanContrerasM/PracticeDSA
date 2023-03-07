function findLongestPalindromeAtBegginingReturnRemainingString(s: string): string {
    let result = ";"
    //find prefixes that are palindromes, and start cutting them.
    // first find the longest one. 
    //dont cut palindromes that are one character, lik a,b,c,d, etc. cause why? lol
    
    const isPal = (s: string):boolean =>{
        if(s.split("").reverse().join("") === s){
            console.log(s);
            return true;
        } else {
            return false;
        }
    }
    
    //sliding window?
    let lastPalindrome =-1;
    let doAnotherPass = true;
    //lets start a for loop
    //we start on 1, since we dont wanna check for single character palyndromes
    while(doAnotherPass){
        doAnotherPass = false;
        for(let i =1; i <s.length; i++){
            if(isPal(s.substring(0,i+1))){
                lastPalindrome = i+1;
            }
            
        }
        //we went through whole string. 
        if(lastPalindrome >-1){
            // console.log(lastPalindrome)
            s= s.substring(lastPalindrome);
            // console.log(s)
            doAnotherPass= true;
            lastPalindrome = -1
        }
    }
    return s;

    
    
}




function newHashMap(queryType: string[], query: number[][]): number {
    //like our enums, ideally we set this in our class and as real enums. so they can be referenced from other places
    let insertQuery = "insert";
    let getQuery = "get";
    let addToKeyQuery = "addToKey";
    let addToValueQuery = "addToValue";
    
    let obj = {};
    let res = 0;
    let keyOffset= 0;
    let valueOffset = 0;

    
    for(let i =0; i < queryType.length; i ++){
        let q = query[i];
        
        switch(queryType[i]){
            case getQuery:
            //should be a single number
                // console.log(Number(q[0])- keyOffset);
                res+= obj[Number(q[0])- keyOffset] + valueOffset;
                // console.log(res);
                break;
            case addToKeyQuery:
                //add number to key;
                keyOffset += q[0];
                break;
            case addToValueQuery:
                //add number to all values in map.
                // Object.keys(obj).forEach(v=>{
                //     obj[v] = obj[v] + q[0];
                // })
                valueOffset += q[0];
                break;
            case insertQuery:
            default:
                //two numbers in q
                obj[q[0] - keyOffset] = q[1] - valueOffset;
                break;
        }
        // console.log(queryType[i], query[i], obj);
    }
    
    
    return res;
}
// ou've created a new programming language, and now you've decided to add hashmap support to it. Actually you are quite disappointed that in common programming languages it's impossible to add a number to all hashmap keys, or all its values. So you've decided to take matters into your own hands and implement your own hashmap in your new language that has the following operations:insert x y - insert an object with key x and value y.
// get x - return the value of an object with key x.
// addToKey x - add x to all keys in map.
// addToValue y - add y to all values in map.
// To test out your new hashmap, you have a list of queries in the form of two arrays: queryTypes contains the names of the methods to be called (eg: insert, get, etc), and queries contains the arguments for those methods (the x and y values).
// Your task is to implement this hashmap, apply the given queries, and to find the sum of all the results for get operations.
// Example
// For queryType = ["insert", "insert", "addToValue", "addToKey", "get"] and query = [[1, 2], [2, 3], [2], [1], [3]], the output should be hashMap(queryType, query) = 5.
// The hashmap looks like this after each query:
// 1 query: {1: 2}
// 2 query: {1: 2, 2: 3}
// 3 query: {1: 4, 2: 5}
// 4 query: {2: 4, 3: 5}
// 5 query: answer is 5
// The result of the last get query for 3 is 5 in the resulting hashmap.
// For queryType = ["insert", "addToValue", "get", "insert", "addToKey", "addToValue", "get"] and query = [[1, 2], [2], [1], [2, 3], [1], [-1], [3]], the output should be hashMap(queryType, query) = 6.
// The hashmap looks like this after each query:
// 1 query: {1: 2}
// 2 query: {1: 4}
// 3 query: answer is 4
// 4 query: {1: 4, 2: 3}
// 5 query: {2: 4, 3: 3}
// 6 query: {2: 3, 3: 2}
// 7 query: answer is 2
// The sum of the results for all the get queries is equal to 4 + 2 = 6.
// Input/Output
// [execution time limit] 4 seconds (py3)
// [input] array.string queryType
// Array of query types. It is guaranteed that each queryType[i] is either "addToKey", "addToValue", "get", or "insert".
// Guaranteed constraints:
// 1 ≤ queryType.length ≤ 105.
// [input] array.array.integer query
// Array of queries, where each query is represented either by two numbers for insert query or by one number for other queries. It is guaranteed that during all queries all keys and values are in the range [-109, 109].
// Guaranteed constraints:
// query.length = queryType.length,
// 1 ≤ query[i].length ≤ 2.
// [output] integer64
// The sum of the results for all get queries.