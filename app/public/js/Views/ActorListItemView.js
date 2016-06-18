(function () {
    APP.Views.ActorListItem = Backbone.View.extend({
        tagName: "li",
        template: _.template($("#actorListItemTemplate").html()),
        render: function () {
            var html = this.template(this.model.toJSON());
            this.$el.html(html);
            return this;
        }
    });
}) ();