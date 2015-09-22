MyApp.Views.SitesList = Backbone.View.extend({

  tmpl: MyApp.Templates.Sites.List,

  events: {
  },

  initialize: function () {
    this.$el.html(this.tmpl());
  },
});