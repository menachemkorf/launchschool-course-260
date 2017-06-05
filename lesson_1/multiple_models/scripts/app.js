var ItemModel = Backbone.Model.extend({
  idAttribute: 'id'
});

var templates = {};
var list = [];

function cacheTemplates() {
  var $templates = $('[type="text/x-handlebars"]');
  $templates.each(function() {
    templates[$(this).attr('id')] = Handlebars.compile($(this).html());
  });

  Handlebars.registerPartial('item', $('#item').html());
}

function initList() {
  items_json.forEach(function(val) {
    addItem(val);
  });
}

function addItem(data) {
  data.id = list.length + 1;

  var item = new ItemModel(data);
  list.push(item);
  return item;
}

function removeItem(id) {
  var item = _.findWhere(list, {id: id});
  list = _.without(list, item);
}

function renderList(prop) {
  prop = prop || 'name';
  var sorted = _.sortBy(list, function(model) {
    return model.get(prop);
  });

  $('tbody').html(templates.items({items: sorted}));
}

function renderItem(item) {
  $('tbody').append(templates.item(item.toJSON()));
}

function handleDeleteClick(e) {
  e.preventDefault();
  var id = +$(this).attr('data-id');
  removeItem(id);
  renderList();
}

function handleAddSubmit(e) {
  e.preventDefault();
  var item = {
    name: $('[name="name"]').val(),
    quantity: +$('[name="quantity"]').val()
  }

  item = addItem(item);
  renderItem(item);
  this.reset();
}

function handleDeleteAllClick(e) {
  e.preventDefault();
  list = [];
  renderList();
}

function handleSortClick(e) {
  var prop = $(e.target).attr('data-prop');

  renderList(prop);
}

function bind() {
  $('tbody').on('click', 'a[data-id]', handleDeleteClick);
  $('form').on('submit', handleAddSubmit);
  $('p a').on('click', handleDeleteAllClick);
  $('[data-prop]').on('click', handleSortClick);
}

cacheTemplates();
initList();
renderList();
bind();
