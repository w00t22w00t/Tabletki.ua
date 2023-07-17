$(function () {
  $(".reserve__toggle-orders").on("click", function (e) {
    $("body").toggleClass("open");
  });

  $(".header__return-reserve").on("click", function (e) {
    $("body").removeClass("open");
  });
});
