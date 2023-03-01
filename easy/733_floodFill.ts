function floodFill(image: number[][], sr: number, sc: number, color: number): number[][] {
    // so we can only move and change +/- 1 from starting pixel, that have same starting pixel
    //@ts-ignore
    let targetColor:number = image[sr][sc];
    let maxR = image.length -1;
    let maxC = image[0].length-1;

    const helper = (r: number, c: number) =>{
        //if r and c are outside of image bounds return.
        if(r < 0 || c < 0 || r > maxR || c >maxC) return;
        //if color of position different than target
        if(image[r][c] !== targetColor) return;
        if(image[r][c] === color) return;
        image[r][c] = color;

        //do the same movements for all 4 direction
        helper( r+1,c); //up
        helper( r-1,c); //down
        helper( r,c+1); //right
        helper( r,c-1); //left
    }
    helper( sr,sc)
    return image;
};

// An image is represented by an m x n integer grid image where image[i][j] represents the pixel value of the image.

// You are also given three integers sr, sc, and color. You should perform a flood fill on the image starting from the pixel image[sr][sc].

// To perform a flood fill, consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same color), and so on. Replace the color of all of the aforementioned pixels with color.

// Return the modified image after performing the flood fill.

 

// Example 1:

// Input: image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, color = 2
// Output: [[2,2,2],[2,2,0],[2,0,1]]
// Explanation: From the center of the image with position (sr, sc) = (1, 1) (i.e., the red pixel), all pixels connected by a path of the same color as the starting pixel (i.e., the blue pixels) are colored with the new color.
// Note the bottom corner is not colored 2, because it is not 4-directionally connected to the starting pixel.

// Example 2:

// Input: image = [[0,0,0],[0,0,0]], sr = 0, sc = 0, color = 0
// Output: [[0,0,0],[0,0,0]]
// Explanation: The starting pixel is already colored 0, so no changes are made to the image.

 

// Constraints:

//     m == image.length
//     n == image[i].length
//     1 <= m, n <= 50
//     0 <= image[i][j], color < 216
//     0 <= sr < m
//     0 <= sc < n

