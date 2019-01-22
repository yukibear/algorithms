<?php
function numUniqueEmails($emails) {
    $uniqueEmails = array();
    foreach ($emails as $email) {
        if (isset($uniqueEmails[$email])) continue;

        $e = explode('@', $email);
        $e[0] = preg_replace('/\+.*/', '', $e[0]);
        $e[0] = preg_replace('/\./', '', $e[0]);
        $uniqueEmails[$e[0].'@'.$e[1]] = 0;
    }
    return count($uniqueEmails);
}

var_dump(numUniqueEmails(["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]));
