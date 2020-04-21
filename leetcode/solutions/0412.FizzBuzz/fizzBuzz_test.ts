import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import fizzBuzz from "./fizzBuzz.ts";

Deno.test("0412. Fizz Buzz", () => {
  assertEquals(fizzBuzz(15), [
    "1",
    "2",
    "Fizz",
    "4",
    "Buzz",
    "Fizz",
    "7",
    "8",
    "Fizz",
    "Buzz",
    "11",
    "Fizz",
    "13",
    "14",
    "FizzBuzz"
  ]);
});
