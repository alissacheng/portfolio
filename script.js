$(function(){
    $(".header__text").hide()
    $(".arrow").hide()
    setTimeout(function(){
        $(".header__text").fadeIn("900");
    }, 500)

    setTimeout(function(){
        $(".arrow").fadeIn("900");
    }, 1500)

    $("#navButton").on("click", function(){
        $(".main-nav").toggleClass("display")
        $(".display").hide();
        $(".display").fadeIn("900")
    })

    $(".scroll").on("click", function (){
        $("body,html").animate(
            {
            scrollTop: $(".aboutMe").offset().top
            },
            800
        );
    })
});

var frmvalidator  = new Validator("contactform");
frmvalidator.addValidation("name","req","Please provide your name");
frmvalidator.addValidation("email","req","Please provide your email");
frmvalidator.addValidation("email","email", "Please enter a valid email address");
