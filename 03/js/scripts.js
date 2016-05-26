var Person = Backbone.Model.extend({
    validate: function(attrs, options) {

        if (attrs.name === '') {
            return "Name can not be empty."
        }

        if (attrs.age <= 0) {
            return "Age must be higher than 0.";
        }
    }
});

var person1 = new Person({"name":"John"});
console.log(person1.toJSON());

console.log("Try set age to 0 (with validation): " + person1.set("age",0,{validate:true}));
console.log(person1.toJSON());

console.log("Try set name to \' \' (no validation): " + person1.set("name",''));
console.log(person1.toJSON());
console.log("Is valid?: " + person1.isValid());


