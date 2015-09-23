define([
  "hbs!Tmpl/footer",
  "jquery",
  "backbone"
], function(
  TmplFooter
){
  return Backbone.View.extend({

    tmpl: TmplFooter,

    initialize: function () {
      this.$el.html(this.tmpl());
    }
  });
});