//updated 2/9/17

//get device width
var device_width = Math.max( jQuery(window).width(), window.innerWidth);
var device_height = Math.max( jQuery(window).height(), window.innerHeight);

var this_page;

var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
var isApple = /iPhone|iPad|iPod/i.test(navigator.userAgent);

function dataLayerEvent(category, action, label, value) {
    if (label == '') {
        dataLayer.push({'event':'GAEvent','eventCategory':category, 'eventAction':action, 'eventLabel':'0', 'eventValue':0});
    } else {
        dataLayer.push({'event':'GAEvent','eventCategory':category, 'eventAction':action, 'eventLabel':label, 'eventValue':0});
    }

}

//is IE?
function isIE () {
    var myNav = navigator.userAgent.toLowerCase();
    return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
}


jQuery(function() {
    var icons = { "header": "ui-icon-carat-1-e", "activeHeader": "ui-icon-carat-1-s"}
    jQuery( "#accordion1,#accordion2" ).accordion({
        heightStyle: true,
        collapsible: true,
        active: false,
        icons: icons

    });
});

jQuery(function() {
    //var icons = { "header": "ui-icon-carat-1-e", "activeHeader": "ui-icon-carat-1-s"}

    jQuery( "#products-accordion" ).accordion({
        heightStyle: true,
        collapsible: true,
        active: false
        //icons: icons

    });
});



function openHelpWindow(obj) {
    window.open(obj.getAttribute("href"), "HelpWindow", "toolbar=no, scrollbars=yes, resizable=yes, top=0, left=0, width=650, height=600").focus();
    return false;
}



//SHOW BUTTON ON THUMBNAILS
jQuery('.portfolio-container .hentry, .related-portfolios .hentry').hover(
    function () {
        jQuery(this).find('.make-this-book-in-thumb').css('visibility', 'visible');
        jQuery(this).find('img').fadeTo('slow', .5);
    },
    function () {
        jQuery(this).find('.make-this-book-in-thumb').css('visibility', 'hidden');
        jQuery(this).find('img').fadeTo('slow', 1);
    }
);

//when a photo book filter is clicked, scroll to top of filters
function anchor_filters() {
    jQuery('html, body').animate({
        scrollTop: jQuery('#filter-list').offset().top
    }, 1000, 'easeOutExpo');
}


//scroll to anchor
function scrollToAnchor(aid){
    var aTag = jQuery("section[id='"+ aid +"']");
    jQuery('html,body').animate({scrollTop: aTag.offset().top}, 1000, 'easeOutExpo');
}

function scrollToAnchor2(aid){
    var aTag = jQuery("#"+ aid);
    jQuery('html,body').animate({scrollTop: aTag.offset().top-70}, 1000, 'easeOutExpo');
}

jQuery('.occasion-menu a').click(function() {
    var href = jQuery(this).attr('href').replace('#', '')
    scrollToAnchor(href);
});

/*/CARD THUMBNAIL DETAILS
function swapCardPreview(c) {
    jQuery('#card-preview-img').attr('src', c);
}

function swapCardPreview(c) {
    jQuery('#card-preview-img').attr('src', c);
}*/


//CARD THUMBNAIL DETAILS
function swapCardPreview(c) {
    jQuery('#card-preview-img').attr('src', c);
    jQuery("#card-preview-img").css('max-height', '400px');

}

function swapCardPreview2(c) {
    jQuery('#card-preview-img').attr('src', c);
    jQuery("#card-preview-img").css('max-width', '475px');

}

function swapCardPreview3(c) {
    jQuery('#card-preview-img').attr('src', c);
    jQuery("#card-preview-img").css('max-height', '400px');

}

/*LAZY LOAD
jQuery("img.lazy").lazyload({
    effect : "fadeIn",
    event : "scroll sporty"
});*/

jQuery(window).bind("load", function() {
    jQuery("img.lazy").trigger("sporty");






});


