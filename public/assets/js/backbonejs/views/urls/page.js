MyApp.Views.UrlsPage = Backbone.View.extend({

  tmpl: MyApp.Templates.Urls.Page,

  events: {
    'click #site-add':'openEdit',
  },

  initialize: function () {
    this.$el.html(this.tmpl());
    this.render();
  },

  render: function(){
    this.siteList = new MyApp.Views.SitesMinList({
      el:this.$('.sites-list'),
    });
    return this;
  }


});