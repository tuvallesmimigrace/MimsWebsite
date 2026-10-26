$(document).ready(function()
{
    $(".slider").ripples(
    {
        resolution: 256,
        dropRadius: 20,
        perturbance: 0.03,
        interactive: true
    });


    $(".text").typed(
    {
        strings:
        [
            "WELCOME TO <strong class='primary'>MIMS WEB</strong>",
            "WANNA GET TO KNOW <strong class='primary'>MORE?!</strong>"
        ],

        typeSpeed: 10,
        backSpeed: 10,
        startDelay: 800,
        backDelay: 180,
        loop: true,
        showCursor: true
    });


    $(window).scroll(function()
    {
        var scrollPosition = $(window).scrollTop();
        var sliderHeight = $(".slider").height();

        if (scrollPosition >= sliderHeight * 0.60)
        {
            $("#nav").removeClass("transparent");
            $("#nav").addClass("secondary");
        }
        else
        {
            $("#nav").removeClass("secondary");
            $("#nav").addClass("transparent");
        }
    });


    $("#team-members").owlCarousel(
    {
        items: 3,

        margin: 30,

        loop: true,

        nav: true,

        dots: true,

        autoplay: true,

        autoplayTimeout: 3000,

        autoplayHoverPause: true,

        smartSpeed: 800,

        navText:
        [
            '<i class="fa fa-chevron-left"></i>',
            '<i class="fa fa-chevron-right"></i>'
        ],

        responsive:
        {
            0:
            {
                items: 1
            },

            600:
            {
                items: 2
            },

            992:
            {
                items: 3
            }
        }
    });

});