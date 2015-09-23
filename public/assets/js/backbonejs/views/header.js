define([
  "backbonejs/mediator",
  "hbs!Tmpl/header",
  "jquery",
  "backbone"
], function(
  Mediator,
  TmplHeader
){
  return Backbone.View.extend({

    tmpl: TmplHeader,

    events: {
      'click .sites':'pushState',
      'click .urls':'pushState',
    },

    initialize: function () {
      _.bindAll(this,'toggleActive');
      this.$el.html(this.tmpl());
      Mediator.on('header:toggleActive',this.toggleActive);
    },

    pushState:function(e) {
      var className = e.target.className;
      this.toggleActive(className);
      if ( className === 'sites') {
        className = '';
      }
      Backbone.history.navigate('/'+className, true);
    },

    toggleActive: function(className){
      this.$('ul li').removeClass('active');
      this.$('.'+className).addClass('active');
    },

  });
});