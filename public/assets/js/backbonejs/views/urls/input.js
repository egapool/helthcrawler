define([
  "backbonejs/mediator",
  "hbs!/assets/hbs/Urls/input",
  "encoding",
  // "jszip",
  "xlsx",
  "jquery",
  "backbone"
],function(
  Mediator,
  TmplUrlInput,
  Encoding
  // JSZip
  // XLSX
){
  return Backbone.View.extend({

    tagName: "div",
    id: 'url-input',
    className:'edit-layer',
    tmpl: TmplUrlInput,

    events: {
      'click':'cancel',
      'click .edit-layer-content':'empty',
      'click .cancel':'cancel',

      "dragover #droppable": "onDragOver",
      "drop #droppable": "onDrop",
    },

    initialize: function() {
      _.bindAll(this,'onDrop');
      this.$el.html(this.tmpl());
      this.render();
    },

    render: function() {
      $('body').append(this.el);
      this.$('.edit-layer-inner').animate({'top':'0'},200);
    },

    onDrop: function(event) {
      var file = event.originalEvent.dataTransfer.files[0];
      var fileReader = new FileReader();
      fileReader.onload = function(event) {
        // debugger;

        var workbook = XLSX.read(event.target.result,{type:'binary'});

        var first_sheet_name = workbook.SheetNames[0];
        var worksheet = workbook.Sheets[first_sheet_name];
        var json = XLSX.utils.sheet_to_json(worksheet);
        Mediator.trigger('url:set',json);
        $("#droppable").text("[" + file.name + "]" + workbook);
      };

      fileReader.onloadend = _.bind(function(event) {
        // debugger;
        this.cancel();
      },this);

      fileReader.readAsBinaryString(file);

      event.preventDefault();
      event.stopPropagation();
      return false;
    },

    onDragOver: function (e) {
      e.preventDefault();
    },

    readFile: function(wookbook){
      var first_sheet_name = workbook.SheetNames[0];
      var worksheet = workbook.Sheets[first_sheet_name];
    },

    cancel: function(){
      this.$('.edit-layer-inner').animate({'top':'-1000'},200,_.bind(function(){
        this.remove();

      },this));
    },
    empty:function(e) {
      e.stopImmediatePropagation();
    },

  });
});