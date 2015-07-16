$(function(){

  MyApp.Views.Url = Backbone.View.extend({

    tmpl: MyApp.Templates.url,

    events: {

    },

    initialize: function() {
       this.$el.html(this.tmpl());
    },
  });
});