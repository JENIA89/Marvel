$(function () {
  $(window).scroll(function () {
    let height = $(window).scrollTop();
    if (height > 50) {
      $("header").addClass("header-fixed");
    } else {
      $("header").removeClass("header-fixed");
    }
  });

  $(document).ready(function () {
    $(".header-content, .header-block").on("click", "a", function (event) {
      event.preventDefault();
      let id = $(this).attr("href"),
        top = $(id).offset().top;
      $("body,html").animate({ scrollTop: top }, 1500);
    });
  });

  $(".mobile-icon").on("click", function () {
    $(".nav ul").slideToggle();
  });
});
