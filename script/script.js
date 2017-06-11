console.log("gracee's website #2 dedicated to sexy makeup");

"use strict";



// launch page click to head to collection page
$('.words').click(function() {
	window.location.href='collection.html';
});



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
	$('nav').toggle('slide', {direction:'left'}, 300);
	$('.wrapped').toggleClass('open', 300)
	console.log($(this).find('span'))
	$(this).find('span').toggleClass('span-toggle');
});


// image hover zoom/rotation
$('.product a').hover(function() {
    $('.iz', this).addClass('transition');
}, function() {
    $('.iz', this).removeClass('transition');
});


