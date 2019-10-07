import $ from 'jquery'
$(document).ready(() =>{
    $("a.scroll").click(function() {
        $("html, body").animate({
           scrollTop: $($(this).attr("href")).offset().top + "px"
        }, {
           duration: 500,
           easing: "swing"
        });
        return false;
    });

    // Input mask
    if( $('.phone').length > 0 ) {
        $(".phone").inputmask({
            mask: "8 999 999 99 99",
            placeholder: " ",
            showMaskOnHover: true
        })
    }
});