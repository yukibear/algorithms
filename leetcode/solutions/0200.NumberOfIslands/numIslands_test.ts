import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import numIslands from "./numIslands.ts";

Deno.test("0200. Number of Islands", () => {
  let grid = [
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"]
  ];
  assertEquals(numIslands(grid), 1);

  grid = [
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"]
  ];
  assertEquals(numIslands(grid), 3);

  grid = [
    ["1", "1", "1"],
    ["0", "1", "0"],
    ["1", "1", "1"]
  ];
  assertEquals(numIslands(grid), 1);

  grid = [
    ["1", "0", "1", "1", "1"],
    ["1", "0", "1", "0", "1"],
    ["1", "1", "1", "0", "1"]
  ];
  assertEquals(numIslands(grid), 1);

  grid = [
    [
      "1",
      "0",
      "0",
      "1",
      "1",
      "1",
      "0",
      "1",
      "1",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0"
    ],
    [
      "1",
      "0",
      "0",
      "1",
      "1",
      "0",
      "0",
      "1",
      "0",
      "0",
      "0",
      "1",
      "0",
      "1",
      "0",
      "1",
      "0",
      "0",
      "1",
      "0"
    ],
    [
      "0",
      "0",
      "0",
      "1",
      "1",
      "1",
      "1",
      "0",
      "1",
      "0",
      "1",
      "1",
      "0",
      "0",
      "0",
      "0",
      "1",
      "0",
      "1",
      "0"
    ],
    [
      "0",
      "0",
      "0",
      "1",
      "1",
      "0",
      "0",
      "1",
      "0",
      "0",
      "0",
      "1",
      "1",
      "1",
      "0",
      "0",
      "1",
      "0",
      "0",
      "1"
    ],
    [
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "1",
      "1",
      "1",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0"
    ],
    [
      "1",
      "0",
      "0",
      "0",
      "0",
      "1",
      "0",
      "1",
      "0",
      "1",
      "1",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "1",
      "0",
      "1"
    ],
    [
      "0",
      "0",
      "0",
      "1",
      "0",
      "0",
      "0",
      "1",
      "0",
      "1",
      "0",
      "1",
      "0",
      "1",
      "0",
      "1",
      "0",
      "1",
      "0",
      "1"
    ],
    [
      "0",
      "0",
      "0",
      "1",
      "0",
      "1",
      "0",
      "0",
      "1",
      "1",
      "0",
      "1",
      "0",
      "1",
      "1",
      "0",
      "1",
      "1",
      "1",
      "0"
    ],
    [
      "0",
      "0",
      "0",
      "0",
      "1",
      "0",
      "0",
      "1",
      "1",
      "0",
      "0",
      "0",
      "0",
      "1",
      "0",
      "0",
      "0",
      "1",
      "0",
      "1"
    ],
    [
      "0",
      "0",
      "1",
      "0",
      "0",
      "1",
      "0",
      "0",
      "0",
      "0",
      "0",
      "1",
      "0",
      "0",
      "1",
      "0",
      "0",
      "0",
      "1",
      "0"
    ],
    [
      "1",
      "0",
      "0",
      "1",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "1",
      "0",
      "0",
      "1",
      "0",
      "1",
      "0",
      "1",
      "0"
    ],
    [
      "0",
      "1",
      "0",
      "0",
      "0",
      "1",
      "0",
      "1",
      "0",
      "1",
      "1",
      "0",
      "1",
      "1",
      "1",
      "0",
      "1",
      "1",
      "0",
      "0"
    ],
    [
      "1",
      "1",
      "0",
      "1",
      "0",
      "0",
      "0",
      "0",
      "1",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "1",
      "0",
      "0",
      "0",
      "1"
    ],
    [
      "0",
      "1",
      "0",
      "0",
      "1",
      "1",
      "1",
      "0",
      "0",
      "0",
      "1",
      "1",
      "1",
      "1",
      "1",
      "0",
      "1",
      "0",
      "0",
      "0"
    ],
    [
      "0",
      "0",
      "1",
      "1",
      "1",
      "0",
      "0",
      "0",
      "1",
      "1",
      "0",
      "0",
      "0",
      "1",
      "0",
      "1",
      "0",
      "0",
      "0",
      "0"
    ],
    [
      "1",
      "0",
      "0",
      "1",
      "0",
      "1",
      "0",
      "0",
      "0",
      "0",
      "1",
      "0",
      "0",
      "0",
      "1",
      "0",
      "1",
      "0",
      "1",
      "1"
    ],
    [
      "1",
      "0",
      "1",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "1",
      "0",
      "0",
      "0",
      "1",
      "0",
      "1",
      "0",
      "0",
      "0",
      "0"
    ],
    [
      "0",
      "1",
      "1",
      "0",
      "0",
      "0",
      "1",
      "1",
      "1",
      "0",
      "1",
      "0",
      "1",
      "0",
      "1",
      "1",
      "1",
      "1",
      "0",
      "0"
    ],
    [
      "0",
      "1",
      "0",
      "0",
      "0",
      "0",
      "1",
      "1",
      "0",
      "0",
      "1",
      "0",
      "1",
      "0",
      "0",
      "1",
      "0",
      "0",
      "1",
      "1"
    ],
    [
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "1",
      "1",
      "1",
      "1",
      "0",
      "1",
      "0",
      "0",
      "0",
      "1",
      "1",
      "0",
      "0",
      "0"
    ]
  ];
  assertEquals(numIslands(grid), 58);
});
