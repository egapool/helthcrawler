define([
  "backbonejs/views/header",
  "backbonejs/views/footer",
  "backbonejs/views/container",
  "backbonejs/views/sites/page",
  "backbonejs/views/urls/page",
  "backbonejs/mediator",
  "hbs!/assets/hbs/layout",
  'jquery',
  'backbone'
], function(
  ViewHeader,
  ViewFooter,
  ViewContainer,
  ViewSitesPage,
  ViewUrlsPage,
  Mediator,
  TmplLayout
){

  return Backbone.Router.extend({

    el: "#app",
    tmpl: TmplLayout,

    // ビューコンテンツのキャッシュ
    viewCache: {},

    // ページ制御
    routes : {
      ''     : 'sites',
      'urls' : 'urls',
    },

    initialize: function() {
      Backbone.emulateJSON = true;
      this.$el = $(this.el);

      //moment setting
      // moment.locale('ja',{
      //     weekdaysShort:"日_月_火_水_木_金_土".split('_'),
      //     weekdays:"日_月_火_水_木_金_土".split('_'),
      // });

      this.$el.html(this.tmpl());

      this.header = new ViewHeader({
        el: this.$el.find('#header')
      });

      this.footer = new ViewFooter({
        el: this.$el.find('#footer')
      });

      this.contents = new ViewContainer({el: $('#content')});

    },

    sites: function(){
      if ( this.viewCache.sites === undefined  ) {
        this.viewCache.sites = new ViewSitesPage();
      }
      this.contents.inner = this.viewCache.sites.render();
      this.contents.render();
      Mediator.trigger('header:toggleActive','sites');
    },

    urls: function(){
      if ( this.viewCache.urls === undefined  ) {
        this.viewCache.urls = new ViewUrlsPage();
      }
      this.contents.inner = this.viewCache.urls.render();
      this.contents.render();
      Mediator.trigger('header:toggleActive','urls');
    },

  });
});