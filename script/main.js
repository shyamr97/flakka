

$(document).ready(function() {
  var stickyNavTop = $('#maac-menu').offset().top;

  var stickyNav = function(){
    var scrollTop = $(window).scrollTop();

    if (scrollTop > stickyNavTop) { 
      $('#maac-menu').addClass('sticky');
    } else {
      $('#maac-menu').removeClass('sticky'); 
    }
  };

  stickyNav();

  $(window).scroll(function() {
    stickyNav();
  });
});


