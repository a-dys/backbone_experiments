(function () {
    APP.Routers.Router = Backbone.Router.extend({
        routes: {
            "": "showMoviesList"
        },
        showMoviesList: function () {
            var movies = new APP.Collections.MoviesList(),
                view = new APP.Views.MoviesList({collection: movies});
            movies.fetch({
                reset: true
            });
        }
    });
}) ();