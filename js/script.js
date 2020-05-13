$("document").ready(function () {
  $("#js-info").click(function () {
    $(".tab-info").show();
    $(".tab-ratings").hide();
    $(".tab-sources").hide();
    $("#js-info").addClass("active");
    $("#js-rating").removeClass("active");
    $("#js-buy").removeClass("active");
  });

  $("#js-rating").click(function () {
    $(".tab-info").hide();
    $(".tab-ratings").show();
    $(".tab-sources").hide();

    $("#js-info").removeClass("active");
    $("#js-rating").addClass("active");
    $("#js-buy").removeClass("active");
  });

  $("#js-buy").click(function () {
    $(".tab-info").hide();
    $(".tab-ratings").hide();

    $(".tab-sources").show();
    $("#js-info").removeClass("active");
    $("#js-rating").removeClass("active");
    $("#js-buy").addClass("active");
  });
});
