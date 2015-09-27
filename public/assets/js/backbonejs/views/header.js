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
      'click #sites':'pushState',
      'click #urls':'pushState',
    },

    initialize: function () {
      _.bindAll(this,'toggleActive');
      this.$el.html(this.tmpl());
      Mediator.on('header:toggleActive',this.toggleActive);
    },

    pushState:function(e) {
      var id = e.target.id;
      this.toggleActive(id);
      if ( id === 'sites') {
        id = '';
      }
      Backbone.history.navigate('/'+id, true);
    },

    toggleActive: function(idName){
      this.$('ul li').removeClass('active');
      this.$('#'+idName).addClass('active');
    },

  });
});