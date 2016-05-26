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
console.log(people);

console.log("People toJSON(): ");
console.log(people.toJSON());

console.log("People length: ");
console.log(people.length);

console.log("Person with id 2: ");
console.log(people.get(2).toJSON());


console.log("Person at position 2: ");
console.log(people.at(2).toJSON());
