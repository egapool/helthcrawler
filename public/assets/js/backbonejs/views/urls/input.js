define([
  "backbonejs/mediator",
  "hbs!/assets/hbs/Urls/input",
  "encoding",
  // "jszip",
  "xlsx",
  "jquery",
  "backbone"
],function(
  Madiator,
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
        debugger;
        // 8ビット符号なし整数値配列と見なす
        // var array = new Uint8Array(event.target.result);

        // // 文字コードを取得
        // switch (Encoding.detect(array)) {
        // case 'UTF16':
        //     // 16ビット符号なし整数値配列と見なす
        //     array = new Uint16Array(event.target.result);
        //     break;
        // case 'UTF32':
        //     // 32ビット符号なし整数値配列と見なす
        //     array = new Uint32Array(event.target.result);
        //     break;
        // }

        // // Unicodeの数値配列に変換
        // var unicodeArray = Encoding.convert(array, 'UNICODE');

        // // Unicodeの数値配列を文字列に変換
        // var text = Encoding.codeToString(unicodeArray);

        var workbook = XLSX.read(event.target.result,{type:'binary'});

        // event.target.result に読み込んだファイルの内容が入っています.
        // ドラッグ＆ドロップでファイルアップロードする場合は result の内容を Ajax でサーバに送信しましょう!
        console.log(workbook);
        var first_sheet_name = workbook.SheetNames[0];
        var worksheet = workbook.Sheets[first_sheet_name];
        var json = XLSX.utils.sheet_to_json(worksheet);
        // this.readFile(workbook);
        $("#droppable").text("[" + file.name + "]" + workbook);
      };
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