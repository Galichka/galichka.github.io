$('a[href*="#"]').on('click', function(e){
		$('html,body').animate({
			scrollTop: $($(this).attr('href')).offset().top - 100
		},1000);
		e.preventDefault();
	});

jQuery(document).ready(function($) {
  $(".top-btn").on("click", function() {
    if ($(this).hasClass("top-btn")) {
      var movePos = $(window).scrollTop() + $(window).height();
    }
    $("html, body").animate({ scrollTop: movePos }, 900);
  });
});