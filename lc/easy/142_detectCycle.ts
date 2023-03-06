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

//detect when we have a cycle a->b->c->d  and then d->the beggining a, a is the cycle.

function detectCycle(head: ListNode | null): ListNode | null {
    let passed = new Set();
    //can be with array too, and we use includes;

    while(head){
        if(passed.has(head)){
            return head;
        }
        passed.add(head);
        head = head.next;
    }

    return null;
    
};