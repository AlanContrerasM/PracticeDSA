/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function isValidBST(root: TreeNode | null): boolean {
    let isValid = true;

    const helper =(node: TreeNode | null, min: number, max: number)=>{
        if(node === null || !isValid) return;

        if(node.left !== null  ){
            if(node.left.val < node.val && node.left.val < max && node.left.val > min){
                helper(node.left, min, node.val< max? node.val : max);
            }else{
                console.log("left",node,min, max);
                isValid = false;
            }
        }
        if(node.right !== null ){
            
            if(node.right.val > node.val && node.right.val > min && node.right.val < max ){
                helper(node.right, node.val> min ? node.val : min, max);
            }else{
                console.log(node,min, max);
                isValid = false;
            }
        }
    }
    helper(root, -Infinity, Infinity);

    return isValid;

};

// Given the root of a binary tree, determine if it is a valid binary search tree (BST).

// A valid BST is defined as follows:

//     The left
//     subtree
//     of a node contains only nodes with keys less than the node's key.
//     The right subtree of a node contains only nodes with keys greater than the node's key.
//     Both the left and right subtrees must also be binary search trees.

 

// Example 1:

// Input: root = [2,1,3]
// Output: true

// Example 2:

// Input: root = [5,1,4,null,null,3,6]
// Output: false
// Explanation: The root node's value is 5 but its right child's value is 4.
