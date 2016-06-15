var PersonDetails = Backbone.View.extend({
   tagName: 'div',
   className: 'client-details',
   template: _.template($('#personDetailsTemplate').html()),
   render: function () {
       var html = this.template(this.model.toJSON());
       this.$el.html(html);
       $('body').append(this.el);
   }
});


var Person = Backbone.Model.extend({
});

var People = Backbone.Collection.extend({
    model: Person
});

var PersonView = Backbone.View.extend({
    tagName: 'li',
    template: _.template($("#personTemplate").html()),
    render: function () {
        var html = this.template(this.model.toJSON());
        this.$el.html(html);
        return this;
    },
    events: {
        "click": "redirectToDetails"
    },
    redirectToDetails: function () {
        router.navigate('client/'+this.model.get("id"), {trigger: true});
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
   }

});

var person1 = new Person({
    id: 1,
    name: "John",
    age: 33,
    hobbies: ["sport", "IT", "fishing"]
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

var peopleView = new PeopleView({collection: people});
peopleView.render();


var Router = Backbone.Router.extend({
    initialize: function () {
        this.route("client/:id", "client-details", this.showClientDetails);
    },
    showClientDetails : function (id) {
        var model = people.get(id);
        var view = new PersonDetails({model: model});
        view.render();
    }

});

var router = new Router();
Backbone.history.start({pushState: true});


