<?php
class MinStack {

    /** initialize your data structure here. */
    public function __construct() {
        $this->minHistory = [];
        $this->minHistoryLastIndex = -1;
        $this->array = [];
        $this->arrayLastIndex = -1;
    }

    public function push($x) {
        $this->arrayLastIndex++;
        $this->array[$this->arrayLastIndex] = $x;

        if ($this->minHistoryLastIndex === -1 || $this->minHistory[$this->minHistoryLastIndex] >= $x) {
            $this->minHistory[$this->minHistoryLastIndex+1] = $x;
            $this->minHistoryLastIndex++;
        }
    }

    public function pop() {
        if ($this->arrayLastIndex < 0) return null;

        $val = $this->array[$this->arrayLastIndex];
        unset($this->array[$this->arrayLastIndex]);
        $this->arrayLastIndex--;

        if ($this->minHistory[$this->minHistoryLastIndex] === $val) {
            unset($this->minHistory[$this->minHistoryLastIndex]);
            $this->minHistoryLastIndex--;
        }
        return $val;
    }

    public function top() {
        if ($this->arrayLastIndex < 0) return null;
        return $this->array[$this->arrayLastIndex];
    }

    public function getMin() {
        return $this->minHistory[$this->minHistoryLastIndex];
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
$minStack->push(0);
$minStack->push(1);
$minStack->push(0);
echo $minStack->getMin()."\n";  # Returns 0
$minStack->pop();
echo $minStack->getMin()."\n";  # Returns 0
