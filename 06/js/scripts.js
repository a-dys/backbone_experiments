var Person = Backbone.Model.extend({});
var People = Backbone.Collection.extend({});

var person1 = new Person({
    id: 1,
    name: "John",
    age: 33,
    hobbies: ["sport", "IT"]
});

var person2 = new Person({
    id: 2,
    name: "Thomas",
    age: 40,
    hobbies: ["golf", "cars"]
});

var person3 = new Person({
    id: 3,
    name: "Alice",
    age: 25,
    hobbies: ["swimming"]
});

var people = new People([person1, person2, person3]);

console.log("People: ");
console.log(people.toJSON());

console.log("People pop(): ");
people.pop();
console.log(people.toJSON());

console.log("People shift(): ");
people.shift();
console.log(people.toJSON());

console.log("People add person1: ");
people.add(person1);
console.log(people.toJSON());

console.log("People push person3: ");
people.add(person3);
console.log(people.toJSON());


console.log("People remove person1: ");
people.remove(person1);
console.log(people.toJSON());

console.log("People unshift(person1): ");
people.unshift(person1);
console.log(people.toJSON());