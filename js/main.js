$(document).ready(function () {
    //toggler button
    $('.navbar-toggler').click(function() {
        $('.navbar-toggler').toggleClass('change');
    });

    //sticky navbar
    $(window).scroll(function() {
        let position = $(this).scrollTop();
        
        if(position >= 718) {
            $('.navbar').addClass('navbar-background');
            $('.navbar').addClass('fixed-top');
        } else {
            $('.navbar').removeClass('navbar-background');
            $('.navbar').removeClass('fixed-top');
        }
    });

    //Smooth scroll
    $('.nav-item a, .header-link, #back-to-top').click(function(link) {
        link.preventDefault();
        
        let target = $(this).attr('href');
        let targetTop = $(target).offset().top;

        $('html, body').stop().animate({
            scrollTop: targetTop - 30
        }, 1000);
    });

    //back to top
    //sticky navbar
    $(window).scroll(function() {
        let position = $(this).scrollTop();
        
        if(position >= 718) {
            $('#back-to-top').addClass('scroll-top');
        } else {
            $('#back-to-top').removeClass('scroll-top');
        }
    });

    //ripples
    $("#header, .info").ripples({
        dropRadius: 2,
        perturbance: 0.01
    });

    $('.parent-container').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true
        }
        // other options
    });
});

