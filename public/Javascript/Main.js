$(document).ready(function () {
    $('.menuLi').hover(function () {
        $(this).css("background-color", "RGB(254, 254, 254)")
        $(this).css("border-color", "RGB(35, 35, 35)")
        $(this).css("color", "RGB(44,147,139)")
    }, function () {
        $(this).css("background-color", "RGB(44,147,139)")
        $(this).css("border-color", "RGB(35,35,35)")
        $(this).css("color", "RGB(35,35,35)")
    })
    $('.menuLi').click(function() {
        switch(this.id) {
            case "toTop":
                $('html, body').animate({scrollTop: "0px"})
                $('#mobileMenu').slideToggle('slow')
                break;
            case "toS1":
                $('html, body').animate({scrollTop: $("#sec1").offset().top - 150})
                $('#mobileMenu').slideToggle('slow')
                break;
            case "toS2":
                $('html, body').animate({scrollTop: $("#sec2").offset().top - 150})
                $('#mobileMenu').slideToggle('slow')
                break;
            case "toS3":
                $('html, body').animate({scrollTop: $("#sec3").offset().top - 150})
                $('#mobileMenu').slideToggle('slow')
                break;
            case "toS4":
                $('html, body').animate({scrollTop: $("#sec4").offset().top - 150})
                $('#mobileMenu').slideToggle('slow')
                break;
            default:
                console.log('Default: Somthing went wrong.')
                break;
        }
    })
    $('#burger').click(function() {
        $('.menuLi').css("background-color", "RGB(44,147,139)")
        $('.menuLi').css("border-color", "RGB(35,35,35)")
        $('.menuLi').css("color", "RGB(35,35,35)")
        $('#mobileMenu').slideToggle('slow')
    })
})