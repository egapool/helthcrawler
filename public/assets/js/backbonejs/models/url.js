MyApp.Models.Url = Backbone.Model.extend({

    defaults: function() {
      return {
      };
    },

    sync_id: function(id){
      this.save('id', id, {silent: true});
    },
});