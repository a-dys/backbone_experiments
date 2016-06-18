(function () {
    APP.Routers.Router = Backbone.Router.extend({
        routes: {
            "": "showMoviesList",
            "movies": "showMoviesList",
            "actors": "showActorsList",
            "clients": "showClientsList",
            "categories": "showCategoriesList",
            "movie/:id": "showMovieDetails"
        },
        showMoviesList: function () {
            var movies = new APP.Collections.MoviesList(),
                view = new APP.Views.MoviesList({collection: movies});

            APP.showMainView(view);
            movies.fetch({
                reset: true
            });
            APP.Views.Navigation.highlight("movies");
        },
        showActorsList: function () {
            var actors = new APP.Collections.ActorsList(),
                view = new APP.Views.ActorsList({collection: actors});

            APP.showMainView(view);
            actors.fetch({
                reset: true
            });
            APP.Views.Navigation.highlight("actors");

        },

        showCategoriesList: function () {
            var categories = new APP.Collections.CategoriesList(),
                view = new APP.Views.CategoriesList({collection: categories});

            APP.showMainView(view);
            categories.fetch({
                reset: true
            });
            APP.Views.Navigation.highlight("categories");

        },

        showMovieDetails: function (id) {
            var movie = new APP.Models.Movie({_id: id}),
                view = new APP.Views.MovieDetails({model: movie});
            APP.showMainView(view);
            movie.fetch();
        }
    });
}) ();