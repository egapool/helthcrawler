MyApp.Views.Urllist = Backbone.View.extend({

  tmpl: MyApp.Templates.urllist,

  events: {

  },

  initialize: function() {
     this.$el.html(this.tmpl());
  },
});