(function () {
    APP.Views.MoviesList = Backbone.View.extend({
        tagName: "ul",
        className: "app-items-list",
        initialize: function () {
            this.listenTo(this.collection, "reset", this.render);
        },
        render: function () {
            var actionsView = new APP.Views.ListActions({
                collectionName: "movies"
            });

            this.collection.each(this.addOne, this);
            APP.Regions.appContent.html(actionsView.render().el);
            APP.Regions.appContent.append(this.el);
        },
        addOne: function (model) {
            var view = new APP.Views.MovieListItem({model: model});
            this.$el.append(view.render().el);
        }
    });
}) ();