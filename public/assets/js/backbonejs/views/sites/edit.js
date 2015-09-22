MyApp.Views.SitesEdit = Backbone.View.extend({

  tagName: "div",
  id: 'site-edit',

  tmpl: MyApp.Templates.Sites.Edit,

  events: {
    'click':'cancel',
    'click .site-edit-content':'empty',
    'click .cancel':'cancel',
  },

  initialize: function () {
    _.bindAll(this,'cancel');
    // this.$el = $(this.el);
    // debugger;
    this.$el.html(this.tmpl());
    this.render();
  },

  render:function(){
    $('body').append(this.el);
    this.$('.site-edit-inner').animate({'top':'0'},200);
  },
  cancel: function(){
    this.$('.site-edit-inner').animate({'top':'-1000'},200,_.bind(function(){
      this.remove();
      MyApp.mediator.trigger('sites:editable');

    },this));
  },
  empty:function(e) {
    e.stopImmediatePropagation();
  },
});