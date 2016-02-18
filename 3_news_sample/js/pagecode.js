$(function(){
	$(".top").click(function () {
        $("html,body").animate({
            scrollTop: 0
        }, 900);
        return false;
    });})