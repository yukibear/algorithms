import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import groupAnagrams from "./groupAnagrams.ts";

const sorter = (arr1: string[], arr2: string[]) => {
  arr1.sort();
  arr2.sort();

  if (arr1.length !== arr2.length) {
    return arr1.length - arr2.length;
  }

  for (const [i, str1] of arr1.entries()) {
    const str2 = arr2[i];

    for (let i = 0; i < str1.length; i++) {
      if (str1[i] !== str2[i]) {
        return str1.charCodeAt(i) - str2.charCodeAt(i);
      }
    }
  }

  return 0;
};

Deno.test("0049. Group Anagrams", () => {
  const result = groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
  result.sort(sorter);

  const expected = [["ate", "eat", "tea"], ["nat", "tan"], ["bat"]];
  expected.sort(sorter);

  assertEquals(result, expected);
});
