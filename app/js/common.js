$(function(){
    $('.sl').slick({
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000
    });
    $(".navbar-toggler").click(function(){
        $(".navbar-nav").slideToggle(function(){
            if($(this).css('display') === 'none'){
                $(this).removeAttr('style');
            }
        });
    })
});