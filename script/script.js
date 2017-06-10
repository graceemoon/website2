console.log("gracee's website #2 dedicated to sexy makeup");

"use strict";


$('nav').hide();

$('.burger').click(function() {
	$('nav').slideToggle(280, function() {
		// direction: 'left'
		// $('nav').css("z-index", "100");
		$('span', this).toggleClass('.span-toggle')
	})
})



// image hover zoom/rotation
    $('.product a').hover(function() {
        $('.iz', this).addClass('transition');
    }, function() {
        $('.iz', this).removeClass('transition');
    });




