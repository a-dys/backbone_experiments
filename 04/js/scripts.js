var Person = Backbone.Model.extend({});

var person1 = new Person({
    name: "John",
    age: 33,
    hobbies: ["sport", "IT"]
});

var person2 = new Person({
    name: "Thomas",
    age: 40,
    hobbies: ["golf", "cars"]
});

var person3 = new Person({
    name: "Alice",
    age: 25,
    hobbies: ["swimming"]
});

console.log("Keys: " + person1.keys());

console.log("Values: " + person2.values());

console.log("Invert: ");
console.log(person2.invert());

console.log("Pairs: ");
console.log(person3.pairs());

console.log("Pick name and age: ");
console.log(person3.pick("name","age"));

console.log("Omit age: ");
console.log(person1.omit("age"));
