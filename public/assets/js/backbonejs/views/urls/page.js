define([
  "backbonejs/views/sites/minList",
  "backbonejs/views/urls/list",
  "backbonejs/views/urls/input",
  "backbonejs/mediator",
  "hbs!Tmpl/Urls/Page",
  "jquery",
  "backbone"
],function(
  VeiwSiteMinList,
  ViewUrlList,
  ViewUrlInput,
  Mediator,
  TmplUrlPage
){
  return Backbone.View.extend({

    tmpl: TmplUrlPage,

    events: {
      'click .input':'openInput',
      'click .update':'update',
    },

    initialize: function () {
      _.bindAll(this,'update');
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

    update: function() {
      Mediator.trigger('url:save');
    },

    openInput: function() {
      new ViewUrlInput();
    },

  });
});