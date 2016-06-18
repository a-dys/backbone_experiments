(function () {
    APP.Views.MovieDetails = Backbone.View.extend({
        tagName: "div",
        initialize: function () {
            this.listenTo(this.model, "change", this.render);
        },
        template: _.template($("#movieDetailsTemplate").html()),
        render: function () {
            var html = this.template(this.model.toJSON());
            this.$el.html(html);
            APP.Regions.appContent.html(this.el);
        }
    });
}) ();