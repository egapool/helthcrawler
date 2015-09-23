var require = {

  baseUrl: 'assets/js',

  paths: {
    jquery: 'vendor/jquery.min',
    underscore: 'vendor/underscore-min',
    backbone: 'vendor/backbone-min',
    hbs: 'vendor/require-handlebars-plugin/hbs'
  },

  shim: {
    'backbone': {
      deps:['jquery','underscore'],
      exports: 'Backbone',
    },
    hbs: {
      helpers: true,
      templateExtension: 'hbs',
      partialsUrl: '',
      handlebarsPath:'assets/hbs',
    },
  }
};