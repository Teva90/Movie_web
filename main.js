// swiper js
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      "@0.00": {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      "@0.75": {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      "@1.00": {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      "@1.50": {
        slidesPerView: 3,
        spaceBetween: 40,
      },
    },
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      scrollbar: {
        el: ".swiper-scrollbar",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
  });
//   swiper js end 
//   menu btn fixed when scroll
$(window).scroll(function(){
    if ($(document).scrollTop() > 20 ){
        $('.navigation').addClass('fix-icon')
    }
    else {
        $('.navigation').removeClass('fix-icon')
    }
})
let scrollPercentage = () => {
    let scrollProgress = document.getElementById('progress');
    let progressValue = document.getElementById('progress-value');
    let pos = document.documentElement.scrollTop;
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollValue = Math.round(pos * 100 / calcHeight);
    scrollProgress.style.background = `conic-gradient(#e70634 ${scrollValue}% ,#2b2f38 ${scrollValue}%)`;
}
window.onscroll = scrollPercentage;
window.onload = scrollPercentage;

// pop up open :
$(document).on('click', '.play-btn a', function(){
  $('.play').addClass('active-popup');
  $("#m-video").get(0).play();
});
// pop up close :
$(document).on('click', '.close-movie', function(){
  $('.play').removeClass('active-popup');
  $("#m-video").get(0).pause();
});
