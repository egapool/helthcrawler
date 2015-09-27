define([
  "backbonejs/views/sites/minList",
  "backbonejs/views/urls/list",
  "backbonejs/views/urls/input",
  "hbs!Tmpl/Urls/Page",
  "jquery",
  "backbone"
],function(
  VeiwSiteMinList,
  ViewUrlList,
  ViewUrlInput,
  TmplUrlPage
){
  return Backbone.View.extend({

    tmpl: TmplUrlPage,

    events: {
      'click .input':'openInput',
    },

    initialize: function () {
      this.$el.html(this.tmpl());
    },

    render: function(){
      this.siteList = new VeiwSiteMinList({
        el:this.$('.sites-list'),
      });
      this.urlList = new ViewUrlList({
        el:this.$('.urls-table'),
      });
      return this;
    },

    openInput: function() {
      new ViewUrlInput();
    },

  });
});