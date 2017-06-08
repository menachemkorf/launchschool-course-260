$(function() {
  $('nav').on('click', 'a', function(e) {
    e.preventDefault();

    var $e = $(e.target);
    var idx = $e.attr('href');
    swtichPage(idx);
    history.pushState({idx: idx}, $e.text(), location.pathname + idx);
  });

  $(window).on('popstate', function(e) {
    var state = e.originalEvent.state;
    console.log(state);
    swtichPage(state ? '#page_1' : state.idx);
  });

  if (location.hash) {
    swtichPage(location.hash);
  }

  function swtichPage(idx) {
    $('.active').removeClass('active');
    $('nav a[href="' + idx + '"]').addClass('active');
    $('article').hide().filter(idx).show();
  }
});