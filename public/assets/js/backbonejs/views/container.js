MyApp.Views.Container = Backbone.View.extend({

  inner: null,

  tmpl: MyApp.Templates.Container,

  events: {
  },

  initialize: function() {

    // this.$el.html(this.tmpl());
  },

  render: function() {
    this.$el.html(this.inner.$el);
    return this;
  },
});