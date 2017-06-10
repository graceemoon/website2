console.log("gracee's website #2 dedicated to sexy makeup");

"use strict";


$('nav').hide();

// $('.burger').click(function() {
// 	$('nav').slideToggle(800, function() {
// 		// $('span', this).toggleClass('.span-toggle')
// 	})
// })

// jquery ui slide from left to right nav
// $('.burger').click(function(){
// 	$('nav').toggle('slide');
// })


$('.burger').click(function(){
	$('nav').toggle('slide', {direction:'left'}, 300)
})


// image hover zoom/rotation
    $('.product a').hover(function() {
        $('.iz', this).addClass('transition');
    }, function() {
        $('.iz', this).removeClass('transition');
    });




