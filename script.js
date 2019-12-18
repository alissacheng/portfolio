$(function(){
    //Hide and fade in heading in header on load
    $(".header__text").hide()
    $(".arrow").hide()
    setTimeout(function(){
        $(".header__text").fadeIn("900");
    }, 500)
//Set timeout fade in arrow button in header
    setTimeout(function(){
        $(".arrow").fadeIn("900");
    }, 1500)
//menu button toggle display
    $("#navButton").on("click", function(){
        $(".main-nav").toggleClass("display")
        $(".display").hide();
        $(".display").fadeIn("900")
    })
    //Header arrow scroll button to about me section
    $(".scroll").on("click", function (){
        $("body,html").animate(
            {
            scrollTop: $(".aboutMe").offset().top
            },
            800
        );
    })

    //slide in animate on scroll
    AOS.init();
    AOS.init({
        disable: "mobile"
    })
});

