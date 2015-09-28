define([
  "backbonejs/models/url",
  "jquery",
  "backbone"
],function(
  ModelUrl
){
  return Backbone.Collection.extend({

    model: ModelUrl,

    url: function(){
      return '/api/urls/' + this.options.siteId;
    },

    initialize: function(options) {
      this.options = options;
    },

    save: function(){
      Backbone.sync("create", this, {
          success: function(){
              console.log("save successfully");
          },
          error: function(){
              console.log("error saving");
          }

      });
    },
  });
});