/*HERO ROTATOR*/
function intHeroRatator() {
    var ads = jQuery('.ad');
    var numItems = ads.length;
    if (numItems) {
       jQuery('.ad0').fadeIn();
       heroRotator(ads);
    }
}

function heroRotator(ads) {

    ads.each( function( index, element ){
        var i = index+1;
        var item = jQuery(this);
        setTimeout(function() {
            console.log(i);
            jQuery('.ad'+i).css('position', 'relative');
            jQuery('.ad'+i).css('z-index', '-1');
            jQuery('.ad'+i).css('display', 'inline');
            jQuery('.ad'+index).fadeOut();

        },3000 * (index + 1));
    });
}

//PRETTYPHOTO VIDEO MODALS
jQuery("a[rel^='prettyPhoto']").prettyPhoto({
    animation_speed: 'fast', /* fast/slow/normal */
    slideshow: 5000, /* false OR interval time in ms */
    autoplay_slideshow: false, /* true/false */
    opacity:.8, /* Value between 0 and 1 */
    show_title: true, /* true/false */
    allow_resize: true, /* Resize the photos bigger than viewport. true/false */
    default_width: '100%',
    default_height: '100%',
    counter_separator_label: '/', /* The separator for the gallery counter 1 "of" 2 */
    theme: 'pp_default', /* light_rounded / dark_rounded / light_square / dark_square / facebook */
    horizontal_padding: 0, /* The padding on each side of the picture */
    hideflash: false, /* Hides all the flash object on a page, set to TRUE if flash appears over prettyPhoto */
    wmode: 'opaque', /* Set the flash wmode attribute */
    autoplay: true, /* Automatically start videos: True/False */
    modal: false, /* If set to true, only the close button will close the window */
    deeplinking: false, /* Allow prettyPhoto to update the url to enable deeplinking. */
    overlay_gallery: true, /* If set to true, a gallery will overlay the fullscreen image on mouse over */
    keyboard_shortcuts: true, /* Set to false if you open forms inside prettyPhoto */
    changepicturecallback: function(){}, /* Called everytime an item is shown/changed */
    callback: function(){}, /* Called when prettyPhoto is closed */
    ie6_fallback: true,
    markup: '<div class="pp_pic_holder"> \
						<div class="pp_content_container"> \
							<div class="pp_left"> \
							<div class="pp_right"> \
								<div class="pp_content"> \
									<div class="preloader" style="width:100%;margin-top: 200px;text-align: center;position: absolute"> \
            <div style="background: #fff url(//d88zf0kfw1nyb.cloudfront.net/pm/loader2.gif) center no-repeat;width:70px;height:70px;background-size: 50px 50px;border-radius:50%;margin: 0 auto"></div> \
        <div style="font-size: 16px;color:#fff;text-align: center;padding-top: 10px;font-family: museo-sans, Arial;text-shadow:1px 1px 0 rgba(0,0,0,.5)">Loading...</div> \
    </div> \
									<div class="pp_fade"> \
										<a href="#" class="pp_expand" title="Expand the image">Expand</a> \
										<div class="pp_hoverContainer"> \
											<a class="pp_next" href="#">next</a> \
											<a class="pp_previous" href="#">previous</a> \
										</div> \
										<div id="pp_full_res"></div> \
										<div class="pp_details"> \
											<a class="pp_close" href="#">Close</a> \
										</div> \
									</div> \
								</div> \
							</div> \
							</div> \
						</div> \
						<div class="pp_bottom"> \
							<div class="pp_left"></div> \
							<div class="pp_middle"></div> \
							<div class="pp_right"></div> \
						</div> \
					</div> \
					<div class="pp_overlay"></div>',
    gallery_markup: '<div class="pp_gallery"> \
								<a href="#" class="pp_arrow_previous">Previous</a> \
								<div> \
									<ul> \
										{gallery} \
									</ul> \
								</div> \
								<a href="#" class="pp_arrow_next">Next</a> \
							</div>',
    image_markup: '<img id="fullResImage" src="{path}" />',
    flash_markup: '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="{width}" height="{height}"><param name="wmode" value="{wmode}" /><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="movie" value="{path}" /><embed src="{path}" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="{width}" height="{height}" wmode="{wmode}"></embed></object>',
    quicktime_markup: '<object classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" height="{height}" width="{width}"><param name="src" value="{path}"><param name="autoplay" value="{autoplay}"><param name="type" value="video/quicktime"><embed src="{path}" height="{height}" width="{width}" autoplay="{autoplay}" type="video/quicktime" pluginspage="http://www.apple.com/quicktime/download/"></embed></object>',
    iframe_markup: '<iframe src ="{path}" width="{width}" height="{height}" frameborder="no" allowtransparency="true" onload="prettyPhotoLoaded()"></iframe>',
    inline_markup: '<div class="pp_inline">{content}</div>',
    custom_markup: '',
    social_tools: false
});


