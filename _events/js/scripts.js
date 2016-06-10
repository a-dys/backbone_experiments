var Person = Backbone.Model.extend({

});

var People = Backbone.Collection.extend({
});

var PersonView = Backbone.View.extend({
    tagName: 'li',
    template: _.template($("#personTemplate").html()),
    render: function () {
        var html = this.template(this.model.toJSON());
        this.$el.append(html);
        return this;
    },
    initialize : function() {
        this.listenTo(this.model, "remove", function () {
            this.remove();
        })
    }
});

var PeopleView = Backbone.View.extend({
   tagName: 'ul',
   render: function () {
       this.$el.empty();
       this.collection.each(this.addOne, this);
       $('body').append(this.el);
   },
   addOne: function (model) {
       var view = new PersonView({model: model});
       this.$el.append(view.render().el)
   },
   initialize : function () {
       this.listenTo(this.collection, "add", this.render);
   }

});

var person1 = new Person({
    id: 1,
    name: "John",
    age: 33
});

var person2 = new Person({
    id: 2,
    name: "Thomas",
    age: 40
});

var person3 = new Person({
    id: 3,
    name: "Alice",
    age: 25
});

var people = new People([person1, person2, person3]);

var model = people.first();
var view = new PersonView({model:model});

view.render();
console.log(view.el);

var peopleView = new PeopleView({collection:people});
peopleView.render();

people.add({id: 4, name: "Ada", age: 24});
people.remove(2);