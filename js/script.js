$("document").ready(function () {
  $("#js-info").click(function () {
    $(".tab-info").css({
      display: "flex",
    });
    $(".tab-ratings").css({
      display: "none",
    });
    $(".tab-sources").css({
      display: "none",
    });
    $("#js-info").addClass("active");
    $("#js-rating").removeClass("active");
    $("#js-buy").removeClass("active");
  });

  $("#js-rating").click(function () {
    $(".tab-info").css({
      display: "none",
    });
    $(".tab-ratings").css({
      display: "block",
    });
    $(".tab-sources").css({
      display: "none",
    });

    $("#js-info").removeClass("active");
    $("#js-rating").addClass("active");
    $("#js-buy").removeClass("active");
  });

  $("#js-buy").click(function () {
    $(".tab-info").css({
      display: "none",
    });
    $(".tab-ratings").css({
      display: "none",
    });

    $(".tab-sources").css({
      display: "block",
    });
    $("#js-info").removeClass("active");
    $("#js-rating").removeClass("active");
    $("#js-buy").addClass("active");
  });
});
