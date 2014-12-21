var imgCount = 1;
var total = 8;

function slide(x) {
	var Image = document.getElementById('img');
	imgCount = imgCount + x;
	if(imgCount > total){ imgCount = 1; }
	if(imgCount < 1){ imgCount = total; }
	Image.src = "../assets/img/projects/proj" + imgCount + ".jpg";
}







/*  $(function() {
    $(".rslides").responsiveSlides({
     timeout: 4000,
     fx:   'scrollHorz',
     next: '#next',
     prev: '#prev',
 	});
  });*/



/*

// This is the Projects slider function

$(function() {
	smoothScroll(300);
	projectsSlider(); // when the page loads the 'projectsSlider' function will run
	projectsLoad();
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
		$('.projects-container').show();
	});

	$('.return').click(function() {
		$('.projects-slider').css('left','0%');
		$('.projects-container').hide(800);
	});
}


function projectsLoad() {

	$.ajaxSetup({ cache: true });

	$('.thumb-unit').click(function() {

		var $this = $(this),
			newTitle = $this.find('strong').text(),
			spinner = '<div class="loader">Loading...</div>',
			newHTML = '../portf/portf1.html';
		$('.portf').html(spinner).load(newHTML);
		$('.p-title').text(newTitle);
	});

}*/


