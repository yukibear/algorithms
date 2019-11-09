<?php
/**
 * You're given strings J representing the types of stones that are jewels, and S representing the stones you have.  Each character in S is a type of stone you have.  You want to know how many of the stones you have are also jewels.
 *
 * The letters in J are guaranteed distinct, and all characters in J and S are letters. Letters are case sensitive, so "a" is considered a different type of stone from "A".
 */
function numJewelsInStones($J, $S) {
    $stoneCounts = [];
    for($i = 0; $i < strlen($S); $i++) {
        if (isset($stoneCounts[$S[$i]])) {
            $stoneCounts[$S[$i]]++;
        } else {
            $stoneCounts[$S[$i]] = 1;
        }
    }
    $jewelCount = 0;
    for($i = 0; $i < strlen($J); $i++) {
        if (isset($stoneCounts[$J[$i]])) $jewelCount += $stoneCounts[$J[$i]];
    }
    return $jewelCount;
}

echo numJewelsInStones("aA", "aAAbbbb")."\n"; // should return 2
echo numJewelsInStones("z", "ZZ")."\n"; // should return 0
