import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import compress from "./compress.ts";

Deno.test("0443. String Compression", () => {
  const input_1 = ["a", "a", "b", "b", "c", "c", "c"];
  const expected_1 = ["a", "2", "b", "2", "c", "3"];
  assertEquals(compress(input_1), expected_1.length);
  assertEquals(input_1.slice(0, expected_1.length), expected_1);

  const input_2 = [
    "a",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b"
  ];
  const expected_2 = ["a", "b", "1", "2"];
  assertEquals(compress(input_2), expected_2.length);
  assertEquals(input_2.slice(0, expected_2.length), expected_2);

  const input_3 = ["a"];
  const expected_3 = ["a"];
  assertEquals(compress(input_3), expected_3.length);
  assertEquals(input_3.slice(0, expected_3.length), expected_3);
});
