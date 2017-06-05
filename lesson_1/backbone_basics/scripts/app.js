var PostModel = Backbone.Model.extend({
  urlRoot: 'http://jsonplaceholder.typicode.com/posts',
  setUser: function() {
    var self = this;
    var user = new UserModel({id: self.get('userId')});
    user.fetch({
      success: function(model) {
        self.set('user', model);
        renderPost(self);
      }
    });
  },
  initialize: function() {
    this.has('userId') && this.setUser();
    this.on('change:userId', this.setUser);
    console.log(this.toJSON());
    this.on('change', function(model) {
      model.has('user') && renderPost(model);
    });
  }
});

var UserModel = Backbone.Model.extend({
  urlRoot: 'http://jsonplaceholder.typicode.com/users'
});

var post1 = new PostModel({id: 1});
var post2 = new PostModel({
  id: 2,
  title: 'Second Post',
  body: 'This is my new blog post. Hope you enjoy it!',
  userId: 2
});

post1.fetch();

var postHtml = $('#post').html();

function renderPost(model) {

  var $post = $(postHtml);
  $post.find('h1').text(model.get('title'));
  $post.find('header p').text('By ' + model.get('user').get('name'));
  $post.find('header + p').text(model.get('body'));
  $(document.body).html($post);
}
