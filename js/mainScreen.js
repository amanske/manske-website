$(document).ready(function () {
	getHeaderHeight();
	getFooterHeight();
});
$(window).resize(function () {
	getHeaderHeight();
	getFooterHeight();
});


function getHeaderHeight () {
	var height = $('.btn-group').height();
	$('.headerLeft').css('height', height+'px');
}
function getFooterHeight () {
	var height = $('.footer').outerHeight();
	$('.dotNavigation').css('margin-bottom', (height + $('dotNavigation').height())+'px');
}