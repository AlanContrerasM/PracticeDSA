
class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

type TreeNodeQueue = {
    node: TreeNode , level: number
}


function levelOrder(root: TreeNode | null): number[][] {
    let result: number[][] = [];
    let queue: TreeNodeQueue[] = [];
    if(root!== null){
        queue.push({node: root, level: 0});
    }

    while(queue.length >0){
        // @ts-ignore
        let {node, level} = queue.shift();

        if(result[level]=== undefined){
            result[level] = []
        }
        result[level].push(node.val);

        if(node.left !== null){
            queue.push({node: node.left, level: level+1})
        }
        if(node.right !== null){
            queue.push({node: node.right, level: level+1})
        }
    }

    return result;

};

