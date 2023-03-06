
//   Definition for singly-linked list.
// class ListNode {
//     val: number
//     next: ListNode | null
//     constructor(val?: number, next?: ListNode | null) {
//         this.val = (val===undefined ? 0 : val)
//         this.next = (next===undefined ? null : next)
//     }
// }
 

function middleNode(head: ListNode | null): ListNode | null {
    let middleNode = head;
    let fasterNode = head;

    while(middleNode && fasterNode && fasterNode.next){
        middleNode = middleNode.next;
        fasterNode = fasterNode.next.next;
    }

    return middleNode;
};