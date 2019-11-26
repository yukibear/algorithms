import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import compress from "./compress.ts";

test("0443. String Compression", () => {
  assertEquals(compress(["a","a","b","b","c","c","c"]), ["a","2","b","2","c","3"]);
  assertEquals(compress(["a"]), ["a"]);
  assertEquals(compress(["a","b","b","b","b","b","b","b","b","b","b","b","b"]), ["a","b","1","2"]);
});
