import Person from "./person.js";
import Counter from "./counter.js";

// const person = new Person("kalle");

// console.log(person.name);

// person.name = "     n"

// console.log(person.name);

// person.name = "BENGT-ARNE"

// console.log(person.name);



const counter = new Counter();

console.log("counts value -> " + counter.count);

counter.incrementCounter(10)

console.log("counts value -> " + counter.count);

counter.decrementCounter(15)

console.log("counts value -> " + counter.count);