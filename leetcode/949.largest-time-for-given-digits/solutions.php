<?php
function largestTimeFromDigits($nums) {
    // 23:59
    foreach ($nums as $i => $num) {
        if ($num > 4) {
            if (count($minParts) === 2) return '';
            array_push($num, $minParts);
        } else {
            if ($num < 3) {
                array_shift($num, $hourParts);
            } else {
                array_push($num, $hourParts);
            }
        }
    }
    if (count($minParts) !== 2) {
        array_merge($minParts);
        $minParts = array_push($minParts, array_slice($hourParts, 2));
    }

    sort($minParts);


    return $hourParts[0].$hourParts[1].':'.$minParts[0].$minParts[1];
}

var_dump(largestTimeFromDigits([1,2,3,4]));
var_dump(largestTimeFromDigits([5,5,5,5]));
