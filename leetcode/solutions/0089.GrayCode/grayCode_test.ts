import { test } from 'https://deno.land/std/testing/mod.ts';
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import grayCode from './grayCode.ts';

test('0089. Gray Code', () => {
    assertEquals(grayCode(2), [0,1,3,2]);
    assertEquals(grayCode(0), [0]);
});