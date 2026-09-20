# Knights Travails

A JavaScript implementation of a shortest-path algorithm for finding the minimum number of moves a knight needs to travel between two squares on a chessboard.

## How It Works

The program models the chessboard as a graph:

- Each chessboard square is a **vertex**.
- A valid knight move between two squares is an **edge**.
- A **breadth-first search (BFS)** is used to find the shortest path.
- Each vertex keeps a reference to its parent, allowing the path to be reconstructed once the destination is found.
- A `visited` set prevents the same square from being added to the queue multiple times.

Since every knight move has the same cost, BFS guarantees that the first time a square is reached, it has been reached using the minimum number of moves.

## Example

```js
knightMoves([0, 0], [7, 7]);
```

This finds a shortest path for a knight traveling from one corner of the board to another.

The result is a sequence of chessboard coordinates representing the path.

```js
[
  [0, 0],
  [2, 1],
  [3, 3],
  [4, 5],
  [5, 7],
  [6, 5],
  [7, 7],
];
```

## Complexity

For a generalized `n × n` board:

- **Time:** `O(n²)`
- **Space:** `O(n²)`

There are `n²` possible squares, and each square has at most 8 possible knight moves, though we only have to consider 4 (since each square is either less, greater than or equal to the destination we're looking for).

For the standard **8 × 8 chessboard**, the number of squares is fixed at 64, so the algorithm has:

- **Time:** `O(1)`
- **Space:** `O(1)`

This is because the board has a fixed maximum number of vertices and edges, regardless of the input.

## Concepts Practiced

- Graph traversal
- Breadth-first search (BFS)
- Queues
- Time and space complexity
