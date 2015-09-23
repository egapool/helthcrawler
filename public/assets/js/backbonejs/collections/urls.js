MyApp.Collections.UrlList = Backbone.Collection.extend({

  model: MyApp.Models.Url,

  url: '/api/urls',
});