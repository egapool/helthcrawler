define([
  "backbonejs/views/sites/minList",
  "hbs!Tmpl/Urls/Page",
  "jquery",
  "backbone"
],function(
  VeiwSiteMinList,
  TmplUrlPage
){
  return Backbone.View.extend({

    tmpl: TmplUrlPage,

    events: {
      'click #site-add':'openEdit',
    },

    initialize: function () {
      this.$el.html(this.tmpl());
      this.render();
    },

    render: function(){
      this.siteList = new VeiwSiteMinList({
        el:this.$('.sites-list'),
      });
      return this;
    }


  });
});