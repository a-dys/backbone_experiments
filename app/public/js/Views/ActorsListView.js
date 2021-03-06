(function () {
    APP.Views.ActorsList = Backbone.View.extend({
        tagName: "ul",
        className: "app-items-list",
        initialize: function () {
            this.listenTo(this.collection, "reset", this.render);
        },
        render: function () {
            this.collection.each(this.addOne, this);
            APP.Regions.appContent.append(this.el);
        },
        addOne: function (model) {
            var view = new APP.Views.ActorListItem({model: model});
            this.$el.append(view.render().el);
        }
    });
}) ();