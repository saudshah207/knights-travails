import { knightMoves } from "./knightMoves.js";

console.log(
  "Shortest path between squares [0,0] and [1,2] is:",
  knightMoves([0, 0], [1, 2]),
);
console.log(
  "Shortest path between squares [0,0] and [3,3] is:",
  knightMoves([0, 0], [3, 3]),
);
console.log(
  "Shortest path between squares [3,3] and [0,0] is:",
  knightMoves([3, 3], [0, 0]),
);
console.log(
  "Shortest path between squares [0,0] and [7,7] is:",
  knightMoves([0, 0], [7, 7]),
);
console.log(
  "Shortest path between squares [3,3] and [4,3] is:",
  knightMoves([3, 3], [4, 3]),
);
