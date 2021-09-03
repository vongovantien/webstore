
$(document).ready(function(){
    // $("button.btn").click(function() {
    //   $("div#map").slideToggle(2000);
    // });
    // $("div.vehicle-item-col").click(function () {
    //   $("div.packages-item__price > span").text() * 2;
    // });
  $(window).scroll(function(event){
    var pos_body = $("html body").scrollTop();
    var pos_img2 = $("div:nth-child(2)").offset().top;

    if(pos_body>pos_img2-200){
      $("div:nth-child(2)").addClass("animate__animated animate__fadeInLeft");
    }
  });
});
