export default class Counter {
  #count = 0;

  #increment() {
    this.#count++;
  }

  #decrement() {
    this.#count--;
  }

  incrementCounter(amount) {
    for (let i = 0; i < amount; i++) {
      this.#increment();
      console.log(this.#count);
    }
  }

  decrementCounter(amount) {
    for (let i = 0; i < amount; i++) {
      this.#decrement();
      console.log(this.#count);
    }
  }

  get count() {
    return this.#count;
  }
}
