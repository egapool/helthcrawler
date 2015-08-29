MyApp.Router = Backbone.Router.extend({
  el: $("#app"),

  tmpl: MyApp.Templates.layout,

  viewCache: {},

  initialize: function() {

    MyApp.mediator = {};
    _.extend(MyApp.mediator, Backbone.Events);

    this.el.html(this.tmpl());

    this.header = new MyApp.Views.Header({
      el: this.el.find('#header')
    });

    this.footer = new MyApp.Views.Footer({
      el: this.el.find('#footer')
    });

    this.container = new MyApp.Views.Container({el:$('#content')});

    // this.listenTo(Todays, 'all', this.render);
  },

  routes: {
    '/': 'index',
    '': 'index',
  },

  index: function(){
    console.log('index page');
    if ( this.viewCache.index === undefined ) {
      this.viewCache.index = new MyApp.Views.Urlpage();
    }
    this.container.inner = this.viewCache.index;
    this.container.render();
  },
});