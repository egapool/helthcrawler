define([
  "hbs!Tmpl/Sites/MinItem",
  "jquery",
  "backbone"
],function(
  TmplSiteMinItem
){
  return Backbone.View.extend({

    tagName:"li",

    tmpl: TmplSiteMinItem,

    events:{
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

    edit: function(){
    },

    delete: function(){
      this.model.destroy();
    }
  });
});