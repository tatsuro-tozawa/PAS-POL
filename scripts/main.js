// Swiper
const swiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    speed: 1000,
    autoplay: true,
    effect: 'fade'
});

// ハンバーガーメニュー
$(function() {
    $(".menu-btn").click(function() {
        $(".sp-menu").slideToggle(200);
    });
    $(".sp-menu li a").click(function() {
        $(".sp-menu").css({display:"none"});
    });
});

// トップへ戻るボタン
$(function() {
    $('#page_top a').on('click',function(){
      $('body, html').animate({
        scrollTop:0
      }, 800);
        event.preventDefault();
    });
  
  });