jQuery(document).ready(function(){

    var is_root = location.pathname == "/";
    if (is_root && device_width > 768) {
        window.onresize = function () {
            location.reload();
        }
    }

    if (device_width > 768) {
        var heroHalfWidth = (jQuery('.hero-image-home').width()) / 2;
        var heroHeight = jQuery('.hero-image-home').height();
        var heroActionWidth = jQuery('.home-hero-action').width();
        var heroActionHeight = jQuery('.home-hero-action').height();

        jQuery('.home-hero-action.page-heading-right').attr('style', 'right: ' + Math.round((heroHalfWidth - heroActionWidth) / 2) + 'px !important; top: ' + Math.round((heroHeight - heroActionHeight) / 2) + 'px !important');
    }
    //intHeroRatator();

    var pagerX = (device_width/2)-575;
//jQuery('#per-slide-template').css('left', pagerX);

    /*jQuery('.cycle-slideshow').cycle({
        speed: 600,
        manualSpeed: 100,
        fx: 'fadeout',
        timeout: 3000,
        pager: '#per-slide-template',
        slides: '> div'
    });*/


    jQuery.support.cors = true;

    if (device_width > 1024) {

    }


    //STICKY OCCASION MENU
    // if (device_width > 1024) {
    //     var offset2 = jQuery(".occasion-content").offset();
    //     var footerOffset = jQuery(".footer-ribbon").offset();
    //     //console.log(jQuery(document).height() +' '+window.innerHeight);
    //
    //     jQuery(window).scroll( function(){
    //         if (450 < (w.scrollTop()+53)) {
    //             //console.log(offset2.top)
    //             jQuery(".occasion-menu").css( {
    //                 'position': 'fixed',
    //                 'top': 50,
    //                 'height': (window.innerHeight-53)
    //             });
    //         } else {
    //             jQuery(".occasion-menu").css( {
    //                 'position': 'absolute',
    //                 'top': 'auto'
    //             });
    //         }
    //         //console.log(w.scrollTop());
    //         if (w.scrollTop() > (footerOffset.top-window.innerHeight)) {
    //             //console.log('2')
    //             jQuery(".occasion-menu").css( {
    //                 'position': 'fixed',
    //                 'top': -window.innerHeight,
    //                 'height': (window.innerHeight-53)
    //             });
    //         }
    //     });
    // }


    //GET SITEID
    var sid = getSiteID();
    jQuery('#siteID').val(sid);

    //BACK TO TOP
    // hide #back-top first
    jQuery("#back-top").hide();

    // fade in #back-top
    jQuery(function () {
        jQuery(window).scroll(function () {
            if ((jQuery(this).scrollTop() > 100) && (device_width > 768)) {
                jQuery('#back-top').fadeIn();
            } else {
                jQuery('#back-top').fadeOut();
            }
        });

        // scroll body to 0px on click
        jQuery('#back-top').click(function () {
            jQuery('body,html').animate({
                scrollTop: 0
            }, 1000, 'easeOutExpo');
            return false;
        });
    });


    jQuery('#account').hover(
        function () {
            jQuery('#account-menu').fadeIn();
        },
        function () {
            jQuery('#account-menu').fadeOut();
        }
    );

    jQuery('#account-menu').hover(
        function () {
            jQuery(this).show();
        },
        function () {
            jQuery(this).fadeOut();
        }
    );



    //the_bouncer();


    //SHARE PREVIEW

    if (getUrlParameters("share", "", true)) {
        var project_shared = getUrlParameters("share", "", true);
        var project_version = getUrlParameters("version", "", true);
        var project_pk = getUrlParameters("pk", "", true);
        var project_pageid = getUrlParameters("pg", "", true);
        var project_title = getUrlParameters("t", "", true);
        if (device_width > 768) {
            jQuery.prettyPhoto.open('/preview/preview/default/share.php?p='+project_shared+'&version='+project_version+'&pk='+project_pk+'&pg='+project_pageid+'&t='+project_title+'&iframe=true&width=100%&height=100%','Title','Description');
        } else {
            window.location = '/preview/preview/default/share.php?p='+project_shared+'&version='+project_version+'&amp;pk='+project_pk+'&amp;pg='+project_pageid+'&amp;t='+project_title+'&mobile=true';
        }

    }




    var bounceTimer = setInterval(bounceTitle, 3500);

    if (isMobile) {
        var anchors = document.getElementsByTagName("a");

        for (var i = 0; i < anchors.length; i++) {
            if (anchors[i].href.search("/web") > -1) {
                anchors[i].href = "/mobile/";
            }
        }

        if (isApple) {
            jQuery("#quickgift-mobile-link").show();
        }

        if (typeof isStartProject !== 'undefined') {
            jQuery(".blog-hero").show();
            jQuery(".project-details").show();
            jQuery(".project-theme-categories").show()
            jQuery(".project-theme-results").show()
            jQuery(".mobile-message").hide();
        }
    }


    if (typeof isSingleShare !== 'undefined') {
        openShareView(shareUrl,shareTitle,shareName,shareExcerpt);
    }

    if (typeof isSingleVideo !== 'undefined') {
        tb_show("",videoUrl);
    }



    if (typeof giftGuideNumber !== 'undefined') {
    jQuery('.cycle-slideshow').cycle('goto', getUrlParameters("gift",'',''));
    scrollToAnchor2("guide");
    }


    if (typeof isCaseDesigner !== 'undefined') {

        if (device_width < 641) {
            jQuery('#step3-cases').html('3. Add to Your Cart');
            jQuery('.mobile-account-button').css('display', 'none');
            jQuery('.mobile-menu-button').css('display', 'none');
            jQuery('#header').css('display', 'none');
            jQuery('.phone-editor-header').html('<a href="/cases">&#8592 Exit Case Designer</a>')
            jQuery('.phone-editor-header').css('margin-top', '3px');
            jQuery('.phone-editor-header').css('margin-bottom', '3px');
        }

        var callback_url = encodeURIComponent(host_name + '/ShoppingCart/OrderHelper.aspx?id=29');

        if (getUrlParameters('caseid','','')) {
            var caseid = getUrlParameters('caseid','','')
            jQuery('#phonecase-iframe').attr('src', 'https://app.gateway3d.com/acp/app/?l=woyc2&c=f7sn91g0q1n67j9#guid=' + case_designer_guid + '&p=' + caseid + '&g=gftp6o9uaq,usv1n81waj,09fan392s1,c0sdlf6tg6,9pg4b363eu&ep3dUrl=' + callback_url);
        } else {
            jQuery('#phonecase-iframe').attr('src', 'https://app.gateway3d.com/acp/app/?l=woyc2&c=f7sn91g0q1n67j9#guid=' + case_designer_guid + '&pg=' + case_product_group + '&g=gftp6o9uaq,usv1n81waj,09fan392s1,c0sdlf6tg6,9pg4b363eu&ep3dUrl=' + callback_url);
        }

        if (device_width > 640) {
            //jQuery('#phonecase-iframe').attr('src', '//my.gateway3d.com/acp/app/?l=woyc100&guid=13377&c=kzojv3grmt3kqcz&g=gftp6o9uaq,usv1n81waj,09fan392s1,c0sdlf6tg6,9pg4b363eu&ep3dUrl=' + callback_url);
            jQuery('#phonecase-iframe').attr('height', device_height - 192);
            if (device_height < 800) {
                jQuery('#phonecase-iframe').attr('height', 800);
            }
        } else {
            //jQuery('#phonecase-iframe').attr('src', '//my.gateway3d.com/acp/app/?l=woyc99m&guid=13377&c=8fmpe3wdw6pfdz9&g=gftp6o9uaq,usv1n81waj,09fan392s1,c0sdlf6tg6,9pg4b363eu&ep3dUrl=' + callback_url);
            jQuery('#phonecase-iframe').attr('height', 500);
            jQuery('#phonecase-iframe').css('width', '320px');
        }
    }

    getTestimonials();

    if (getUrlParameters("blankcard", "", true)) {
        tb_show('', '#TB_inline?width=450&height=425&inlineId=blank-card-modal');
    }

}); //END document ready

