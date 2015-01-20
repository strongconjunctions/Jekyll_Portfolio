// PROJECTS SECTION CODE

var imgCount = 1;
var total = 8;

function slide(x) {
	var Image = document.getElementById('img');
	imgCount = imgCount + x;
	if(imgCount > total){ imgCount = 1; }
	if(imgCount < 1){ imgCount = total; }
	Image.src = "../assets/img/projects/proj" + imgCount + ".jpg";
}


window.setInterval(function slideA() {
	var Image = document.getElementById('img');
	imgCount = imgCount + 1;
	if(imgCount > total){ imgCount = 1; }
	if(imgCount < 1){ imgCount = total; }
	Image.src = "../assets/img/projects/proj" + imgCount + ".jpg";
}, 7000);





// CLIENT SECTION CODE

function clientRelated() {
	$('.cl-section').first().addClass('active-section');
	$('.cl-logo').first().addClass('active-section');
	$('.cl-mob-nav span').first().addClass('active-section');

	$('.cl-logo, .cl-mob-nav span').click(function() {
		var $this = $(this),
			$siblingss = $this.parent().children(),
			position = $siblingss.index($this);

		$('.cl-section').removeClass('active-section').eq(position).addClass('active-section');
		$siblingss.removeClass('active-section');
		$this.addClass('active-section');
	});

	$('#next, #prev').click(function() {

		var $this = $(this),
			activeClient = $('.clients-carousel').find('.active-section'),
			position = $('.clients-carousel').children().index(activeClient),
			clientNum = $('.cl-section').length;


			if($this.hasClass('next1')) {

				if(position < clientNum -1){
					$('.active-section').removeClass('active-section').next().addClass('active-section');
				} else {
					$('.cl-section').removeClass('active-section').first().addClass('active-section');
					$('.cl-logo').removeClass('active-section').first().addClass('active-section');
				}
			} else {

				if (position === 0) {

					$('.cl-section').removeClass('active-section').last().addClass('active-section');
					$('.cl-logo').removeClass('active-section').last().addClass('active-section');

				} else {

				$('.active-section').removeClass('active-section').prev().addClass('active-section');
				}
			}
	});
}

clientRelated();













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


