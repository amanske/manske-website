$(document).ready(getHeaderHeight);
$(window).resize(getHeaderHeight);

function getHeaderHeight () {
	var height = $('.btn-group').height();
	$('.headerLeft').css('height', height+'px');
}