function getTestimonials() {
    jQuery.ajax({
        url: "/gettestimonials/",
        context: document.body,
        success: function (responseText) {
            //console.log(responseText);
            jQuery("#testimonials").append(responseText);
        }
    });
}

function openShareView(share_url, share_title, share_slug,share_desc) {
    if (device_width > 1024) {
        jQuery.prettyPhoto.open('/preview/preview/default/share.php?p='+share_url+'&amp;title='+share_title+'&amp;slug='+share_slug+'&amp;desc='+share_desc+'&amp;view=idea&amp;iframe=true&amp;width=100%&amp;height=100%','Title','Description');
        jQuery('body').addClass('noscroll');
    } else {
        window.location = '/preview/preview/default/share.php?p='+share_url+'&title='+share_title+'&title='+share_slug+'&view=idea&mobile=true';
    }
}

function bounceTitle() {
    jQuery('#more-arrow').effect( "bounce", { times: 2 }, "slow")

    //jQuery('.occasions-link').animate({left:"-=25px"},1000).animate({left:"+=50px"},1000).animate({left:"-=25px"},1000)
}

/* Slide Occasions */


//jQuery(function() {
//    var slider = $('.container > div');
//
//    jQuery('.content').click(function() {
//        var left = -$(this).position().left;
//        left -= $(this).outerWidth() / 1;
//        left += $('.container').width() / 1;
//
//        slider.css('left', left + 'px');
//    });
//});

