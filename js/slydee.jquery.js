/*
 * Slydee: Panel Slider
 * www.slydee.gary-wilkerson.com  
 * By: Gary Wilkerson | www.gary-wilkerson.com  
 * Free to use under the MIT license.  
 * http://www.opensource.org/licenses/mit-license.php
*/

(function($){

	$.fn.slydee = function(options){

		options = $.extend({
			'time' : 500,
			'width' : '250px',
			'direction' : 'left',
			'push' : 'false',
			'menuName' : '#panel'
		}, options);

		var width = options.width;
		var negWidth = '-' + options.width;
		var direction = options.direction;
		var push = options.push;
		var menuName = options.menuName;

		$(menuName).css(direction, negWidth);

		$(this).click(function(){

			if(direction == 'left'){

				if ($(menuName).css(direction) == negWidth){

					$(menuName).animate({
						left : '0px'
					}, options.time);

						if(push == 'true'){
							$('.wrap').animate({
								left : width
							}, options.time);
						}
					
				}else{
					
					$(menuName).animate({
						left : negWidth
					}, options.time);

						if(push == 'true'){
							$('.wrap').animate({
								left : '0px'
							}, options.time);
						}

				}

			}else{

				if ($(menuName).css(direction) == negWidth){

					$(menuName).animate({
						right : '0px'
					}, options.time);

						if(push == 'true'){
							$('.wrap').animate({
								right : width
							}, options.time);
						}
					
				}else{
					
					$(menuName).animate({
						right : negWidth
					}, options.time);

					if(push == 'true'){
							$('.wrap').animate({
								right : '0px'
							}, options.time);
					}

				}

			}

		});

		return this;

	};

}(jQuery));