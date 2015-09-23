({
  baseUrl: 'public/assets/js',
  paths: {
    // requireLib: "vendor/require",
    jquery: 'vendor/jquery.min',
    underscore: 'vendor/underscore-min',
    backbone: 'vendor/backbone-min',
    hbs: 'vendor/require-handlebars-plugin/hbs',
    Tmpl:'../hbs',
  },
  shim: {
    'backbone': {
      deps:['jquery','underscore'],
      exports: 'Backbone',
    },
  },

  name: "main",
  out:"public/assets/js/main-built.js"
})