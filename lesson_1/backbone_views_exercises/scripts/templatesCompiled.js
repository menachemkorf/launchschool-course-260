(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['app'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h1>Favorite Colors</h1>\n<ul id=\"favorites\"></ul>\n<button id=\"add-person\">Add Person</button>";
},"useData":true});
templates['listItem'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "  <li>\n    "
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "\n  </li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<h2>"
    + container.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</h2>\n<ul>\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.colors : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</ul>";
},"useData":true});
templates['newPerson'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div id=\"new-person-modal\">\n  <form method=\"post\" action=\"#\">\n    <fieldset>\n      <dl>\n        <dt><label for=\"name\">Name:</label></dt>\n        <dd><input type=\"text\" id=\"name\" name=\"name\" required></dd>\n      </dl>\n      <dl>\n        <dt><label for=\"color1\">Color 1:</label></dt>\n        <dd><input type=\"text\" id=\"color1\" name=\"color1\" required></dd>\n      </dl>\n      <dl>\n        <dt><label for=\"color2\">Color 2</label></dt>\n        <dd><input type=\"text\" id=\"color2\" name=\"color2\" required></dd>\n      </dl>\n      <dl>\n        <dt><label for=\"color3\">Color 3</label></dt>\n        <dd><input type=\"text\" id=\"color3\" name=\"color3\" required></dd>\n      </dl>\n    </fieldset>\n    <fieldset>\n      <button class=\"btn-add\" type=\"submit\">Add</button>\n      <button class=\"btn-cancel\">Cancel</button>\n    </fieldset>\n  </form>\n</div>";
},"useData":true});
})();