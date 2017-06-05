var persons = [
  { name: 'Victor', colors: ['Blue', 'White', 'Orange'] },
  { name: 'Kevin', colors: ['Red', 'Maroon', 'Gray'] },
  { name: 'Brandon', colors: ['Green', 'Blue', 'Gray'] }
];


var app = {
  bindEvents: function() {
    _.extend(this, Backbone.Events);
    this.on('addPerson', function(person) {
      this.list.add(person);
    });
  },
  init: function() {
    this.list = new List(persons);
    this.appView = new AppView();
    this.appView.render();
    this.listView = new ListView({collection: this.list});
    this.listView.render();
    this.bindEvents();
  }
};

app.init();