function setCookie(k,v,e) {
    var domain_name = window.location.hostname;
    var hostnameArray = domain_name.split('.');
    domain_name = "."+hostnameArray[hostnameArray.length-2]+"."+hostnameArray[hostnameArray.length-1];
    document.cookie=k + "=" + v + ';domain=' + domain_name + ';expires=' + e + ';path=/';
    //document.cookie=k + "=" + v + ';domain=.picaboo.com;expires=' + e + ';path=/';
}

function getCookie(k) {
    var c_value = document.cookie;
    var c_start = c_value.indexOf(" " + k + "=");
    if (c_start == -1)
    {
        c_start = c_value.indexOf(k + "=");
    }
    if (c_start == -1)
    {
        c_value = null;
    }
    else
    {
        c_start = c_value.indexOf("=", c_start) + 1;
        var c_end = c_value.indexOf(";", c_start);
        if (c_end == -1)
        {
            c_end = c_value.length;
        }
        c_value = unescape(c_value.substring(c_start,c_end));
    }
    return c_value;
}

function deleteCookie(k) {
    var domain_name = window.location.hostname;
    var hostnameArray = domain_name.split('.');
    domain_name = "."+hostnameArray[hostnameArray.length-2]+"."+hostnameArray[hostnameArray.length-1]
    document.cookie = k + '=;domain=' + domain_name + ';expires=Thu, 01 Jul 1980 00:00:01 GMT;path=/';
};


