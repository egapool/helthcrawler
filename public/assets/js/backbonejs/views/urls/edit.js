MyApp.Views.SitesEdit = Backbone.View.extend({

  tagName: "div",
  id: 'site-edit',

  tmpl: MyApp.Templates.Sites.Edit,

  events: {
    'click':'cancel',
    'click .site-edit-content':'empty',
    'click .cancel':'cancel',
    'click .submit':'submit',
    'click .edit':'edit',
  },

  initialize: function (p) {
    _.bindAll(this,'cancel','submit','cancel');
    var data = {};
    if ( p !== undefined && p.model !== undefined ) {
      this.model = p.model;
      data = this.model.toJSON();
    }

    this.$el.html(this.tmpl(data));
    this.form = this.$('#new-site');
    this.render();

    MyApp.mediator.on('site:editCancel',this.cancel);
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

  submit: function(){
    var data = MyApp.Helper.getFormData(this.form);

    //validation

    MyApp.mediator.trigger('site:create',data);
  },

  edit: function() {
    var data = MyApp.Helper.getFormData(this.form);
    //validation

    this.model.save(data,{
      success:function(){
        MyApp.mediator.trigger('site:editCancel');
      },
      error:function(){

      }
    })
  },

  empty:function(e) {
    e.stopImmediatePropagation();
  },
});