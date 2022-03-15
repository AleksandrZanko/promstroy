//header-menu

(function($){
  $(function() {
    $('.menu__icon').on('click', function() {
      $(this).closest('.menu')
        .toggleClass('menu_state_open');
    });
    
    $('.menu__links-item').on('click', function() {
      // do something

      $(this).closest('.menu')
        .removeClass('menu_state_open');
    });
  });
})(jQuery);


var owl = $('.owl-carousel');
owl.owlCarousel({
    items:3,
    loop:true,
    margin:10,
    nav:false,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsive:{
      0:{
          items:1,
          dots: false,
          nav: true
      },
      600:{
          items:3
      }
  }
});