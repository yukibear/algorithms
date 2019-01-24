<?php
/**
 * Given a non-empty array of integers, every element appears twice except for one. Find that single one.
 */
// 704ms
// It may be slow because array_keys seaches target number for each time
function singleNumber1($nums) {
    foreach ($nums as $num) {
        if (count(array_keys($nums, $num)) === 1) return $num;
    }
}
// 228ms
// It might be faster if it doesn't modify the target array
function singleNumber2($nums) {
    while(count($nums)) {
        $num = array_pop($nums);
        $index = array_search($num, $nums);
        if ($index === false) {
            return $num;
        } else {
            unset($nums[$index]);
        }
    }
}
// 3328ms...
function singleNumber3($nums) {
    $len = count($nums);
    $checked = array();
    for ($i = 0; $i < $len; $i++) {
        if (isset($checked[$nums[$i]])) continue;

        for ($j = $i + 1; $j < $len; $j++) {
            if ($nums[$i] === $nums[$j]) {
                $checked[$nums[$i]] = 0;
                continue 2;
            }
        }
        return $nums[$i];
    }
}
// 40ms. The best!!!
// It's much much better to iterate only once. Needed to think twice.
// Never loop multiple times as long as possible. I saied it again because it is very important.
function singleNumber($nums) {
    $len = count($nums);
    $noDuplicateList = array();
    for ($i = 0; $i < $len; $i++) {
        if (!isset($noDuplicateList[$nums[$i]])) {
            $noDuplicateList[$nums[$i]] = 0;
        } else {
            unset($noDuplicateList[$nums[$i]]);
        }
    }
    return array_keys($noDuplicateList)[0];
}
// 76ms
function singleNumber5($nums) {
    $l = count($nums);
    $result = 0;
    while ($l--) {
        $result ^= $nums[$l];
    }
    return $result;
}
var_dump(singleNumber([2,2,1]));
var_dump(singleNumber([4,1,2,1,2]));
var_dump(singleNumber([1,0,1]));
