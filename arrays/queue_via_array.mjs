export class Queue {
  constructor() {
    this.arr = [];
  }
  get length() {
    return this.arr.length;
  }
  enq(value) {
    this.arr.push(value);
  }
  deq() {
    if (this.arr.length === 0) {
      throw new Error("Queue is empty");
    }
    return this.arr.shift();
  }
}
