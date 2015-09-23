define([
  "backbonejs/views/sites/list",
  "backbonejs/views/sites/edit",
  "backbonejs/mediator",
  "hbs!/assets/hbs/Sites/Page",
  "jquery",
  "backbone"
],function(
  ViewSiteList,
  ViewSiteEdit,
  Mediator,
  TmplSitesPage
){
  return Backbone.View.extend({

    tmpl: TmplSitesPage,

    events: {
      'click #site-add':'openEdit',
    },

    initialize: function () {
      _.bindAll(this,'editable');
      this.isEditing = false;

      Mediator.on('sites:editable',this.editable);
    },

    render:function(){
      this.$el.html(this.tmpl());
      this.siteList = new ViewSiteList({
        el:this.$('.sites-list'),
      });
      this.delegateEvents();
      return this;
    },

    openEdit: function(){
      if ( this.isEditing === false ) {
        // debugger;
        new ViewSiteEdit();
        this.isEditing = true;
      }
    },
    editable: function(){
      this.isEditing = false;
    }
  });
});