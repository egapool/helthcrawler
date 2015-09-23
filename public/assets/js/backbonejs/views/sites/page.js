MyApp.Views.SitesPage = Backbone.View.extend({

  tmpl: MyApp.Templates.Sites.Page,

  events: {
    'click #site-add':'openEdit',
  },

  initialize: function () {
    _.bindAll(this,'editable');
    this.isEditing = false;
    this.$el.html(this.tmpl());
    this.siteList = new MyApp.Views.SitesList({
      el:this.$('.sites-list'),
    });
    MyApp.mediator.on('sites:editable',this.editable);
  },

  openEdit: function(){
    if ( this.isEditing === false ) {
      // debugger;
      new MyApp.Views.SitesEdit();
      this.isEditing = true;
    }
  },
  editable: function(){
    this.isEditing = false;
  }
});