//PHOTO BOOKS DETAIL BALLOONS
var balloon_delay = 300;
jQuery('.b_target_soft').hoverIntent({
    over: function(){jQuery('.balloon_soft').fadeIn('fast')},
    timeout: balloon_delay,
    out: function(){jQuery('.balloon_soft').fadeOut('fast')}
});
jQuery('.b_target_hard').hoverIntent({
    over: function(){jQuery('.balloon_hard').fadeIn('fast')},
    timeout: balloon_delay,
    out: function(){jQuery('.balloon_hard').fadeOut('fast')}
});
jQuery('.b_target_regency').hoverIntent({
    over: function(){jQuery('.balloon_regency').fadeIn('fast')},
    timeout: balloon_delay,
    out: function(){jQuery('.balloon_regency').fadeOut('fast')}
});
jQuery('.b_target_madison').hoverIntent({
    over: function(){jQuery('.balloon_madison').fadeIn('fast')},
    timeout: balloon_delay,
    out: function(){jQuery('.balloon_madison').fadeOut('fast')}
});
jQuery('.b_target_flush').hoverIntent({
    over: function(){jQuery('.balloon_flush').fadeIn('fast')},
    timeout: balloon_delay,
    out: function(){jQuery('.balloon_flush').fadeOut('fast')}
});
/*jQuery('.b_target_6x8').hoverIntent({
    over: function(){jQuery('.balloon_6x8').fadeIn('fast')},
    timeout: balloon_delay,
    out: function(){jQuery('.balloon_6x8').fadeOut('fast')}
});
jQuery('.b_target_8x11').hoverIntent({
    over: function(){jQuery('.balloon_8x11').fadeIn('fast')},
    timeout: balloon_delay,
    out: function(){jQuery('.balloon_8x11').fadeOut('fast')}
});
jQuery('.b_target_11x14').hoverIntent({
    over: function(){jQuery('.balloon_11x14').fadeIn('fast')},
    timeout: balloon_delay,
    out: function(){jQuery('.balloon_11x14').fadeOut('fast')}
});
jQuery('.b_target_8x8').hoverIntent({
    over: function(){jQuery('.balloon_8x8').fadeIn('fast')},
    timeout: balloon_delay,
    out: function(){jQuery('.balloon_8x8').fadeOut('fast')}
});
jQuery('.b_target_12x12').hoverIntent({
    over: function(){jQuery('.balloon_12x12').fadeIn('fast')},
    timeout: balloon_delay,
    out: function(){jQuery('.balloon_12x12').fadeOut('fast')}
});*/

jQuery('.b_target_flat').hoverIntent({
    over: function(){jQuery('.balloon_flat').fadeIn('fast')},
    timeout: balloon_delay,
    out: function(){jQuery('.balloon_flat').fadeOut('fast')}
});
jQuery('.b_target_envelope').hoverIntent({
    over: function(){jQuery('.balloon_envelope').fadeIn('fast')},
    timeout: balloon_delay,
    out: function(){jQuery('.balloon_envelope').fadeOut('fast')}
});
jQuery('.b_target_envelope2').hoverIntent({
    over: function(){jQuery('.balloon_envelope2').fadeIn('fast')},
    timeout: balloon_delay,
    out: function(){jQuery('.balloon_envelope2').fadeOut('fast')}
});
jQuery('.b_target_default').hoverIntent({
    over: function(){jQuery('.balloon_default').fadeIn('fast')},
    timeout: balloon_delay,
    out: function(){jQuery('.balloon_default').fadeOut('fast')}
});


//START PROJECT

function startProject(w,h,name) {
    if(w) {
        if (name) {
            tb_show("","#TB_inline?width="+w+"&height="+h+"&inlineId="+name);
        } else {
            tb_show("","#TB_inline?width="+w+"&height="+h+"&inlineId=startproject1");
        }

    } else {
        tb_show("","#TB_inline?width=1000&height=600&inlineId=startproject1");
    }
}






//SIGN UP PROMPT

