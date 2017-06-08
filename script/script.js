console.log("gracee's website #2 dedicated to sexy makeup");

"use strict";


$('nav').hide();

$('.burger').click(function() {
	$('nav').slideToggle(280, function() {
		// direction: 'left'
		$('nav').css("z-index", "100");
	})
})



// image hover zoom/rotation
    $('.product a').hover(function() {
        $('.iz').addClass('transition');
    }, function() {
        $('.iz').removeClass('transition');
    });








