$(function(){

  MyApp.Views.Urlpage = Backbone.View.extend({

    tmpl: MyApp.Templates.urlpage,

    events: {

    },

    initialize: function() {
      this.$el.html(this.tmpl());

      this.keys = new MyApp.Views.Key({
        el: this.$el.find('#key')
      });

      this.urllist = new MyApp.Views.Urllist({
        el: this.$el.find('#urllist')
      });
    },

    render: function(){
      return this.$el;
    }
  });
});