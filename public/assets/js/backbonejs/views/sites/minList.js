define([
  "backbonejs/views/sites/minItem",
  "backbonejs/collections/sites",
  "backbonejs/mediator",
  "hbs!/assets/hbs/Sites/MinList",
  "jquery",
  "backbone"
],function(
  ViewSiteMinItem,
  CollectionSites,
  Madiator,
  TmplSiteMinList
){
  return Backbone.View.extend({

    // el:".sites-list",

    tmpl: TmplSiteMinList,

    events: {
    },

    initialize: function () {
      this.$el.html(this.tmpl());
      this.Ul = this.$('ul');
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

      Madiator.on('site:create',this.create);
    },

    addAll:function(){
      this.siteList.each(this.addOne, this);
    },

    addOne: function(site){
      var view = new ViewSiteMinItem({model:site});
      this.Ul.append(view.render().el);
    },

  });
});