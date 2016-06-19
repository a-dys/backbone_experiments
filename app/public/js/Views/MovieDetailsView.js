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
        },
        events: {
            "click .edit": "showEdit"
        },
        showEdit: function () {
            APP.router.navigate("movie/" + this.model.get("_id") + "/edit", {trigger: true});
        }
    });
}) ();