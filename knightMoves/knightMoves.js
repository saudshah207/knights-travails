import { Queue } from "./Queue.js";
import { enqueueMoves, Vertex } from "./enqueueMoves.js";
import { buildPath } from "./buildPath.js";

function knightMoves(start, end) {
  const queue = new Queue(new Vertex(start));

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
        { row, change: rowChange },
        { column, change: columnChange },
        parent,
      );
    } else {
      enqueueMoves(
        queue,
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

export { knightMoves };
