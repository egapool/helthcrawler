require(["backbonejs/router", "backbone"], function(Router) {

    var App = new Router();
    Backbone.history.start({pushState:true});
});