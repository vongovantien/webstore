$(document).ready(function () {
    // fixed nav bar
    $(window).scroll(function () {
        var posBody = $(window).scrollTop();
        if (posBody >= 100) {
            $(".header").addClass("fixed-top");
        } else {
            $(".header").removeClass("fixed-top");
        }
    });
    // bar table
    $(".mobile-bar").hide();
    $(".mobile-icon-close").click(function (e) {
        $(".mobile-bar").slideToggle();
    });
    $(".icon-bar").click(function (e) {
        $(".mobile-bar").slideToggle();
    });

    // show map
    $(".map").hide();
    $("#btn-map").click(function () {
        $(".map").slideToggle(1000);
    });

    // go to top
    $("#gototop").hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 500) $("#gototop").css("opacity", 1).show();
        else $("#gototop").css("opacity", 0).hide();
    });
    // scroll to top
    $("#gototop").click(function () {
        $("html, body").animate({ scrollTop: 0 }, 1000);
    });

    //loader
    $(window).on("load", function (e) {
        $(".icon-spin").fadeOut("slow");
        $(".loader").delay(1000).fadeOut("fast").removeClass(".loader");
    });
    // click display img
    $(".our-project-item li").on("click", function () {
        $(this).addClass("active-tab").siblings().removeClass("active-tab");
    });
    $(".our-project-item li").click(function (e) {
        var tab = $(this).attr("type");
        $(".layout-item").each(function () {
            if ($(this).hasClass(tab)) {
                $(this).removeClass("hidden");
            } else {
                $(this).addClass("hidden");
            }
        });
    });

    // scroll progress
    $(document).on("scroll", function () {
        var pixels = $(document).scrollTop();
        var pageHeight = $(document).height() - $(window).height();
        var progress = (100 * pixels) / pageHeight;

        $("div.our-progress").css("width", progress + "%");
    });
    // add class product
    $(".packages-item").addClass("wow animate__lightSpeedInLeft animate__slow");
    $(".vehicle-item-col").addClass("animate__slow");
    $(".our-project-layout > .layout-item").addClass("wow animate__tada");
    // add class services
    $(".activity-items > .activity-item:nth-child(odd)").addClass("wow animate__fadeInDown");
    $(".activity-items > .activity-item:nth-child(even)").addClass("wow animate__fadeInUp");
    // add class product
    $(".container-item > .container-items:nth-child(odd)").addClass("wow animate__fadeInUpBig");
    $(".container-item > .container-items:nth-child(even)").addClass("wow animate__fadeInDownBig");
    //add all pages
    $(".copy-writer > i:nth-child(odd)").addClass("wow animate__slideInDown");
    $(".copy-writer > i:nth-child(even)").addClass("wow animate__slideInUp");
    //add class footer
    $(".footer-box > .footer-item:first-child").addClass("wow animate__rotateInUpRight");
    $(".footer-box > .footer-item:nth-child(2)").addClass("wow animate__flipInY");
    $(".footer-box > .footer-item:last-child").addClass("wow animate__rotateInUpLeft");
    wow = new WOW({
        boxClass: "wow", // default
        animateClass: "animate__animated", // default
        offset: 0, // default
        mobile: true, // default
        live: true, // default
    });
    wow.init();
});
// Report and Stats
var bookTimer = null;
var washTimer = null;
var reviewTimer = null;
var tipTimer = null;
$(document).ready(function () {
    var book = $("#book");
    var wash = $("#wash");
    var review = $("#review");
    var tip = $("#tip");

    $(window).scroll(function () {
        if ($(this).scrollTop() >= 2500) {
            if (bookTimer === null) bookTimer = inc(book, 53, 1060, "book");
            if (washTimer === null) washTimer = inc(wash, 1316, 26320, "wash");
            if (reviewTimer === null) reviewTimer = inc(review, 79, 1580, "review");
            if (tipTimer === null) tipTimer = inc(tip, 200, 4000, "tip");
        }
    });
});
function inc(el, steps, max, type) {
    var value = parseInt(el.text());
    return setInterval(function () {
        value += steps;
        if (value <= max) {
            el.text(value);
        } else {
            if (type === "book") clearInterval(bookTimer);
            else if (type === "wash") clearInterval(washTimer);
            else if ((type = "review")) clearInterval(reviewTimer);
            else if ((type = "tip")) clearInterval(tipTimer);
        }
    }, 100);
}
// change img on thumbnail
function changeImg() {
    var images = document.querySelectorAll(".my-pic-thumb img");
    for (var i = 0; i < images.length; i++) {
        images[i].onclick = function () {
            var path = this.src;
            var img = document.getElementById("myImg");
            img.setAttribute("src", path);
        };
    }
}
