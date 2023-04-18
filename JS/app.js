$(function () {
    var header = $(".header"),
        introH = $("#pricing").innerHeight(),
        scrollOffset = $(window).scrollTop();


    /*FIXED HEADER*/
    checkSkroll(scrollOffset);

    $(window).on("scroll", function () {
        scrollOffset = $(this).scrollTop();

        checkSkroll(scrollOffset);

    });

    function checkSkroll(scrollOffset) {

        if (scrollOffset >= introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }

    }


    /*Smooth scroll*/
    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();

        var blockID = $(this).data('scroll'),
            blockOffset = $(blockID).offset().top;

        $("#nav a").removeClass("active");
        $(this).addClass("active");

        $("html, body").animate({
            scrollTop: blockOffset
        }, 500);
    });
    

    /*Mneu nav toggle*/
    $("#nav_toggle").on("click", function (event) {
        event.preventDefault();

        $(this).toggleClass("active");
        $("#nav").toggleClass("active");

    });
});