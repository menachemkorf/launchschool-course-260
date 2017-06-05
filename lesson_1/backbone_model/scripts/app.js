var productTemplate = Handlebars.compile($('#product').html());
var formTemplate = Handlebars.compile($('#form').html());

var ProductModel = Backbone.Model.extend({
  initialize: function() {
    this.setDateTime();
    this.formatDate();
    this.render();
  },
  setDateTime: function() {
    var date = this.get('date');
    this.set('datetime', date.format());
  },
  formatDate: function() {
    var date = this.get('date');
    this.set('date_formatted', date.format('MMM Do, YYYY h:mm:ss'));
  },
  render: function() {
    $('article').html(productTemplate(this.toJSON()));
    $('fieldset').html(formTemplate(this.toJSON()));
  }
});

var product = new ProductModel(product_json);

$('main').on('submit', 'form', function(e) {
  e.preventDefault();

  var $form = $('form');
  var fieldsArr = $form.serializeArray();
  var attrs = {};

  fieldsArr.forEach(function(field) {
    attrs[field.name] = field.value;
  });

  attrs.date = moment();
  product.set(attrs);
  product.initialize();
});


