<?php
/**
 * Definition for a singly-linked list.
 * class ListNode {
 *     public $val = 0;
 *     public $next = null;
 *     function __construct($val) { $this->val = $val; }
 * }
 */
class Solution {

    /**
     * @param Integer $intersectVal
     * @param ListNode $listA
     * @param ListNode $listB
     * @param Integer $skipA
     * @param Integer $skipB
     * @return ListNode
     */
    function getIntersectionNode($intersectVal, $listA, $listB, $skipA, $skipB) {
        $a = $listA;
        $b = $listB;
        while ($a !== $b) {
            $a = $a === null ? $listB : $a->next;
            $b = $b === null ? $listA : $b->next;
        }
        return $a;
    }
}
