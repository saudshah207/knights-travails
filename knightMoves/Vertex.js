export class Vertex {
  #data;
  #parent = null;

  constructor(data, parent) {
    this.#data = data;
    this.parent = parent;
  }

  get data() {
    return this.#data;
  }

  get parent() {
    return this.#parent
  }

  set parent(parent) {
    if (parent instanceof Vertex) this.#parent = parent;
  }
}
