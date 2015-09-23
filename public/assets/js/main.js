require(["backbonejs/router", "backbone"], function(Router) {

    console.dir("--Start--");

    var App = new Router();
    Backbone.history.start({pushState:true});
});