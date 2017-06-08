console.log("gracee's website #2 dedicated to sexy makeup");

"use strict";


$('nav').hide();

$('.burger').click(function() {
	$('nav').slideToggle(280, function() {
		direction: 'left'
		$('nav').css("z-index", "100");
	})
})


// var main = function() {
//   $('.icon-menu').click(function() {
//     $('.menu').animate({
//       left: "0px"
//     }, 200);

//     $('body').animate({
//       left: "285px"
//     }, 200);
//   });

//   $('.icon-close').click(function() {
//     $('.menu').animate({
//       left: "-285px"
//     }, 200);

//     $('body').animate({
//       left: "0px"
//     }, 200);
//   });
// };



// hover over image with .iz class for zoom
    $('.product a').hover(function() {
        $('.iz').addClass('transition');
    }, function() {
        $('.iz').removeClass('transition');
    });








