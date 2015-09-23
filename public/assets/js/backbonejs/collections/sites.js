define([
  "backbonejs/models/site",
  "backbone"
],function(
  ModelSite
){
  return Backbone.Collection.extend({

    model: ModelSite,

    url: '/api/sites',
  });
});