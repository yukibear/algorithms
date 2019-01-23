<?php
function largestTimeFromDigits_old($nums) {
    // [1,2,3,4] -> 23:41
    $hourParts = $minParts = array();
    foreach ($nums as $i => $num) {

        // 時間に使えない数字は分として保持するアプローチ
        if ($num > 4) {
            if (count($minParts) === 2) return '';
            array_push($minParts, $num);
        } else {
            array_push($hourParts, $num);
        }
    }

    if (count($minParts) !== 2) {
        $minParts += array_slice($hourParts, 2);
    }

    if ($minParts[0] > 5) {
        if ($minParts[1] > 5) return '';
        $min = $minParts[1].$minParts[0];
    } elseif ($minParts[1] > 5) {
        $min = $minParts[0].$minParts[1];
    } else {
        $min1 = $minParts[0].$minParts[1];
        $min2 = $minParts[1].$minParts[0];
        $min = ($min1 > $min2) ? $min1 : $min2;
    }

    $hour1 = (int)$hourParts[0].$hourParts[1];
    $hour2 = (int)$hourParts[1].$hourParts[0];
    if ($hour1 > 23) {
        if ($hour2 > 23) return '';
        $hour = $hour2;
    } elseif ($hour2 > 23) {
        $hour = $hour1;
    } else {
        $hour = ($hour1 > $hour2) ? $hour1 : $hour2;
    }

return $hour.':'.$min;
    // $min1 = (int)$minParts[0].$minParts[1];
    // $min2 = (int)$minParts[1].$minParts[0];
    // if ($min1 > 59) {
    //     if ($min2 > 59) return '';
    //     $min = $min2;
    // } elseif ($min2 > 59) {
    //     $min = $min1;
    // } elseif ($min1 > $min2) {
    //     $min = $min1;
    // } else {
    //     $min = $min2;
    // }

    // if ($minParts[0] > $minParts[1]) {
    //     $min = $minParts[1].$minParts[0];
    //     $min = $minParts[0].$minParts[1];
    // }

    // sort($minParts);


    // return $hourParts[0].$hourParts[1].':'.$minParts[0].$minParts[1];
}

function largestTimeFromDigits_old($nums) {
    /**
     * 始めに時間のために23までの最大値を求める
     * その後の残りで59までの最大値を求める
     * 失敗したら時間を修正していく
     */
    if ($idx = array_search(2, $nums) !== -1) {
        $nums[$idx];
        unset $nums[$idx];
        for ($i = 3; $i > -1; $i--) {
            if ($idx = array_search($i, $nums) !== -1) {
                $nums[$i];
            }
        }
    }

    $nums = array_search(2, $nums);
    $nums = array_search(1, $nums);
    $nums = array_search(0, $nums);
}

var_dump(largestTimeFromDigits([1,2,3,4]));
var_dump(largestTimeFromDigits([5,5,5,5]));
