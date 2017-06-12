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


// image hover zoom/rotation + cart transition
// $('.product a').hover(function() {
//     $('.iz', this).addClass('transition');
//     $('#fa-cart', this).addClass('cart-opacity');
// }, function() {
//     $('.iz', this).removeClass('transition');
//     $('#fa-cart', this).removeClass('cart-opacity');
// });



// add to cart
$('.product a').hover(function() {
    $('.iz', this).addClass('transition');
    $('#fa-cart', this).addClass('cart-opacity');
        // $('.fa-checks', this).css('opacity', '1');
}, function() {
    $('.iz', this).removeClass('transition');
    $('#fa-cart', this).removeClass('cart-opacity');

    // $('.fa-checks', this).css('opacity', '0');
});


// $('.add-cart').click(function() {
// 	console.log('check check?')
// 	$('#fa-check').css('opacity', '1');
// }, function() {
// 	$('#fa-check').css('opacity', '0');
// })












