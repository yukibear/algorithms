<?php
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
