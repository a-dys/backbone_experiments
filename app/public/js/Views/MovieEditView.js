(function () {
    APP.Views.MovieEdit = Backbone.View.extend({
        tagName: "div",
        template: _.template($("#movieEditNewTemplate").html()),
        initialize: function () {
            this.listenToOnce(this.model, "change", this.render);
            this.listenToOnce(this.model, "destroy", this.redirectToMovies);
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
            "#movie-categories": "categories",
            "#movie-actors": "actors",
            "#movie-description": "description"
        },
        events: {
            "submit form": "updateMovie",
            "click .delete": "deleteMovie"
        },
        updateMovie: function (e) {
            e.preventDefault();
            this.model.save({}, {wait: true});
        },
        deleteMovie: function () {
            var confirmation = confirm("Are you sure?");
            if (confirmation) {
                this.model.destroy({wait: true});
            }
        },
        redirectToMovies: function () {
            APP.router.navigate("/movies", {trigger: true});
        }
    });
})();
