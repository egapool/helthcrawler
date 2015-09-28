define([
  "hbs!/assets/hbs/Urls/Item",
  "backbonejs/mediator",
  "jquery",
  "backbone"
],function(
  TmplUrlsItem,
  Madiator

){
  return Backbone.View.extend({

    tagName:"tr",

    tmpl: TmplUrlsItem,

    events:{
      'dblclick':'edit',
      'click .delete':'delete',
    },

    initialize:function(){
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
    }
  });
});