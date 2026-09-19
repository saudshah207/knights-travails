import { Queue } from "./Queue.js";
import { Vertex } from "./Vertex.js";

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

  const path = [];

  if (isEndFound()) {
    let vertex = queue.head.node;
    path.push(vertex.data);

    while (vertex.parent) {
      vertex = vertex.parent;
      path.push(vertex.data);
    }
  }

  return path.reverse();

  function isEndFound() {
    return (
      queue.head.node.data[0] === end[0] && queue.head.node.data[1] === end[1]
    );
  }
}

function enqueueMoves(queue, row, column, parent, isVertexLessThanEnd = true) {
  let newRow, newColumn;

  for (let maxPossibleMoves = 0; maxPossibleMoves < 4; maxPossibleMoves += 2) {
    newRow = updateRow();
    newColumn = column.column + column.change;

    if (isInRange(newRow, isVertexLessThanEnd)) {
      if (isInRange(newColumn))
        queue.enqueue(new Vertex([newRow, newColumn], parent));

      newColumn = column.column - column.change;

      if (isInRange(newColumn, false))
        queue.enqueue(new Vertex([newRow, newColumn], parent));
    }

    const previousRowChange = row.change;

    row.change = column.change;
    column.change = previousRowChange;
  }

  function updateRow() {
    return isVertexLessThanEnd ? row.row + row.change : row.row - row.change;
  }

  function isInRange(coordinate, checkMax = true) {
    const min = 0,
      max = 7;

    return checkMax ? coordinate <= max : coordinate >= min;
  }
}

export { knightMoves };
