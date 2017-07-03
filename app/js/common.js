$(function(){
    $('.sl').slick({
        dots: true,
        arrows: false
    });
    $(".navbar-toggler").click(function(){
        $(".navbar-nav").slideToggle(function(){
            if($(this).css('display') === 'none'){
                $(this).removeAttr('style');
            }
        });
    })
});