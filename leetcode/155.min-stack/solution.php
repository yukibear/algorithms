<?php
class MinStack {

    /** initialize your data structure here. */
    public function __construct() {

    }

    public function push($x) {

    }

    public function pop() {

    }

    public function top() {

    }

    public function getMin() {

    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * $obj = MinStack();
 * $obj->push($x);
 * $obj->pop();
 * $ret_3 = $obj->top();
 * $ret_4 = $obj->getMin();
 */
$minStack = new MinStack();
$minStack->push(-2);
$minStack->push(0);
$minStack->push(-3);
echo $minStack->getMin()."\n";  # Returns -3.
$minStack->pop();
echo $minStack->top()."\n";     # Returns 0.
echo $minStack->getMin()."\n";  # Returns -2.Vkkkk
