 $(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});
var navPos, winPos;
function refreshVar() {
    navPos = $('header').offset().top;
}
refreshVar();
$(window).resize(refreshVar);
$(window).scroll(function() {
    winPos = $(window).scrollTop();
  if (winPos > navPos) {
        $('.scrollup-btn').addClass('rotate');
    }else{
        $('.scrollup-btn').removeClass('rotate');
    }
});
$('.scrollup-btn').click(function(){
    if($(this).hasClass('rotate')){
        $('body,html').animate({scrollTop:0},800);
    }else{
       $('body,html').animate({scrollTop:$(document).height()},800);
    }
});
