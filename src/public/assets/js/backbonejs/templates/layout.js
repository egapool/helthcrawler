this["MyApp"] = this["MyApp"] || {};
this["MyApp"]["Templates"] = this["MyApp"]["Templates"] || {};
this["MyApp"]["Templates"]["footer"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "";
},"useData":true});
this["MyApp"]["Templates"]["header"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "itobot";
},"useData":true});
this["MyApp"]["Templates"]["key"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"row\">\n  <p class=\"col-md-3\">\n    <input type=\"text\" name=\"key\" class=\"form-control\">\n  </p>\n  <p class=\"col-md-3\">\n    <input type=\"text\" name=\"worksheetid\" class=\"form-control\">\n  </p>\n</div>";
},"useData":true});
this["MyApp"]["Templates"]["layout"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<nav id=\"header-wrapper\" class=\"navbar navbar-default\">\n  <div id=\"header\" class=\"container-fluid\"></div>\n</nav>\n\n<div id=\"content\"></div>\n<div id=\"footer\"></div>";
},"useData":true});
this["MyApp"]["Templates"]["url"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<tr>\n  <td>url</td>\n</tr>";
},"useData":true});
this["MyApp"]["Templates"]["urllist"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<table class=\"table\"></table>";
},"useData":true});
this["MyApp"]["Templates"]["urlpage"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<h2>URL list</h2>\n<div id=\"key\"></div>\n<div id=\"urllist\"></div>";
},"useData":true});