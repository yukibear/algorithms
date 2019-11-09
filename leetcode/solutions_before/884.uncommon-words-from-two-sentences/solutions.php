<?php
/**
 * We are given two sentences A and B.  (A sentence is a string of space separated words.  Each word consists only of lowercase letters.)
 * A word is uncommon if it appears exactly once in one of the sentences, and does not appear in the other sentence.
 *
 * Return a list of all uncommon words.
 *
 * You may return the list in any order.
 */
function uncommonFromSentences($A, $B) {
    $result = [];
    $history = [];
    $words = explode(' ', $A);
    foreach($words as $word) {
        if (!isset($history[$word])) {
            $history[$word] = true;
            $result[$word] = true;
        } else {
            $result[$word] = false;
        }
    }
    $words = explode(' ', $B);
    foreach($words as $word) {
        if (!isset($history[$word])) {
            $history[$word] = true;
            $result[$word] = true;
        } else {
            $result[$word] = false;
        }
    }
    $uniqList = [];
    foreach($result as $key => $isUniq) {
        if ($isUniq) $uniqList[] = $key;
    }
    return $uniqList;
}

var_dump(uncommonFromSentences("this apple is sweet", "this apple is sour"));
// Output: ["sweet","sour"]

var_dump(uncommonFromSentences("apple apple", "banana"));
// Output: ["banana"]
