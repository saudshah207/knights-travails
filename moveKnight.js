function moveKnight(initial = [0, 0]) {
  const min = 0,
    max = 7;

  const moves = [];

  let row = initial[0],
    column = initial[1];

  for (
    let positions = 0, rowChange = 1, columnChange = 2;
    positions < 8;
    positions += 4
  ) {
    const nextColumn = column + columnChange,
      nextRow = row + rowChange;

    const previousColumn = column - columnChange,
      previousRow = row - rowChange;

    const nextColumnInRange = nextColumn <= max,
      previousColumnInRange = previousColumn >= 0;

    if (nextRow <= max) {
      if (nextColumnInRange) moves.push([nextRow, nextColumn]);
      if (previousColumnInRange) moves.push([nextRow, previousColumn]);
    }

    if (previousRow >= min) {
      if (nextColumnInRange) moves.push([previousRow, nextColumn]);
      if (previousColumnInRange) moves.push([previousRow, previousColumn]);
    }

    const previousRowChange = rowChange;

    rowChange = columnChange;
    columnChange = previousRowChange;
  }

  return moves;
}

const square = [7,7];
console.log(
  `Possible moves of Knight from ${square} are:`,
  moveKnight(square),
);