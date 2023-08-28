/**
 * Function Ready For Load Page
 */
$(document).ready(function () {
    /**
    * LOADING PAGE SOURCE CODE
    */
    $('.loaderx').fadeOut(2000, function () {
        $('#loading').fadeOut(1000, function () {
            $('body').css('overflow', 'auto')
        })
    })
    /**
    * IMAGE GROUP SLIDER SOURCE CODE
    */
    function slidImage(imageGroup, mainImage) {
        $(imageGroup).click(function () {
            let image_src = $(this).attr('src');
            $(mainImage).attr('src', image_src);
        })

    }
    slidImage('#sideImage-1 img', '#mainImage-1')
    slidImage('#sideImage-2 img', '#mainImage-2')
    slidImage('#sideImage-3 img', '#mainImage-3')
    slidImage('#sideImage-4 img', '#mainImage-4')
    /**
     * COUNTER DOWN SOURCE CODE
     */
    function makeTimer() {
        var endTime = new Date("29 September 2023 9:56:00 GMT+01:00");
        endTime = (Date.parse(endTime) / 1000);
        var now = new Date();
        now = (Date.parse(now) / 1000);
        var timeLeft = endTime - now;
        var days = Math.floor(timeLeft / 86400);
        var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
        var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
        var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
        $("#days").html(days + "<span>D</span>");
        $("#hours").html(hours + "<span>H</span>");
        $("#minutes").html(minutes + "<span>M</span>");
        $("#seconds").html(seconds + "<span>S</span>");
    }
    setInterval(function () { makeTimer(); }, 1000);
    /**
        * ACCORDING SLIDER SOURCE CODE
        */
    $('#slider .Box-info').hide();
    $('#slider .toggel').click(function () {
        $('.Box-info').not($(this).next()).slideUp(500);
        $(this).next().slideToggle(500);
    });

    /**
        * NAVBAR CHANGE SOURCE CODE
        */
    let sectionTop = $('#slider').offset().top;
    $(window).scroll(function () {
        let windowScroll = $(window).scrollTop();
        if (windowScroll > sectionTop - 350) {
            $('nav').css('backgroundColor', '#2B4865')
            $('#BtnUp').fadeIn(500);
        }
        else {
            $('nav').css('backgroundColor', 'transparent')
            $('#BtnUp').fadeOut(500);
        }
    });
    /**
    * HEADER LOADER SOURCE CODE
    */
    $('#BtnUp').click(function () {
        $("body,html").animate({ scrollTop: 0 }, 2000)
    })
    /**
    * LINK MOVE SOURCE CODE
    */
    $('a').click(function (eventInfo) {
        let hrefLink = eventInfo.target.getAttribute('href');
        console.log(hrefLink);
        let sectionMove = $(hrefLink).offset().top
        console.log(sectionMove);
        $("li a").removeClass("Active-Link");
        $(this).addClass("Active-Link");
        $("body,html").animate({ scrollTop: sectionMove }, 1000)
    })
    $('#Header .loader').click(function () {
        let slider = $('#slider').offset().top
        $("body,html").animate({ scrollTop: slider - 200 }, 2000)
    })
    /**
     * SIDED BAR NAVIGATION SOURCE CODE
     */
    let sideList = $('.sideNav ul').innerWidth();
    $('.close-icon').click(function () {
        $('.sideNav ').css('right', -sideList)
    })
    $('.sideNav ').css('right', -sideList)
    $('#slideIcon').click(function () {

        if ($('.sideNav ').css('right') == '0px') {
            $('.sideNav ').animate({ right: -sideList }, 100)
        }
        else {
            $('.sideNav ').animate({ right: 0 }, 100)
        }
    })
    /**
     * TEXT AREA MAX CHAR LENGTH SOURCE CODE
     */
    var totalchar = 100;
    $('textarea').keydown(function (event) {
        var leftchars = totalchar - $(this).val().length;
        $('#remaining').text(leftchars);
        if (leftchars == 0) {
            event.preventDefault();
        }
    });

});