import { Vertex } from "./Vertex.js";
import { isInRange } from "./isInRange.js";

function enqueueMoves(
  queue,
  visited,
  row,
  column,
  parent,
  isVertexLessThanEnd = true,
) {
  let newRow, newColumn;

  for (let maxPossibleMoves = 0; maxPossibleMoves < 4; maxPossibleMoves += 2) {
    newRow = updateRow();
    newColumn = column.column + column.change;

    let moveKey = getMoveKey();

    if (isInRange(newRow, isVertexLessThanEnd)) {
      if (isInRange(newColumn) && !visited.has(moveKey)) {
        queue.enqueue(new Vertex([newRow, newColumn], parent));
        visited.add(moveKey);
      }

      newColumn = column.column - column.change;

      moveKey = getMoveKey();

      if (isInRange(newColumn, false) && !visited.has(moveKey)) {
        queue.enqueue(new Vertex([newRow, newColumn], parent));
        visited.add(moveKey);
      }
    }

    const previousRowChange = row.change;

    row.change = column.change;
    column.change = previousRowChange;
  }

  function updateRow() {
    return isVertexLessThanEnd ? row.row + row.change : row.row - row.change;
  }

  function getMoveKey() {
    return `${newRow},${newColumn}`;
  }
}

export { enqueueMoves, Vertex };
