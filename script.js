var wow = new WOW(
  {
    boxClass:     'wow',      
    animateClass: 'animated', 
    offset:       0,          
    mobile:       true,      
    live:         true,      
    callback:     function(box) {
     
    },
    scrollContainer: null 
  }
);
wow.init();

$('.head-slider').slick({
      autoplay : true,
      autoplaySpeed : 4000,
      responsive : [{
        breakpoint : 700,
        settings: "unslick"
      }]
});

$('.reviews-slider').slick({
       lazyLoad: 'ondemand',
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        arrows : false,
        autoplaySpeed : 2000,
        dots : true,
        dotsClass : 'myDots',

          responsive : [{
            breakpoint : 700,
            settings : {
              slidesToShow: 3
            },
              breakpoint : 576,
                settings : {
                 slidesToShow: 2
            }
      }]
 });



$('.gallery-container').magnificPopup({
  delegate: 'a', 
  type: 'image',
  zoom: {
     enabled: true,
     duration: 800 
 },
 gallery: {
     enabled: true,
     navigateByImgClick: true,
     preload: [0, 1] 
 }

});



$('.popup-with-form').magnificPopup({
   type: 'inline',
   focus: '#name',
   
});




$(window).scroll(function(){

  var fix = $('.nav')

  if($(this).scrollTop() > 400){
    fix.addClass('fix')
   
  }
  else{
    fix.removeClass('fix')
    
  }
})

var menuBtn = document.querySelector('.menu-btn');
var menu = document.querySelector('.menu');
var topLine = document.querySelector('.top-line');
var midLine = document.querySelector('.mid-line');
var botLine = document.querySelector('.bot-line');

function dropMenu(){
  menu.classList.toggle('active')
  topLine.classList.toggle('circle-top')
  midLine.classList.toggle('circle-mid')
  botLine.classList.toggle('circle-bot')
}


menuBtn.addEventListener('click', dropMenu);



(function($){
        $(window).on("load",function(){
            $("a[rel='m_PageScroll2id']").mPageScroll2id();
        });
    })(jQuery);

$("form").each(function() {
    $(this).validate({
      rules: {
        Name: {
          required: true
        },
        Phone: {
          required: true
        },
      },
      messages: {
        Name: {
          required: "Поле 'Ваше Iмя' не може бути пустим"
        },
  
        Phone: {
          required: "Поле 'Ваш телефон' не може бути пустим"

        }
      
      }
    });
  });

