/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function reverseList(head: ListNode | null): ListNode | null {
    if(head === null) return null;
    let prev: ListNode| null = null;

    // 1 head ->prev
    //-> 2
    //-> 3

    while(head){
        // console.log(head)
        let cur = head
        head = head.next
        cur.next = prev
        prev = cur
    }
    

    return prev;

};