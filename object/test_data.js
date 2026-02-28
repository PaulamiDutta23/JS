export const testcasesOfSegregate = [
  {
    desc: "Only odd numbers",
    args: [[9, 1, 3, 5]],
    expected: { odd: [9, 1, 3, 5], even: [] },
  },
  {
    desc: "Only even numbers",
    args: [[10, 2, 8]],
    expected: { odd: [], even: [10, 2, 8] },
  },
];
