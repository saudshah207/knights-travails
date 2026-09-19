import { test, expect, jest, describe } from "@jest/globals";
import { knightMoves } from "../knightMoves.js";

describe("Finds the shortest possible path", () => {
  test("Finds single edge paths", () => {
    expect(knightMoves([0, 0], [1, 2])).toEqual([
      [0, 0],
      [1, 2],
    ]);
  });

  test("Finds paths with mutiple edges", () => {
    expect(knightMoves([0, 0], [3, 3])).toEqual([
      [0, 0],
      [2, 1],
      [3, 3],
    ]);
  });

  test("Finds paths where start vertex is greater than end vertex", () => {
    expect(knightMoves([3, 3], [0, 0])).toEqual([
      [3, 3],
      [1, 2],
      [0, 0],
    ]);
  });

  test("Finds paths with multiple vertices in between", () => {
    expect(knightMoves([0, 0], [7, 7])).toEqual([
      [0, 0],
      [2, 1],
      [3, 3],
      [4, 5],
      [5, 7],
      [6, 5],
      [7, 7],
    ]);

    expect(knightMoves([3, 3], [4, 3])).toEqual([
      [3, 3],
      [5, 4],
      [3, 5],
      [4, 3],
    ]);
  });
});
