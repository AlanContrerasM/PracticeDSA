
//  Definition for singly-linked list.
 class ListNode {
     val: number
     next: ListNode | null
     constructor(val?: number, next?: ListNode | null) {
         this.val = (val===undefined ? 0 : val)
         this.next = (next===undefined ? null : next)
     }
 }
 

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    if(list1 === null) return list2;
    if(list2 === null) return list1;

    //we can use recurssion 
    if(list1.val <= list2.val){
        list1.next = mergeTwoLists(list1.next, list2);
        return list1;
    } else {
        list2.next =  mergeTwoLists(list1, list2.next);
        return list2;
    }

};

//Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

//Return the head of the merged linked list.

 