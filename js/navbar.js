(function($) {

  var ost = 0;

  $(window).scroll(function() {
    var cOst = $(this).scrollTop();

    if(cOst > ost) {
       $('header').addClass('nav-fixed').removeClass('nav-default');
    }
    else {
       $('header').addClass('nav-default').removeClass('nav-fixed');
    }

    ost = cOst;
  });

})(jQuery);
