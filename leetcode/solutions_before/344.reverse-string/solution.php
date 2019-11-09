<?php
function reverseString1(&$s) {
    $len = count($s);
    foreach ($s as $i => $char) {
        $s[$len - $i] = $char;
    }
    unset($s[0]);
}
// 168ms
function reverseString(&$s) {
    $len = count($s);
    $max = floor($len/2);
    $len--;
    for ($i = 0; $i < $max; $i++) {
        $j = $len - $i;
        $tmp = $s[$i];
        $s[$i] = $s[$j];
        $s[$j] = $tmp;
    }
}
$input1 = ['h','e','l','l','o'];
reverseString($input1);
var_dump($input1);

$input2 = ['H','a','n','n','a','h'];
reverseString($input2);
var_dump($input2);

