import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import backspaceCompare from "./backspaceCompare.ts";

Deno.test("0844. Backspace String Compare", () => {
  type test = [[string, string], boolean];
  const tests: test[] = [
    [["", ""], true],
    [["#a", "##b"], false],
    [["#", "####"], true],
    [["###a#a", "b#a"], true],
    [["###a#a", "a#b"], false],
    [["ab#c", "ad#c"], true],
    [["ab##", "c#d#"], true],
    [["a##c", "#a#c"], true],
    [["a#c", "b"], false],
    [["bxj##tw", "bxo#j##tw"], true],
    [["bbbextm", "bbb#extm"], false],
    [["ab#c", "ad#c"], true],
    [["nzp#o#g", "b#nzp#o#g"], true],
  ];

  for (const [args, want] of tests) {
    assertEquals(backspaceCompare(...args), want);
  }
});
