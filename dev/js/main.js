const mobile = window.matchMedia('(min-width: 0px) and (max-width: 460px)');
const lgMobile = window.matchMedia('(min-width: 461px) and (max-width: 768px)');
const tablet = window.matchMedia('(min-width: 769px) and (max-width: 1023px)');
const desktop = window.matchMedia('(min-width: 1024px)');
const lg = window.matchMedia('(min-width: 1440px)');


$(document).ready(function () {
  $('.reserve__toggle-orders').on('click', function (e) {

    if (desktop.matches) {
      $('.reserve').toggleClass('open');

      $('.reserve__footer, .reserve__orders-sum').slideToggle({
        start: function () {
          $(this).css({
            display: lg.matches ? "flex" : "block"
          })
        },
        easing: 'linear'
      });
    } else {
      $('.reserve').addClass('open');
      $(this).slideUp()
      $('.reserve__title, .to-menu, .reserve__orders-text').slideUp()
  
      $('.reserve__orders-details, .reserve__created, .reserve__orders-sum').slideDown({
        start: function () {
          $(this).css({
            display: "flex"
          })
        },
        easing: 'linear'
      });
  
  
      $('.header__return-reserve').slideDown();
    }
    
    
  })

  $('.header__return-reserve').click(function (e) {
    $('.reserve').removeClass('open');
    $(this).slideUp()
    $('.reserve__title, .to-menu, .reserve__orders-text').slideDown()

    $('.reserve__orders-details, .reserve__created, .reserve__orders-sum').slideUp({
      start: function () {
        $(this).css({
          display: "flex"
        })
      },
      easing: 'linear'
    });

    $('.reserve__toggle-orders').slideDown();
    
    
  })
})