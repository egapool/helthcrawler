$(function(){

  MyApp.App = Backbone.View.extend({

    el: $("#app"),

    tmpl: MyApp.Templates.layout,

    initialize: function() {

      MyApp.mediator = {};
      _.extend(MyApp.mediator, Backbone.Events);

      this.$el.html(this.tmpl());

      this.header = new MyApp.Views.Header({
        el: this.$el.find('#header')
      });

      this.addtask = new MyApp.Views.Urlpage({
        el: this.$el.find('#content')
      });

      this.footer = new MyApp.Views.Footer({
        el: this.$el.find('#footer')
      });

      // this.listenTo(Todays, 'all', this.render);

    },

    // Re-rendering the App just means refreshing the statistics -- the rest
    // of the app doesn't change.
    render: function() {
      var done = Todays.done().length;
      var remaining = Todays.remaining().length;

    },

  });

  var App = new MyApp.App();
  Backbone.history.start({ pushState:true});

});