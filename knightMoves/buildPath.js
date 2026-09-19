export function buildPath(queue, isEndFound) {
  const path = [];

  if (isEndFound) {
    let vertex = queue.head.node;

    while (vertex) {
      path.push(vertex.data);
      vertex = vertex.parent;
    }
  }

  return path.reverse();
}
