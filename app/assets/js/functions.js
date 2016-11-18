$(window).scroll(function() {
  var windowScroll = $(this).scrollTop();

  $('.home-text').css({
    'transform' : 'translate(0px, ' + windowScroll/3.1 + 'px)'
  })
});
