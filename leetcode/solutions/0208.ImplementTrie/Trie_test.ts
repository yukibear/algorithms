import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import Trie, { TrieNode } from "./Trie.ts";

Deno.test("0208. Implement Trie", () => {
  const trie = new Trie();

  trie.insert("apple");
  assertEquals(trie.search("apple"), true);
  assertEquals(trie.search("app"), false);
  assertEquals(trie.startsWith("app"), true);

  trie.insert("app");
  assertEquals(trie.search("app"), true);

  const trie2 = new Trie();
  trie2.insert("app");
  trie2.insert("apple");
  trie2.insert("beer");
  trie2.insert("add");
  trie2.insert("jam");
  trie2.insert("rental");
  assertEquals(trie2.search("apps"), false);
  assertEquals(trie2.search("app"), true);
  assertEquals(trie2.search("ad"), false);
  assertEquals(trie2.search("applepie"), false);
  assertEquals(trie2.search("rest"), false);
  assertEquals(trie2.search("jan"), false);
  assertEquals(trie2.search("rent"), false);
  assertEquals(trie2.search("beer"), true);
  assertEquals(trie2.search("jam"), true);
  assertEquals(trie2.startsWith("apps"), false);
  assertEquals(trie2.startsWith("app"), true);
  assertEquals(trie2.startsWith("ad"), true);
  assertEquals(trie2.startsWith("applepie"), false);
  assertEquals(trie2.startsWith("rest"), false);
  assertEquals(trie2.startsWith("jan"), false);
  assertEquals(trie2.startsWith("rent"), true);
  assertEquals(trie2.startsWith("beer"), true);
  assertEquals(trie2.startsWith("jam"), true);
});
