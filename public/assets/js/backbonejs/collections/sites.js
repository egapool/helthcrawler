MyApp.Collections.SiteList = Backbone.Collection.extend({

  model: MyApp.Models.Site,

  url: '/api/sites',
});