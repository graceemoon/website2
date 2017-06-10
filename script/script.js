console.log("gracee's website #2 dedicated to sexy makeup");

"use strict";


$('nav').hide();

$('.burger').click(function() {
	$('nav').toggle(280, function() {
		// $('span', this).toggleClass('.span-toggle')
	})
})



// image hover zoom/rotation
    $('.product a').hover(function() {
        $('.iz', this).addClass('transition');
    }, function() {
        $('.iz', this).removeClass('transition');
    });




