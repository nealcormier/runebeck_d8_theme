
jQuery(window).scroll(function() {
		jQuery('#block-block-5 > div > div:nth-child(1) > img, #block-block-5 > div > div:nth-child(2) > img, #block-block-5 > div > div:nth-child(3) > img').each(function(){
		var imagePos = jQuery(this).offset().top;

		var topOfWindow = jQuery(window).scrollTop();
			if (imagePos < topOfWindow+750) {
				jQuery(this).addClass("expandOpen");
			}
		});
	});



jQuery(window).scroll(function() {
		jQuery('#container > div > div:nth-child(1) > img, #container > div > div:nth-child(2) > img, #container > div > div:nth-child(3) > img').each(function(){
		var imagePos = jQuery(this).offset().top;

		var topOfWindow = jQuery(window).scrollTop();
			if (imagePos < topOfWindow+750) {
				jQuery(this).addClass("bigEntrance");
			}
		});
	});


jQuery(window).scroll(function() {
		jQuery('h2, .white_text').each(function(){
		var imagePos = jQuery(this).offset().top;

		var topOfWindow = jQuery(window).scrollTop();
			if (imagePos < topOfWindow+750) {
				jQuery(this).addClass("slideDown");
			}
		});
	});


jQuery(window).scroll(function() {
		jQuery('h2, .white_text').each(function(){
		var imagePos = jQuery(this).offset().top;

		var topOfWindow = jQuery(window).scrollTop();
			if (imagePos < topOfWindow+750) {
				jQuery(this).addClass("slideDown");
			}
		});
	});

jQuery(window).scroll(function() {
		jQuery('.number_block').each(function(){
		var imagePos = jQuery(this).offset().top;

		var topOfWindow = jQuery(window).scrollTop();
			if (imagePos < topOfWindow+750) {
				jQuery(this).addClass(".hide_element");
			}
		});
	});


/*

  jQuery(window).scroll(function() {
		jQuery('.node-article, .views-row').each(function(){
		var imagePos = jQuery(this).offset().top;

		var topOfWindow = jQuery(window).scrollTop();
			if (imagePos < topOfWindow+50) {
				jQuery(this).addClass("fadeOut");
			}
		});
	});


 jQuery(window).scroll(function() {
		jQuery('#dissappear_wrap').each(function(){
		var imagePos = jQuery(this).offset().top;

		var topOfWindow = jQuery(window).scrollTop();
			if (imagePos < topOfWindow+150) {
				jQuery(this).addClass("fadeOutQuick");
			}
		});
	}); 


  jQuery(window).scroll(function() {
		jQuery('#appear_wrap').each(function(){
		var imagePos = jQuery(this).offset().top;

		var topOfWindow = jQuery(window).scrollTop();
			if (imagePos < topOfWindow+150) {
				jQuery(this).addClass("fadeIn");
			}
		});
	});*/









jQuery('div.bgParallax').each(function() { 
    var $obj = jQuery(this); 

    jQuery(window).scroll(function() { 

      var yPos = -(jQuery(window).scrollTop() / $obj.data('speed')); var bgpos = '50% '+ yPos + 'px'; 

      $obj.css('background-position', bgpos ); 

    }); 

  });

