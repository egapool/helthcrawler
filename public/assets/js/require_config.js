var require = {

  baseUrl: 'assets/js',

  paths: {
    jquery: 'vendor/jquery.min',
    underscore: 'vendor/underscore-min',
    backbone: 'vendor/backbone-min',
    hbs: 'vendor/require-handlebars-plugin/hbs',
    encoding: 'vendor/encoding',
    jszip: 'vendor/jszip',
    xlsx: 'vendor/xlsx.core.min',
    Tmpl:'../hbs',
  },

  shim: {
    'backbone': {
      deps:['jquery','underscore'],
      exports: 'Backbone',
    },
    'xlsx': {
      exports:"XLSX"
    },
    hbs: {
      helpers: true,
      templateExtension: 'hbs',
      partialsUrl: '',
    },
  }
};