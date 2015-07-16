$(function(){

  MyApp.Views.Key = Backbone.View.extend({

    tmpl: MyApp.Templates.key,

    events: {

    },

    initialize: function() {
       this.$el.html(this.tmpl());
    },
  });
});