$(function(){

  MyApp.Views.Header = Backbone.View.extend({

    tmpl: MyApp.Templates.header,

    events: {

    },

    initialize: function() {
       this.$el.html(this.tmpl());
    },
  });
});