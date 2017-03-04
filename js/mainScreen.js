$(document).ready(getHeaderHeight);
$(window).resize(getHeaderHeight);

function getHeaderHeight () {
	var height = $('.btn-group').height();
	$('#mainScreen').css('margin-top', height+'px'); 
}