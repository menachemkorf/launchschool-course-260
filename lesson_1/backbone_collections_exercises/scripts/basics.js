var PostModel = Backbone.Model.extend({
  initialize: function() {
    if (!this.get('id')) {
      this.set('id', this.collection.nextID());
    }
  }
});

var Posts = Backbone.Collection.extend({
  model: PostModel,
  url: "http://jsonplaceholder.typicode.com/posts",
  lastID: 0,
  setLastID: function() {
    if (this.isEmpty()) {
      return
    }

    this.lastID = this.last().get('id');
  },
  nextID: function() {
    return ++this.lastID;
  },
  initialize: function() {
    this.on('sync', this.setLastID);
  }
});

var User = Backbone.Model.extend({});
var Users = Backbone.Collection.extend({
  model: User
});

var usersData = [{
  id: 1,
  name: "Leanne Graham"
}, {
  id: 2,
  name: "Ervin Howell"
}, {
  id: 3,
  name: "Clementine Bauch"
}];

var blogRoll = new Posts();
var blogUsers = new Users();
blogUsers.reset(usersData);

blogRoll.fetch({
  reset: true,
  success: recievedPosts
});

function recievedPosts(collection) {
  var firstPost = collection.get(1);
}