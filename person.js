export default class Person {
  #name;

  constructor(name) {
    this.#name = name.trim();
  }

  get name() {
    return this.#name.charAt(0).toUpperCase() + this.#name.slice(1).toLowerCase();
  }

  set name(newName) {
    if (newName.trim().length > 2) {
      this.#name = newName;
    } else {
      console.log("Måste skriva in minst 2 symboler!");
    }

  }

}