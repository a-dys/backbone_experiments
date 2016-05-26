var Person = Backbone.Model.extend({
    initialize: function () {
        console.log("I'm alive!");
    },
    defaults: {
        name: 'John',
        age: 23
    }
});

var john = new Person();