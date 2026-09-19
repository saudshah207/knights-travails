export class Queue {
  #head;
  #tail;

  constructor(node) {
    this.#head = {
      node: node,
      next: null,
    };

    this.#tail = this.#head;
  }

  get head() {
    // console.log(this.#head);
    return this.#head;
  }

  enqueue(node) {
    this.#tail.next = { node: node, next: null };
    this.#tail = this.#tail.next;
  }

  dequeue() {
    if (!this.#head) return null;

    const previousHead = this.#head;
    this.#head = previousHead.next;

    if (!this.#head) {
      this.#tail = null;
    }

    return previousHead.node;
  }
}
