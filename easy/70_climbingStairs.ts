function climbStairs(n: number): number {
    //staircase has n steps, can take 1 or 2 steps at a time.
    //the pattern will be 1->1, 2-> 2, 3-> 12,111,21 4-> 1111,121,211,112  , 
    let a: number = 1;
    let b: number = 1;
    //for every number after 2 we basically take previous options
    //1,2,3,5,8,13
    // 3-> 3 4-> 5, 5-> 8
    for(let i =2; i<=n; i++){
        let temp = a+b;
        a =b;
        b=temp;

    }
    return b;

    //5 -> 
    //Try number 1, too complex, big time complexity, 
    //so basically find all possible ways, you can reach the top.
    //this can be seen as a tree? always left and right, to 1 and 2 , 
    //so find all number of options at the bottom level
    // let differentWaysToHeaven = 0;
    // const helper = (step)=>{
    //     if(step===n){
    //         differentWaysToHeaven++;
    //         return;
    //     }else if( step >n){
    //         return;
    //     }
    //     helper(step+1);
    //     helper(step+2);
    // }
    // helper(0);
    // return differentWaysToHeaven;
};

// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

 

// Example 1:

// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps

// Example 2:

// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

 

// Constraints:

//     1 <= n <= 45

