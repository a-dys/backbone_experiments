var Person = Backbone.Model.extend({});
var People = Backbone.Collection.extend({
    model: Person,
    comparator: function (a,b) {
        if (a.get("hobbies").length > b.get("hobbies").length) {
            return -1;
        } else {
            return 1;
        }
    }
});

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
    hobbies: ["golf", "cars", "movies"]
});

var person3 = new Person({
    id: 3,
    name: "Alice",
    age: 25,
    hobbies: ["swimming"]
});

var people = new People([person1, person2, person3]);

console.log("People toJSON(): ");
console.log(people.toJSON());

console.log("Each: ");
console.log(people.each(function (model) {
    console.log(model.get("name"));
    })
);

console.log("Max: ");
var max = people.max(function (model) {
    return model.get("age");
});
console.log(max);


console.log("To Array: ");
console.log(people.toArray());


console.log("Is empty: ");
console.log(people.isEmpty());

console.log("Filter: ");
var t = people.filter(function (model) {
    return model.get("hobbies").length > 1;
});

console.log(t);
