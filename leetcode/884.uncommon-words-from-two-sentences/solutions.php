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

}

echo uncommonFromSentences("this apple is sweet", "this apple is sour")."\n";
// Output: ["sweet","sour"]

echo uncommonFromSentences("apple apple", "banana")."\n";
// Output: ["banana"]
