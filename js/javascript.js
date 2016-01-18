$(document).ready(function () {
	function setHeight() {
        $(".mainpageproject").each(function (index) {
        	if(index === 0) {
	            var top = index * $(window).height();
	            $(this).css("height", $(window).height()*2/3 + "px");
	            $(this).css("top", 	top + "px");
	        } else if(index === 1) {
	        	var top = index * $(window).height()*2/3;
	            $(this).css("height", $(window).height()+ "px");
	            $(this).css("top", top + "px");
	        } else {
	        	var top = index * $(window).height() - 1/3*$(window).height() ;
	            $(this).css("height", $(window).height() + "px");
	            $(this).css("top", top + "px");
	        }
        });
    }

    function setFixed() {
        console.log($(window).width());
        if($(window).width() > 600) {
            $("#background").css("position", "fixed");
        } else {
            $("#background").css("position", "initial");
        }
    }

	window.onload = function () {
        setHeight();
        setFixed();
    };

    $(window).scroll(function () {
        var top = $(window).scrollTop();
        if(top > $(window).height()*2/3) {
        	$('#header').fadeIn(400);
        	$('header#maininfo .background-name').hide();
        	$('header#maininfo .project-name').fadeIn(400);
        } else {
        	$('#header').fadeOut(400);
        	$('header#maininfo .project-name').hide();
        	$('header#maininfo .background-name').fadeIn(400);
            $('nav a').css("color", "white");
        }
    });

    $(window).resize(function () {
        setHeight();
        setFixed();
    });
});
