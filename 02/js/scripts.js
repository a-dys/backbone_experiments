var Person = Backbone.Model.extend({});

var person1 = new Person();
var person2 = new Person();
var person3 = new Person();

person1.set("name","John");
person1.set("age", 25);

person2.set("name","Anna");
person3.set("name","Zbigniew");

console.log("person1:");
console.log(person1.get("name") +" "+ person1.get("age"));

person1.unset("age");
console.log("Unset age:");
console.log(person1.toJSON());

console.log("Previous attributes:");
console.log(person1._previousAttributes);

console.log("Has name?");
console.log(person1.has("name"));

console.log("Has age?");
console.log(person1.has("age"));

console.log("Others");
console.log(person2.toJSON());
console.log(person3.toJSON());


