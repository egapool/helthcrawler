define([
  "backbonejs/Collections/urls",
  "backbonejs/mediator",
  "hbs!Tmpl/Urls/List",
  "jquery",
  "backbone"
],function(
  CollectionsUrlList,
  Mediator,
  TmplUrlList
){
  return Backbone.View.extend({

    tmpl: TmplUrlList,

    events: {
    },

    initialize: function () {
      _.bindAll(this,'create','fetchUrl');
      this.$el.html(this.tmpl());
      this.table = this.$('tbody');
      this.urlList = new CollectionsUrlList();

      this.listenTo(this.urlList, 'add', this.addOne);
      this.listenTo(this.urlList, 'reset', this.addAll);
      this.listenTo(this.urlList, 'sort', this.reOrder);

      Mediator.on('url:fetch',this.fetchUrl);
    },

    addAll:function(){
      this.urlList.each(this.addOne, this);
    },

    addOne: function(site){
      var view = new MyApp.Views.SiteItem({model:site});
      this.table.append(view.render().el);
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

    fetchUrl: function(model) {
      this.urlList.fetch({
        data:{siteId:model.get('id')},
        success:function(){
          console.log('success');
        },
        error:function(){
          console.log('error');
        },
      });
    },
  });
});