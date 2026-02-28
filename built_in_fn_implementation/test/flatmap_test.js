import { flatMap } from "../src/flatmap.js";

import { assertEquals } from "@std/assert";

const singleNesting = (x) => [x, x];

const dataWithType = (x) => [x, [typeof x]];

const spaceForEachElement = (x) => [[]];

const noNesting = (x) => x;

Deno.test("no nesting", () => {
  assertEquals(flatMap(noNesting, [1, 2, 3]), [1, 2, 3].flatMap(noNesting));
});

Deno.test("single nesting", () => {
  assertEquals(flatMap(singleNesting, [1, 2, 3]), [1, 2, 3].flatMap(singleNesting));
});

Deno.test("double nesting", () => {
  assertEquals(flatMap(dataWithType, [1, "a"]), [1, "a"].flatMap(dataWithType));
});

Deno.test("space", () => {
  assertEquals(flatMap(spaceForEachElement, [1, 2]), [1, 2].flatMap(spaceForEachElement));
});
