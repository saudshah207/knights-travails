import { Vertex } from "./Vertex.js";

function enqueueMoves(
  queue,
  row,
  column,
  parent,
  isVertexLessThanEnd = true,
) {
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

export { enqueueMoves, Vertex };
