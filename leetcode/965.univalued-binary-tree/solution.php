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
    public function isUnivalTree($root) {
        $res = self::compare($root);
        return ($res !== false);
    }

    public static function compare($node) {
        $left = $right = null;
        if (isset($node->left)) $left = self::compare($node->left);
        if (isset($node->right)) $right = self::compare($node->right);
        if ($left === false || $right === false) return false;

        if ($left === null) {
            if ($right === null) return $node->val;
            if ($right === $node->val) return $node->val;
            return false;
        } elseif ($right === null) {
            if ($left === $node->val) return $node->val;
            return false;
        } elseif ($right === $left && $left === $node->val) {
            return $node->val;
        } else {
            return false;
        }
    }
}