var prompt_on = false;
var action_name = 'signUpIncentive';
var action_time = 2;   //seconds until action is triggered
var action_reset = 1;   //days until action rests
var action_element = jQuery('.register-prompt');
var action_close_triggers = jQuery('.register-prompt .close-small');
var action_min_device_width = 1024;
var action_click_element = jQuery('.register-prompt .prompt-content');
var action_click_event = openRegModal;

function openRegModal() {
    hideActionElement();
    reset_signin();
    showSignUp('header');
    logGAEvent('Web-Sign In Modal Opened', 'na', '', 1);
    tb_show("","#TB_inline?width=400&height=298&inlineId=signin-form");
}

if (prompt_on == true && !getCookie("tokenData") && getCookie(action_name) != "closed" && device_width > action_min_device_width ) {

    var action_timer;
    var action_expire = new Date();
    action_expire.setDate(action_expire.getDate() + action_reset);

    var check_action_cookie = getCookie(action_name);

    if (check_action_cookie) {
        if (check_action_cookie >= action_time) {
            setTimeout(function() { showActionElement(); }, 2000);
        } else {
            action_timer = parseInt(check_action_cookie);
            continueTimer(action_timer);
        }
    } else {
        initTimer();
    }

}

function initTimer() {
    action_timer = 0;
    setCookie(action_name, action_timer, action_expire);
    var action_interval = setInterval(function() {
        if (!getCookie("tokenData") && getCookie(action_name) != "closed" && device_width > action_min_device_width ) {
            if (action_timer === action_time) {
                showActionElement();
                clearInterval(action_interval);
            } else {
                action_timer = action_timer+2;
                setCookie(action_name, action_timer, action_expire);
                console.log(action_timer + ", " + action_expire);
            }
        }
    }, 2000);
}

function continueTimer(at) {
    var action_interval = setInterval(function() {
        if (at === action_time) {
            showActionElement();
            clearInterval(action_interval);
        } else {
            at = at+2;
            setCookie(action_name, at, action_expire);
            //console.log(at + ", " + action_expire);
        }
    }, 2000);
}


function showActionElement() {
    if (!getCookie("tokenData") && getCookie(action_name) != "closed" && device_width > action_min_device_width ) {
        action_element.fadeIn("fast");
        action_element.addClass("move-in");
    }
}

function hideActionElement() {
    action_element.fadeOut();
    setCookie(action_name, "closed", action_expire);
}

action_close_triggers.click( function() {
    hideActionElement();
});

//action_click_element.click( function() {
//    action_click_event();
//});


function logGAEvent(category, action, label, value)
{
    dataLayer.push({'event':'GAEvent','eventCategory':category, 'eventAction':action, 'eventLabel':label, 'eventValue':value});
    //_gaq.push(['_trackEvent',
    //    eventCategory,
    //    eventAction,
    //    eventLabel,
    //    eventValue,
    //    true
    //]);
}

function lockBody() {
    jQuery('body').addClass('noscroll');
}

jQuery('input, textarea').placeholder();


function getUrlParameters(parameter, staticURL, decode){
    /*
     Function: getUrlParameters
     Description: Get the value of URL parameters either from
     current URL or static URL
     Author: Tirumal
     URL: www.code-tricks.com
     */
    if (window.location.href.search("\\?") > 0 || window.location.href.search("\\&") > 0) {
        var currLocation = (staticURL.length)? staticURL : window.location.search,
            parArr = currLocation.split("?")[1].split("&"),
            returnBool = true;

        for(var i = 0; i < parArr.length; i++){
            parr = parArr[i].split("=");
            if(parr[0] == parameter){
                return (decode) ? decodeURIComponent(parr[1]) : parr[1];
                returnBool = true;
            }else{
                returnBool = false;
            }
        }

        if(!returnBool) return false;
    } else {
        return false
    }



}

//FACEBOOK API
window.fbAsyncInit = function() {
    ////var facebookID = "917055618329138"; //dev
    //var facebookID = "118712954830079"; //prod
    FB.init({appId: facebookID, status: true, cookie: true,
        xfbml: true, version: 'v2.6'});
    };
