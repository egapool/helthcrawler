MyApp.Views.SiteItem = Backbone.View.extend({

  tagName:"tr",

  tmpl: MyApp.Templates.Sites.Item,

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

  edit: function(){
    new MyApp.Views.SitesEdit({model:this.model});
  },

  delete: function(){
    this.model.destroy();
  }
});
