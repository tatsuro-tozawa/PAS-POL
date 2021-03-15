// ハンバーガーメニュー
$(function() {
    $(".menu-btn").click(function() {
        $(".sp-menu").slideToggle(200);
    });
    $(".sp-menu li a").click(function() {
        $(".sp-menu").css({display:"none"});
    });
});

// Swiper
const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
  });