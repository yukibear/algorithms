import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import ProductOfNumbers from "./ProductOfNumbers.ts";

Deno.test("1352. Product of the Last K Numbers", () => {
  const productOfNumbers = new ProductOfNumbers();
  productOfNumbers.add(3);
  productOfNumbers.add(0);
  productOfNumbers.add(2);
  productOfNumbers.add(5);
  productOfNumbers.add(4);
  assertEquals(productOfNumbers.getProduct(2), 20);
  assertEquals(productOfNumbers.getProduct(3), 40);
  assertEquals(productOfNumbers.getProduct(4), 0);
  productOfNumbers.add(8);
  assertEquals(productOfNumbers.getProduct(2), 32);
});
