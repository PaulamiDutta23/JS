import { assertEquals } from "@std/assert";
import { parse } from "../src/parser.js";

Deno.test("with option -n, count and file", () => {
  assertEquals(parse(["-n", "1", "abc.txt"]), {
    quietMode: false,
    option: "-n",
    count: 1,
    files: ["abc.txt"],
  });
});

Deno.test("with option -c, count and file", () => {
  assertEquals(parse(["-c", "1", "abc.txt"]), {
    quietMode: false,
    option: "-c",
    count: 1,
    files: ["abc.txt"],
  });
});

Deno.test("with option -q,-n, count and file", () => {
  assertEquals(parse(["-q", "-n", "1", "abc.txt"]), {
    quietMode: true,
    option: "-n",
    count: 1,
    files: ["abc.txt"],
  });
});

Deno.test("with option -q,-c, count and file", () => {
  assertEquals(parse(["-q", "-c", "1", "abc.txt"]), {
    quietMode: true,
    option: "-c",
    count: 1,
    files: ["abc.txt"],
  });
});

Deno.test("with option -q,-n, count and files", () => {
  assertEquals(parse(["-q", "-n", "1", "abc.txt", "def.txt"]), {
    quietMode: true,
    option: "-n",
    count: 1,
    files: ["abc.txt", "def.txt"],
  });
});

Deno.test("with option -q,-c, count and files", () => {
  assertEquals(parse(["-q", "-c", "1", "abc.txt", "def.txt"]), {
    quietMode: true,
    option: "-c",
    count: 1,
    files: ["abc.txt", "def.txt"],
  });
});

Deno.test("basic test with only files", () => {
  assertEquals(parse(["abc.txt", "def.txt"]), {
    quietMode: false,
    option: "-n",
    count: 10,
    files: ["abc.txt", "def.txt"],
  });
});

Deno.test("-q present after -n ", () => {
  assertEquals(parse(["-n", "2", "-q", "abc.txt", "def.txt"]), {
    quietMode: true,
    option: "-n",
    count: 2,
    files: ["abc.txt", "def.txt"],
  });
});

Deno.test("-q present after -c ", () => {
  assertEquals(parse(["-c", "2", "-q", "abc.txt", "def.txt"]), {
    quietMode: true,
    option: "-c",
    count: 2,
    files: ["abc.txt", "def.txt"],
  });
});

Deno.test("-n present after -c ", () => {
  assertEquals(parse(["-c", "2", "-n", "1", "abc.txt", "def.txt"]), {
    quietMode: false,
    option: "-n",
    count: 1,
    files: ["abc.txt", "def.txt"],
  });
});

Deno.test("-c present after -n ", () => {
  assertEquals(parse(["-n", "2", "-c", "1", "abc.txt", "def.txt"]), {
    quietMode: false,
    option: "-c",
    count: 1,
    files: ["abc.txt", "def.txt"],
  });
});
