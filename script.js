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
	$("#sandwich").click(function(){
		$("nav ul").toggle('fast');
	})	
	$("footer").text(String.fromCharCode(0169)+ (new Date()).getFullYear());
	if(window.matchMedia("(max-width: 768px)").matches){
	$(window).on("orientationchange",function(){
  		if(window.orientation != 0)
  		{
    		$("nav ul").css({'display':'inline-block'});
  		}
  		else{
  			$("nav ul").css({'display':'none'});	
  		}
	})
	}