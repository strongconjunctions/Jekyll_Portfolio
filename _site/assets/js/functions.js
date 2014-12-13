$(function() {
	smoothScroll(300);
	projectsSlider(); // when the page loads the 'projectsSlider' function will run
});


function smoothScroll (duration) {
	$('a[href^="#"]').on('click', function(event) {

		var target = $( $(this).attr('href') );

		if( target.length ) {
			event.preventDefault();
			$('html, body').animate({
				scrollTop: target.offset().top
			}, duration);
		}
	});
}


function projectsSlider() {

	$('.thumb').click(function() {
		$('.projects-slider').css('left','-100%');
	});

	$('.return').click(function() {
		$('.projects-slider').css('left','0%');
	});
}