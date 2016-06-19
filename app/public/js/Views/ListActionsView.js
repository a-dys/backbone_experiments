(function() {
    APP.Views.ListActions = Backbone.View.extend({
        tagName: "div",
        className: "app-actions",
        template: _.template( $("#listActionsTemplate").html()),
        initialize: function (options) {
            this.options = options;
        },
        render: function () {
            this.$el.append(this.template);
            return this;
        },

        events: {
            "click .add": "showAdd"
        },

        showAdd: function () {
            var url = this.options.collectionName + "/new";
            APP.router.navigate(url, {trigger: true});
        }

    });

})();