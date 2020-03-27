import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import {
  buildMaxHeap,
  buildMinHeap,
  popMaxHeap,
  popMinHeap,
  pushMaxHeap,
  pushMinHeap,
} from "./Heap.ts";

Deno.test("Max Heap", () => {
  const arr1 = [2, 7, 4, 1, 8, 1];

  buildMaxHeap(arr1);
  assertEquals(popMaxHeap(arr1), 8);
  assertEquals(popMaxHeap(arr1), 7);

  pushMaxHeap(arr1, 7);
  assertEquals(arr1[0], 7);
  pushMaxHeap(arr1, 6);
  assertEquals(arr1[0], 7);

  const arr2 = [1, 2, 3, 4, 7, 9, 10, 8, 16, 14];
  buildMaxHeap(arr2);
  assertEquals(popMaxHeap(arr2), 16);
  assertEquals(popMaxHeap(arr2), 14);

  pushMaxHeap(arr2, 7);
  assertEquals(arr2[0], 10);
  pushMaxHeap(arr2, 6);
  assertEquals(arr2[0], 10);
  pushMaxHeap(arr2, 16);
  assertEquals(arr2[0], 16);
  pushMaxHeap(arr2, 14);
  assertEquals(arr2[0], 16);
});

Deno.test("Min Heap", () => {
  const arr1 = [2, 7, 4, 1, 8, 1];
  buildMinHeap(arr1);
  assertEquals(popMinHeap(arr1), 1);
  assertEquals(popMinHeap(arr1), 1);
  assertEquals(popMinHeap(arr1), 2);

  pushMinHeap(arr1, 7);
  assertEquals(arr1[0], 4);
  pushMinHeap(arr1, 6);
  assertEquals(arr1[0], 4);
  pushMinHeap(arr1, 3);
  assertEquals(arr1[0], 3);
  pushMinHeap(arr1, 4);
  assertEquals(arr1[0], 3);

  const arr2 = [1, 2, 3, 4, 7, 9, 10, 8, 16, 14];
  assertEquals(popMinHeap(arr2), 1);
  assertEquals(popMinHeap(arr2), 2);
  assertEquals(popMinHeap(arr2), 3);

  pushMinHeap(arr2, 7);
  assertEquals(arr2[0], 4);
  pushMinHeap(arr2, 6);
  assertEquals(arr2[0], 4);
  pushMinHeap(arr2, 3);
  assertEquals(arr2[0], 3);
  pushMinHeap(arr2, 4);
  assertEquals(arr2[0], 3);
});
