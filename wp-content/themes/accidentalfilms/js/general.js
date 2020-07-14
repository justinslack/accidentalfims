jQuery(document).ready(function(){
jQuery('ul.projects li:nth-child(3n)').addClass('second-item');
jQuery('ul.news li:nth-child(5n)').addClass('second-item');

// hide #back-top first
	jQuery("a#back-top").hide();
	jQuery("a#back-top").prepend('<span></span>');
	// fade in #back-top
	jQuery(function () {
		jQuery(window).scroll(function () {
			if ($(this).scrollTop() > 300) {
				$('a#back-top').fadeIn();
			} else {
				$('a#back-top').fadeOut();
			}
		});

		// scroll body to 0px on click
		jQuery('a#back-top').click(function () {
			jQuery('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
	});

jQuery("#email").focus(function() {
    if ($(this).val() == $(this).attr('rel'))
        $(this).val('');
});
jQuery("#email").blur(function() {
    if ($(this).val() == '')
        $(this).val($(this).attr("rel"));
});

jQuery('span.title').css('display', 'block');
jQuery('span.title').css('opacity', 0.0);
jQuery('ul.authors li a').hover(function() {
        jQuery('span.title', this).stop().animate({opacity:1.0},500);
},
function() {
        jQuery('span.title', this).stop().animate({opacity:0.0},500);
});

});
