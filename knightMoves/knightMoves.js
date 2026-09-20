import { Queue } from "./Queue.js";
import { enqueueMoves, Vertex } from "./enqueueMoves.js";
import { buildPath } from "./buildPath.js";
import { isInRange } from "./isInRange.js";

function knightMoves(start, end) {
  if (isSquareOffTheBoard(start) || isSquareOffTheBoard(end)) return [];

  const queue = new Queue(new Vertex(start));
  const visited = new Set([`${start[0]},${start[1]}`]);

  while (!isEndFound() && queue.head) {
    const parent = queue.head.node,
      vertex = parent.data;

    const row = vertex[0],
      column = vertex[1];

    let rowChange = 2,
      columnChange = 1;

    if (vertex < end) {
      enqueueMoves(
        queue,
        visited,
        { row, change: rowChange },
        { column, change: columnChange },
        parent,
      );
    } else {
      enqueueMoves(
        queue,
        visited,
        { row, change: rowChange },
        { column, change: columnChange },
        parent,
        false,
      );
    }

    queue.dequeue();
  }

  return buildPath(queue, isEndFound());

  function isEndFound() {
    return (
      queue.head.node.data[0] === end[0] && queue.head.node.data[1] === end[1]
    );
  }
}

function isSquareOffTheBoard(square) {
  const min = 0,
    max = 7;

  return (
    !isInRange(square[0], false, true) || !isInRange(square[1], false, true)
  );
}

export { knightMoves };
