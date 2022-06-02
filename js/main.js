//스크롤 헤더 이벤트//
$(function () {
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5; 
    var navbarHeight = $("#header").outerHeight();

    $(window).scroll(function(event){
        didScroll = true;
    });

    setInterval(function() {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250); 

    function hasScrolled() {
        var st = $(this).scrollTop(); 

    
        if(Math.abs(lastScrollTop - st) <= delta)
            return;

        if (st > lastScrollTop && st > navbarHeight){
           
            $("#header").slideUp("fast").css("background","#fff" ) ;
        } else {
      
            if(st + $(window).height() < $(document).height()) {
                $("#header").slideDown("fast"); 
            }
        }
        lastScrollTop = st; 
    }
})
//스크롤 헤더 이벤트 끝//
/*$(function () {
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5; 
    var navbarHeight = $("#navbar").outerHeight();

    $(window).scroll(function(event){
        didScroll = true;
    });

    setInterval(function() {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250); 

    function hasScrolled() {
        var st = $(this).scrollTop(); 

    
        if(Math.abs(lastScrollTop - st) <= delta)
            return;

        if (st > lastScrollTop && st > navbarHeight){
           
            $("#navbar").slideUp("fast");
        } else {
      
            if(st + $(window).height() < $(document).height()) {
                $("#navbar").slideDown("fast"); 
            }
        }

        lastScrollTop = st; 
    }
})*/

/*slide*/
$(document).ready(function(){
    $('.slider').bxSlider({
      slideWidth: 2000,
      minSlides: 3,
      maxSlides: 3,
      slideMargin: 10
    });
  });

  /*헤더 스크롤*/
