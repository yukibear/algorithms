<?php
/**
 * 初期のコード
 *
 * [ダメなところ]
 * ペア値の検索でarray_keysを使い、毎回配列内のすべての値を探してしまっている
 * 最速のコードでは探している値のリストを作ることで、isset()1発で該当する値の存在とindexを取得している
 *
 * [考察]
 * 始めはBrute Forceで二重ループから入ってしまった
 * for() { for() {} } だとO(n^2)となり超重くなる。イケてない
 * あまりに遅いので次はin_arrayやarray_searchで見つけられないかトライした。
 *
 * in_array -> booleanを返すので、indexを取得できず使えない
 * array_search($needle, $heystack) -> [3, 3]のような引数の場合、見つけた最初のキーを返してしまうのでNG
 * twoSum([3, 3], 6) -> [0, 0] となってしまう。欲しい正解は[0, 1]
 *
 * array_keys($heystack, $needle) は必ず見つけた値の配列を返す
 * 悪くはないが既に通過した値のindexも返してくるので、$array_keys_result[-1]が正解になるがコードが複雑になるためNG
 * ※結局このコードでは正常動作までたどり着けていない
 */
function twoSum_old($nums, $target) {
    // ループが1度なら別に$countを作らなくても評価は1度のみなのでいらない
    // むしろ2度評価される2重ループはO(n^2)なので避けるべきであり、そういう意味でもはや書いてはいけないコードの1種かもしれない
    $count = count($nums);
    for($i= 0; $i < $count-1; $i++) {
        $pair = $target - $nums[$i];
        if ($j = array_keys($nums, $pair)) {
            if ($j[0] !== $i) {
                return array($i, $j[0]);
            } elseif(isset($j[1])) {
                return array($i, $j[1]);
            }
        }
    }
}

/**
 * 最終的なコード
 *
 * もしかしてJavaのMapとかはこれを言語側で実装しているのかな？
 */
function twoSum2($nums, $target)
{
    $minusresult = [];
    $count = count($nums);
    for ($i = 0; $i < $count; $i++) {
        $minus = $target - $nums[$i];

        // issetで探せているので早い
        if (isset($minusresult[$nums[$i]])) {
            return array($i, $minusresult[$nums[$i]]);
        }

        $minusresult[$minus] = $i;
    }
}

function twoSum ($nums, $target) {
    for ($i = 0; $i < $nums; $i++) {
        if ($nums[i-1] + $nums[i] === $target) return [$i-1, $i];
    }
}

var_dump(twoSum([0,1,2,4,9], 10));
