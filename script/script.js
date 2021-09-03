
  // $("button.btn").click(function () {
  //   $("div#map").slideToggle(2000);
  // });
  // $("div.vehicle-item-col").click(function () {
  //   $("div.packages-item__price > span").text() * 2;
  // });
  $(window).scroll(function () {
    var pos_body = $(window).scrollTop();
    if (pos_body >= 100) {
      $(".header").addClass("fixed-top");
    }
    else
    {
      $(".header").removeClass("fixed-top");
    }
  });
// Thêm icon bar vào màn hình
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


