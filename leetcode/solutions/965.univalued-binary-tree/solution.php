<?php
/**
 * A binary tree is univalued if every node in the tree has the same value.
 *
 * Return true if and only if the given tree is univalued.
 */

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     public $val = null;
 *     public $left = null;
 *     public $right = null;
 *     function __construct($value) { $this->val = $value; }
 * }
 */
class Solution {
    public static $values = [];

    public function isUnivalTree($root) {
        self::compare($root);
        return (count(self::$values) === 1);
    }

    public static function compare($node) {
        if ($node !== null) {
            self::$values[$node->val] = 0;
            self::compare($node->left);
            self::compare($node->right);
        }
    }
}
 class TreeNode {
     public $val = null;
     public $left = null;
     public $right = null;
     function __construct($value) { $this->val = $value; }
 }
$node = new TreeNode(0);
var_dump(Solution::isUnivalTree($node));
