(function () {
    APP.Routers.Router = Backbone.Router.extend({
        routes: {
            "": "showMoviesList",
            "movies": "showMoviesList",
            "actors": "showActorsList"
        },
        showMoviesList: function () {
            var movies = new APP.Collections.MoviesList(),
                view = new APP.Views.MoviesList({collection: movies});

            APP.showMainView(view);
            movies.fetch({
                reset: true
            });
        },
        showActorsList: function () {
            var actors = new APP.Collections.ActorsList(),
                view = new APP.Views.ActorsList({collection: actors});

            APP.showMainView(view);
            actors.fetch({
                reset: true
            });
        }
    });
}) ();