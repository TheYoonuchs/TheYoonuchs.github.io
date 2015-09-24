(function($) {

  var ost = 0;

  $(window).scroll(function() {
    var cOst = $(this).scrollTop();

    if(cOst > ost) {
       $('header').addClass('header-fixed').removeClass('header-default');
    }
    else {
       $('header').addClass('header-default').removeClass('header-fixed');
    }

    ost = cOst;
  });

})(jQuery);
