define([
  "backbonejs/Views/urls/item",
  "backbonejs/Collections/urls",
  "backbonejs/mediator",
  "hbs!Tmpl/Urls/List",
  "jquery",
  "backbone"
],function(
  ViewUrlItem,
  CollectionsUrlList,
  Mediator,
  TmplUrlList
){
  return Backbone.View.extend({

    tmpl: TmplUrlList,

    events: {
    },

    initialize: function () {
      _.bindAll(this,'create','fetchUrl','createCollections', 'setUrl','save','reset');
      this.$el.html(this.tmpl());
      this.table = this.$('tbody');


      Mediator.on('url:fetch',this.fetchUrl);
      Mediator.on('url:set',this.setUrl);
      Mediator.on('url:save',this.save);
    },

    addAll:function(){
      this.urlList.each(this.addOne, this);
    },

    addOne: function(site){
      var view = new ViewUrlItem({model:site});
      this.table.append(view.render().el);
    },

    setUrl: function(urls) {
      this.reset();
      this.urlList.set(urls,{remove:true});
    },

    create:function(data){
      this.urlList.create(data,{
        success: function(model, response, options){
          console.log(model);
          MyApp.mediator.trigger('site:editCancel');
          // model.sync_id(response.id);
        },
        error: function(){

        },
      });
    },

    save: function() {
      if (this.urlList === undefined ) return;
      this.urlList.save();
    },

    createCollections: function(model){
      this.urlList = new CollectionsUrlList({siteId:model.get('id')});
      this.listenTo(this.urlList, 'add', this.addOne);
      this.listenTo(this.urlList, 'reset', this.addAll);
      this.listenTo(this.urlList, 'sort', this.reOrder);
    },

    fetchUrl: function(model) {
      this.createCollections(model);
      this.reset();
      this.urlList.fetch({
        success:function(){
          console.log('success');
        },
        error:function(){
          console.log('error');
        },
      });
    },
    reset: function() {
      this.table.html('');
      this.urlList.reset();
    },
  });
});