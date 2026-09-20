export class Queue {
  #head;
  #tail;

  #size = 0;

  constructor(node) {
    this.#head = {
      node: node,
      next: null,
    };

    this.#tail = this.#head;

    this.#size++;
  }

  get head() {
    return this.#head;
  }

  enqueue(node) {
    this.#tail.next = { node: node, next: null };
    this.#tail = this.#tail.next;

    this.#size++;
  }

  dequeue() {
    if (!this.#head) return null;

    const previousHead = this.#head;
    this.#head = previousHead.next;

    if (!this.#head) {
      this.#tail = null;
    }

    this.#size--;

    return previousHead.node;
  }

  get size() {
    return this.#size;
  }
}
