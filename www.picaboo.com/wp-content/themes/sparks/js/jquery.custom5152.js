/*-----------------------------------------------------------------------------------

 	Custom JS - All front-end jQuery
 
-----------------------------------------------------------------------------------*/
 
jQuery(document).ready(function($) {

	/* ------------------------------------------------- */
	/* JS - YAY!
	/* ------------------------------------------------- */
	$('body').removeClass('no-js');


	/* ------------------------------------------------- */
	/* Superfish Settings 
	/* ------------------------------------------------- */
	$('#primary-nav > ul')
		/*.zillaMobileMenu({
			hideNavParent: true,
			onInit: function(m) {
				$(m).removeClass('sf-menu primary-menu');
			}
		})*/
		.superfish({
    		delay: 400,
    		animation: {opacity:'show'},
    		speed: 'fast',
    		cssArrows: false,
    		disableHI: true
		});
	/*$('#sign-in ul').superfish({
    		delay: 400,
    		animation: {opacity:'show'},
    		speed: 'fast',
    		cssArrows: false,
    		disableHI: true
		});*/
	
	
	
	/* ------------------------------------------------- */
	/* Responsive video/audio
	/* ------------------------------------------------- */
	//$('#content').fitVids();

	function zilla_resize_media() {
		var $jpplayer = $('.jp-jplayer');

		if( $jpplayer.length && $().jPlayer ) {
			var containerWidth;

			$(window).resize(function() {

				if( $('body').hasClass('single-portfolio') ) { // single portfolio post
					containerWidth = $('.media-element').width();
				} else if( $('body').hasClass('single') ) { // single post
					containerWidth = $('.post-thumb').width();
				} else { // index or archive page
					containerWidth = $('#primary').width();
				}
console.log(containerWidth);
				$jpplayer.each(function() {
					var player = $(this),
						orig_width = player.attr('data-orig-width'),
						orig_height = player.attr('data-orig-height'),
						new_width = containerWidth,
						new_height = Math.floor( (orig_height * new_width) / orig_width);

					if( player.hasClass('jp-jplayer') ) {
						player.jPlayer('option', 'size', { width: new_width, height: new_height });
					}
					if( player.hasClass('embed-video') ) {
						player.width(new_width).height(new_height);
					}
				});

			});
			$(window).trigger('resize');
		}
	}
	zilla_resize_media();


	/* ------------------------------------------------- */
	/* Isotope
	/* ------------------------------------------------- */
	if( $().isotope ) {
		// Vars
		var $container = $('.portfolio-container'),
			$relatedPortfolios = $('.related-portfolios'),
			$filter = $('.portfolio-filter a.pfilter');

		// Needed functions
		var getColWidth = function() {
			var width,
				windowWidth = $(window).width();

			if( $('body').hasClass( 'page-template-template-portfolio-2col-php' ) || $('body').hasClass( 'tax-portfolio-type' ) ) {
                if ($('#view-all-cards').hasClass( 'view-all-cats' )) {
                    if( windowWidth <= 480 ) {
                        width = Math.floor( $container.width() );
                    } else if( windowWidth <= 768 ) {
                        width = Math.floor( $container.width() / 2 );
                    } else if( windowWidth <= 980 ) {
                        width = Math.floor( $container.width() / 3 );
                    } else if( windowWidth <= 1280 ) {
                        width = Math.floor( $container.width() / 4 );
                    } else {
                        width = Math.floor( $container.width() / 5 );
                    }
                } else {
                    if( windowWidth <= 480 ) {
                        width = Math.floor( $container.width() - 10 );
                    } else {
                        width = Math.floor( ($container.width() / 2) - 5 );
                    }
                }
			} else {
				if( windowWidth <= 480 ) {
					width = Math.floor( $container.width() );
				} else if( windowWidth <= 768 ) {
					width = Math.floor( $container.width() / 2 );
				} else if( windowWidth <= 980 ) {
					width = Math.floor( $container.width() / 3 );
				} else if( windowWidth <= 1280 ) {
					width = Math.floor( $container.width() / 4 );
				} else {
					width = Math.floor( $container.width() / 5 );
				}
			}

			if( $relatedPortfolios.length ) {
				if( windowWidth <= 480 ) {
					width = Math.floor( $relatedPortfolios.width() - 10 );
				} else  {
					width = Math.floor( ($relatedPortfolios.width() / 3) - 5 );
				}
			}

			return width;
		}

		function setWidths() {
			var colWidth = getColWidth();
			$container.children().css({ width: colWidth });
			$relatedPortfolios.children().css({ width: colWidth });
		}

		setWidths();

		$container.imagesLoaded( function() {
			$container.isotope({
				resizable: false,
				masonry: {
					columnWidth: getColWidth()
				}
			});
		});

		$relatedPortfolios.imagesLoaded( function() {
			$relatedPortfolios.isotope({
				resizable: false,
				masonry: {
					columnWidth: getColWidth()
				}
			});
		});

		$(window).smartresize(function() {
			setWidths();
			$container.isotope({
				masonry: {
					columnWidth: getColWidth()
				}
			});
			$relatedPortfolios.isotope({
				masonry: {
					columnWidth: getColWidth()
				}
			});
		});

		$filter.click(function(e) {
			if( $('body').hasClass('tax-portfolio-type') || $(this).hasClass('card-filter-preview') ) {
				return;
			}
			// do the filter
			var selector = $(this).attr('data-filter');
			$container.isotope({ filter: selector });

			// update filter class
			$filter.removeClass('active');
			$(this).addClass('active');

			// prevent default click
			e.preventDefault();
			return false;
		});

        /*$filter.mouseenter(
            function () {
                jQuery(this).animate({
                    top: '-10px'
                }, "slow");
            }
        );

        $filter.mouseout(
            function () {
                jQuery(this).animate({
                    top: '0px'
                }, "slow");
            }
        );*/

	}

	/* ------------------------------------------------- */
	/* Backstretch
	/* ------------------------------------------------- */
	if( $().backstretch ) {
		$customBG = $('.custom-bg');
		$.each($customBG, function() {
			var $this = $(this),
				url = $this.data('url');
			if( url ) {
				$(this).backstretch(url);
			}
		});
	}

});