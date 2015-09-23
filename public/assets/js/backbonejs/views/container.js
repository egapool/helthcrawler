define([
  "hbs!Tmpl/container",
  "jquery",
  "backbone"
], function(
  TmplContainer
){
  return Backbone.View.extend({

    inner: null,

    tmpl: TmplContainer,

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
});