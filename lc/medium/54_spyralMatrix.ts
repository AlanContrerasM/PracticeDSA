function spiralOrder(matrix: number[][]): number[] {
    const output: number[] = [];
    const MxN = matrix.length * matrix[0].length;
  
    while (output.length < MxN) {
      // left to right
      const top = matrix.shift();
      if (top) output.push(...top);
      // top to bottom
      for (let i = 0; i < matrix.length - 1; i++) {
        const el = matrix[i]?.pop();
        if (el) output.push(el);
      }
      // right to left
      const bottom = matrix.pop();
      if (bottom) output.push(...bottom.reverse());
      // bottom to top
      for (let i = matrix.length; i > 0; i--) {
        const el = matrix[i]?.shift();
        if (el) output.push(el);
      }
    }
    return output;
  }
//https://leetcode.com/problems/spiral-matrix/?envType=study-plan&id=level-2
//   Given an m x n matrix, return all elements of the matrix in spiral order.

//123
//456
//789
//first left to right, then top to bottom, right to left, bottom to top. repeat.


// Example 1:

// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [1,2,3,6,9,8,7,4,5]

// Example 2:

// Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
// Output: [1,2,3,4,8,12,11,10,9,5,6,7]

 

// Constraints:

//     m == matrix.length
//     n == matrix[i].length
//     1 <= m, n <= 10
//     -100 <= matrix[i][j] <= 100

