define([
  "backbonejs/views/sites/item",
  "backbonejs/collections/sites",
  "backbonejs/mediator",
  "hbs!/assets/hbs/Sites/List",
  "jquery",
  "backbone"
],function(
  ViewSiteItem,
  CollectionSites,
  Mediator,
  TmplSiteList
){
  return Backbone.View.extend({

    // el:".sites-list",

    tmpl: TmplSiteList,

    events: {
    },

    initialize: function () {
      _.bindAll(this,'create');
      this.$el.html(this.tmpl());
      this.table = this.$('tbody');
      this.siteList = new CollectionSites();
      this.siteList.fetch({
        success:function(){
          console.log('success');
        },
        error:function(){
          console.log('error');

        },
      });
      this.listenTo(this.siteList, 'add', this.addOne);
      this.listenTo(this.siteList, 'reset', this.addAll);
      this.listenTo(this.siteList, 'sort', this.reOrder);

      Mediator.on('site:create',this.create);
    },

    addAll:function(){
      this.siteList.each(this.addOne, this);
    },

    addOne: function(site){
      var view = new ViewSiteItem({model:site});
      this.table.append(view.render().el);
    },

    create:function(data){
      this.siteList.create(data,{
        success: function(model, response, options){
          console.log(model);
          Mediator.trigger('site:editCancel');
          // model.sync_id(response.id);
        },
        error: function(){

        },
      });
    },
  });
});