define([
  "backbonejs/models/url",
  "jquery",
  "backbone"
],function(
  ModelUrl
){
  return Backbone.Collection.extend({

    model: ModelUrl,

    // url: function(){
    //   return '/api/urls/' + this.options.siteId;
    // },
    url: '/api/urls/',
  });
});