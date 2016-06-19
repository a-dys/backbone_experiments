(function () {
    APP.Views.MovieNew = Backbone.View.extend({
        tagName: "div",
        template: _.template($("#movieEditNewTemplate").html()),
        initialize: function () {
            this.listenTo(this.model, "sync", this.redirectToEdit);
            this.render();
        },
        render: function () {
            var html = this.template(this.model.toJSON());
            this.$el.html(html);
            APP.Regions.appContent.html(this.el);
            this.stickit();
        },
        bindings: {
            "#movie-title": "title",
            "#movie-date": "date",
            "#movie-categories": {
                observe: "categories",
                onSet: function (values) {
                    return values.split(",");
                }
            },
            "#movie-actors": {
                observe: "actors",
                onSet: function (values) {
                    return values.split(",");
                }
            },
            "#movie-description": "description"
        },
        events: {
            "submit form": "saveMovie"
        },
        saveMovie: function (e) {
            e.preventDefault();
            this.model.save({}, {wait: true});
        },
        redirectToEdit: function () {
            APP.router.navigate("movie/" + this.model.get("_id") + "/edit", {trigger: true});
        }
    });
})();