(function() {
    var e = document.createElement('script'); e.async = true;
    e.src = document.location.protocol +
    '//connect.facebook.net/en_US/all.js';
    document.getElementById('fb-root').appendChild(e);
    }());


//TWITTER API
//does work with wordpress??
//window.twttr = (function(d, s, id) {
//    var js, fjs = d.getElementsByTagName(s)[0],
//    t = window.twttr || {};
//    if (d.getElementById(id)) return;
//    js = d.createElement(s);
//    js.id = id;
//    js.src = "https://platform.twitter.com/widgets.js";
//    fjs.parentNode.insertBefore(js, fjs);
//
//    t._e = [];
//    t.ready = function(f) {
//    t._e.push(f);
//    };
//
//    return t;
//}(document, "script", "twitter-wjs"));

//!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');


//PINTEREST API
//(function(d){
//    var f = d.getElementsByTagName('SCRIPT')[0], p = d.createElement('SCRIPT');
//    p.type = 'text/javascript';
//    p.async = true;
//    p.src = '//assets.pinterest.com/js/pinit.js';
//    f.parentNode.insertBefore(p, f);
//}(document));


//open modal
function get_detail(the_image, the_title, the_desc, the_link, the_slug) {
    var domain = document.domain;
    var share_link = "http://"+domain+window.location.pathname+"?tip="+the_slug;
    jQuery('#tip-modal-title').html(the_title);
    jQuery('#tip-modal-desc').html(the_desc);
    jQuery('#tip-modal-video').attr('src', the_link);

    //facebook share
    jQuery('#fb_share_button').click(function(e){
        e.preventDefault();
        FB.ui(
        {
        method: 'share',
        //name: the_title,
        href: share_link
        //picture: the_image,
        //caption: ' ',
        //description: the_desc,
        //message: ' '
        });
    });

    //twitter share
    jQuery('#twt_share_button').click(function(e) {
        window.open('https://twitter.com/share?url='+encodeURI(share_link)+'&text='+encodeURI("Quick Tip: " + the_title + ' @Picaboo'), '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=400,width=600');
    });

    //pinterst share
    var pin_link = "https://www.pinterest.com/pin/create/button/" +
        "?url=" + encodeURI(share_link) +
        "&media=" + encodeURI(the_image) +
        "&description=" + encodeURI(the_title);
    jQuery('#pin_share_button').attr('href',pin_link);

    tb_show("", "#TB_inline?width=800&height=600&inlineId=modal-detail");
    jQuery(".TB_overlayBG").css({'background-color':'#000000', 'opacity': '.20'});
}

jQuery('.close-tip').click(function() {
    tb_remove();
});


var team = jQuery('#team-container');
// init
team.isotope({
    // options
    itemSelector: '.item',
    layoutMode: 'fitRows'
});

var filters = {};

jQuery('.button-group button').click(function() {
    var this_button = jQuery(this);
    // get group key
    //var buttonGroup = this_button.parents('.button-group');
    var filterGroup = this_button.attr('data-filter-group');
    // set filter for group
    filters[ filterGroup ] = this_button.attr('data-filter');
    // combine filters
    var filterValue = '';
    for ( var prop in filters ) {
        filterValue += filters[ prop ];
    }
    // set filter for Isotopetope
    team.isotope({ filter: filterValue });
});

/*resizeThickBox function accepts a width and height to
 resize the thickbox modal. Needed as the content in the modal changes.
 Set wwidth or height to 0 to use existing width or height.
 */
function resizeThickbox(w, h) {
    var TB_WIDTH = jQuery("#TB_window").width(),
        TB_HEIGHT = jQuery("#TB_window").height();
    if (w > 0) {
        TB_WIDTH = w;
    }
    if (h > 0) {
        TB_HEIGHT = h;
    }
    jQuery("#TB_window").animate({
        marginLeft: '-' + parseInt((TB_WIDTH / 2), 10) + 'px',
        width: TB_WIDTH + 'px',
        height: TB_HEIGHT + 'px',
        marginTop: '-' + parseInt((TB_HEIGHT / 2), 10) + 'px'
    });
}