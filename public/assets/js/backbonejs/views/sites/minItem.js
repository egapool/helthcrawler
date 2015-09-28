define([
  "hbs!Tmpl/Sites/MinItem",
  "backbonejs/mediator",
  "jquery",
  "backbone"
],function(
  TmplSiteMinItem,
  Mediator
){
  return Backbone.View.extend({

    tagName:"li",

    tmpl: TmplSiteMinItem,

    events:{
      'click':'selected',
    },

    initialize:function(){
      this.model.set('active',false);
      this.listenTo(this.model,'change',this.render);
      this.listenTo(this.model,'destroy',this.remove);
    },

    render: function() {
      var json = this.model.toJSON();
      this.$el.html(this.tmpl(json));
      return this;
    },

    delete: function(){
      this.model.destroy();
    },

    selected: function() {
      // debugger;
      this.model.collection.each(function(model){
        model.set('active',false);
      });
      this.model.set('active',true);
      $('.url-actions').fadeIn();
      Mediator.trigger('url:fetch',this.model);
    },
  });
});