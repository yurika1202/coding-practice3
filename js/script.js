/* top-scroll
---------------------------- */
$(function() {
    var pageTop = $('.logo_totop');
    pageTop.click(function() {
      $("body, html").animate({ scrollTop: 0 }, 500);
    });
});

/* header-nav
--------------------------------- */
$(".sp__nav_btn").click(function (e) {
    e.preventDefault();
    $(this).toggleClass('_open');
    $(".nav__btn_text").toggleClass('_open');
    $(".open__nav").toggleClass('__panel-active');
    $(".open__bg").toggleClass('__bg-active');
    return false;
});
    
$(".nav__items a").click(function () {
    $(".sp__nav_btn").removeClass('_open');
    $(".nav__btn_text").removeClass('_open');
    $(".open__nav").removeClass('__panel-active');
    $(".open__bg").removeClass('__bg-active');
    return false;
});