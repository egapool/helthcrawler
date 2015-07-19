$(function(){

  MyApp.Views.Container = Backbone.View.extend({

    inner: null,

    events: {

    },

    render: function() {
      this.$el.html(this.inner.render());
      return this;
    },
  });
});