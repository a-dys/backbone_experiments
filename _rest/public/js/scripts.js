var Person = Backbone.Model.extend({
    url: function() {
        return "/client/" + this.get("id");
    }
});

var People = Backbone.Collection.extend({
    model: Person,
    url: "/clients",
    initialize: function() {
        this.fetch({reset: true});
    }
});

var PersonDetailsView = Backbone.View.extend({
    tagName: 'div',
    className: 'client-details',
    template: _.template($('#personDetailsTemplate').html()),
    initialize: function () {
        this.listenTo(this.model, "change", this.render);
    },
    render: function () {
        var html = this.template(this.model.toJSON());
        this.$el.html(html);
        $('.client-details').remove();
        $('body').append(this.el);
    }
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
        router.navigate('client/' + this.model.get("id"), {trigger: true});
    }

});

var PeopleView = Backbone.View.extend({
    tagName: 'ul',
    render: function () {
        this.$el.empty();
        this.collection.each(this.addOne, this);
        $('body').append(this.el);
    },
    initialize: function () {
        this.listenTo(this.collection, "reset", this.render);
    },
    addOne: function (model) {
        var view = new PersonView({model: model});
        this.$el.append(view.render().el)
    }

});

var Router = Backbone.Router.extend({
    routes: {
        "client/:id": "showClientDetails"
    },
    showClientDetails : function (id) {
        var model = new Person({id: id});
        var view = new PersonDetailsView({model: model});
        model.fetch({reset:true});
    }

});
var people = new People();
var peopleView = new PeopleView({collection: people});
var router = new Router();

Backbone.history.start({pushState: true});