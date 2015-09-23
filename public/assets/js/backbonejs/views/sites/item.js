define([
  "backbonejs/views/sites/edit",
  "hbs!Tmpl/Sites/Item",
  "jquery",
  "backbone"
],function(
  ViewSiteEdit,
  TmplSiteItem
){
  return Backbone.View.extend({

    tagName:"tr",

    tmpl: TmplSiteItem,

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
      this.delegateEvents();
      return this;
    },

    edit: function(){
      new ViewSiteEdit({model:this.model});
    },

    delete: function(){
      this.model.destroy();
    }
  });
});