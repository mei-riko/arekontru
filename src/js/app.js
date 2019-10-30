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
        showMaskOnHover: true,
        onincomplete: function(){ 
            $(this).closest("form").addClass('error-phone'); 
            $(this).addClass('error'); 
            $(this).siblings(".error_phone").addClass('error').html('Укажите корректный номер'); 
        }, 
        oncomplete: function(){ 
            $(this).closest("form").removeClass('error-phone'); 
            $(this).removeClass('error'); 
            $(this).siblings(".error_phone").removeClass('error').html(''); 
        },
        })
    }
    $('input.phone').on('keydown', function(event) {
        if (event.keyCode === 13 && !$(this).inputmask("isComplete") ) {
            event.preventDefault();
            $(this).blur();
            return false;
        }
    });

    // Product Slider
    if( $(".slider").length > 0){
        $('.slider_for .slider__image').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            dots: false,
            fade: true,
            asNavFor: '.slider_for .slider__nav',
        });
        $('.slider_for .slider__nav').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            asNavFor: '.slider_for .slider__image',
            arrows: false,
            // dots: true,
            // centerMode: true,
            focusOnSelect: true
        });

        $('.header-block_card .list.slider').slick({
            slidesToShow: 4,
            slidesToScroll: 4,
            // arrows: false,
            // dots: false,
            // fade: true,
            responsive: [
                {
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        arrows: true,
                    }
                },
                {
                    breakpoint: 400,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: true,
                    }
                }
            ]            
        });
    }

    // Rent JS
    // Any change input
    let priceCalc = parseInt($("#priceCalc").text());
    let priceResult = $("#priceResult");
    let priceCount = $("#priceCount");
    let pricePeriod = $("#pricePeriod");
    $("#calculator .input").on("input",function(ev){
        let inputChange = 0;
        if( priceCount.val() != '' && pricePeriod.val() != '' ){
            inputChange = parseInt(priceCount.val())*parseInt(pricePeriod.val())*priceCalc;  
            priceResult.text(inputChange);
        }else{
            priceResult.text('—');
        }
    });
    // Click Btn
    $("#modalRentBtn").on("click", function(){
        $("#modalCount").val(parseInt(priceCount.val()));
        $("#modalPeriod").val(parseInt(pricePeriod.val()));
    });

});