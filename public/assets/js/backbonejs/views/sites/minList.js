MyApp.Views.SitesMinList = Backbone.View.extend({

  // el:".sites-list",

  tmpl: MyApp.Templates.Sites.MinList,

  events: {
  },

  initialize: function () {
    this.$el.html(this.tmpl());
    this.Ul = this.$('ul');
    this.siteList = new MyApp.Collections.SiteList();
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

    MyApp.mediator.on('site:create',this.create);
  },

  addAll:function(){
    this.siteList.each(this.addOne, this);
  },

  addOne: function(site){
    var view = new MyApp.Views.SiteMinItem({model:site});
    this.Ul.append(view.render().el);
  },

});