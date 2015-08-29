MyApp.Views.Footer = Backbone.View.extend({
  tmpl: MyApp.Templates.footer,

  events: {

  },

  initialize: function() {
     this.$el.html(this.tmpl());
  },
});