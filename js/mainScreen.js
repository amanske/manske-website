$(document).ready(function () {
	setCorrectHeaderHeight();
	setCorrectDotMargin();

	$('#homeDot').click(function () {
		$('wrapper').clearQueue();
	    $('.wrapper').animate({marginLeft: '0'},1000);

	});
	$('#aboutDot').click(function () {
		$('wrapper').clearQueue();
	    $('.wrapper').animate({marginLeft: '-100%'},1000);

	});
	$('#resumeDot').click(function () {
	    $('.wrapper').animate({marginLeft: '-200%'},1000);

	});
});
$(window).resize(function () {
	setCorrectHeaderHeight();
	setCorrectDotMargin();
});


function setCorrectHeaderHeight () {
	var height = $('.btn-group').height();
	$('.headerLeft').css('height', height+'px');
}
function setCorrectDotMargin () {
	var height = $('.footer').outerHeight();
	$('.dotNavigation').css('margin-bottom', (height + $('dotNavigation').height())+'px');
}
function buttonToDot (type) {
	var dot = document.getElementById(type);
	dot.click();
}

