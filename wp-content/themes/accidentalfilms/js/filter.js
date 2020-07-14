$(document).ready(function() {
	$('ul#filter a').click(function() {
		$(this).css('outline','none');
		$('ul#filter .current').removeClass('current');
		$(this).parent().addClass('current');

		var filterVal = $(this).text().toLowerCase().replace(' ','-');

		if(filterVal == 'all') {
			$('ul#project-list li.hidden').fadeIn('slow').removeClass('hidden');
		} else {
			$('ul#project-list li').each(function() {
				if(!$(this).hasClass(filterVal)) {
					$(this).fadeOut('normal').addClass('hidden');
				} else {
					$(this).fadeIn('slow').removeClass('hidden');					
				}
			});
		}

		return false;
	});
});