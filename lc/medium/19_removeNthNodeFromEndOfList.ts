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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    // if(n <=1) return null;
    if(head == null || head.next ) return null;
    let list: any[] = [];
    let temp: any = head;
    while(temp){
        list.push(temp);
        temp = temp.next;
    }

    if(list[list.length-n-1]){
        list[list.length-n-1].next = list[list.length-n+1] ?? null;
    } else{
        head = list[list.length-n+1];
    }
    // console.log(head);
    

    return head;

};

//n is counted from the end of list. not beginning
// Given the head of a linked list, remove the nth node from the end of the list and return its head.

 

// Example 1:

// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]

// Example 2:

// Input: head = [1], n = 1
// Output: []

// Example 3:

// Input: head = [1,2], n = 1
// Output: [1]

 

// Constraints:

//     The number of nodes in the list is sz.
//     1 <= sz <= 30
//     0 <= Node.val <= 100
//     1 <= n <= sz
