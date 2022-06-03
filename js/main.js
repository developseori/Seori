/*loading*/
/*const loader = document.quarySelector('.loader');
const main = document.quarySelector('main');

function init(){
    setTimeout(() => {
        loader.style.opacity = 0;
        loader.style.display = 'none';

        main.style.display = 'block';
        setTimeout(() => (main.style.opacity = 1), 50);
    }, 4000);
}

init();*/
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

/*fade in
let observer = new IntersectionObserver(entries => {
 entries.forEach(entry => {
     if(entry.isIntersecting){
         document.querySelectorAll(".row")[0].classList.add("fadeInRight")
         document.querySelectorAll(".row")[1].classList.add("fadeInRight")
         document.querySelectorAll(".row")[2].classList.add("fadeInRight")
     }
 })
})

observer.observer(document.querySelector("#about"));*/

/*fade in*/

/*scroll event*/
let mainText = document.querySelector(".row .col-8 h3, h4")

window.addEventListener('scroll',function(){
    let value = window.scrollY
    console.log("scrollY",value);

    if(scrollY>600){
        mainText.getElementsByClassName(".row .col-8 h3, h4") = 'slide ease-in forwards'
    }else {
        mainText.getElementsByclassName(".row .col-8 h3, h4") = 'slide ease-out'
    }
});