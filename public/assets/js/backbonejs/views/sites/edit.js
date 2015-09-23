define([
  "backbonejs/helper",
  "backbonejs/mediator",
  "hbs!/assets/hbs/Sites/Edit",
  "jquery",
  "backbone"
],function(
  Helper,
  Madiator,
  TmplSiteEdit
){
  return Backbone.View.extend({

    tagName: "div",
    id: 'site-edit',

    tmpl: TmplSiteEdit,

    events: {
      'click':'cancel',
      'click .site-edit-content':'empty',
      'click .cancel':'cancel',
      'click .submit':'submit',
      'click .edit':'edit',
    },

    initialize: function (p) {
      _.bindAll(this,'cancel','submit','cancel');
      var data = {};
      if ( p !== undefined && p.model !== undefined ) {
        this.model = p.model;
        data = this.model.toJSON();
      }

      this.$el.html(this.tmpl(data));
      this.form = this.$('#new-site');
      this.render();

      Madiator.on('site:editCancel',this.cancel);
    },

    render:function(){
      $('body').append(this.el);
      this.$('.site-edit-inner').animate({'top':'0'},200);
    },

    cancel: function(){
      this.$('.site-edit-inner').animate({'top':'-1000'},200,_.bind(function(){
        this.remove();
        Madiator.trigger('sites:editable');

      },this));
    },

    submit: function(){
      var data = Helper.getFormData(this.form);

      //validation

      Madiator.trigger('site:create',data);
    },

    edit: function() {
      var data = Helper.getFormData(this.form);
      //validation

      this.model.save(data,{
        success:function(){
          Madiator.trigger('site:editCancel');
        },
        error:function(){

        }
      });
    },

    empty:function(e) {
      e.stopImmediatePropagation();
    },
  });
});