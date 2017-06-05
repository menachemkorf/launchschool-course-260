var template = Handlebars.compile($('#users').html());

var User = Backbone.Model.extend({
  url: "http://jsonplaceholder.typicode.com/users"
});

var Users = Backbone.Collection.extend({
  url: "http://jsonplaceholder.typicode.com/users",
  model: User,
  parse: function(response) {
    response.forEach(function(user) {
      user.company_name = user.company.name;
      user.catchPhrase = user.company.catchPhrase;
      user.company_bs = user.company.bs;
      delete user.company;
    });

    console.log(response);

    return response;
  },
  initialize: function() {
    this.on('sync sort', renderCollection);
  }
});

var blogWriters = new Users();

blogWriters.fetch({
  success: function() {

  }
});

function renderCollection() {
  $('body').html(template({users: blogWriters.toJSON()}));
};




// blogWriters.fetch({
//   success: function(collection) {
//     blogWriters.create({
//       name: 'Menachem Korf',
//       email: 'menachem@example.com'
//     }, {
//       success: function() {
//         // console.log(blogWriters.toJSON());
//         blogWriters.fetch({
//           reset: false, //?????
//           success: function() {
//             console.log(blogWriters.toJSON());
//           }
//         });
//       }
//     });
//   }
// });