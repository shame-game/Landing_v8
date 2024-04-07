/*! Pushy - v0.9.1 - 2013-9-16
* Pushy is a responsive off-canvas navigation menu using CSS transforms & transitions.
* https://github.com/christophery/pushy/
* by Christopher Yee */

jQuery(function() {
	var pushy = jQuery('.pushy'), //menu css class
		body = jQuery('body'),
		container = jQuery('#container'), //container css class
		push = jQuery('.push'), //css class to add pushy capability
		siteOverlay = jQuery('.site-overlay'), //site overlay
		pushyClass = "pushy-left pushy-open", //menu position & menu open class
		pushyActiveClass = "pushy-active", //css class to toggle site overlay
		containerClass = "container-push", //container open class
		pushClass = "push-push", //css class to add pushy capability
		menuBtn = jQuery('.mobile-menu-button'), //css classes to toggle the menu
		menuSpeed = 200, //jQuery fallback menu speed
		menuWidth = pushy.width() + "px"; //jQuery fallback menu width

    siteOverlay.hide();

	function togglePushy(){
		body.toggleClass(pushyActiveClass); //toggle site overlay
		pushy.toggleClass(pushyClass);
		container.toggleClass(containerClass);
		push.toggleClass(pushClass); //css class to add pushy capability
        body.toggleClass('freeze-body');

	}

	function openPushyFallback(){
		body.addClass(pushyActiveClass);
        body.addClass('freeze-body');
        container.addClass(containerClass);
		pushy.animate({left: "0px"}, menuSpeed);

		container.animate({left: menuWidth}, menuSpeed);
		//push.animate({left: menuWidth}, menuSpeed); //css class to add pushy capability
        siteOverlay.show();

	}


	function closePushyFallback(){
		body.removeClass(pushyActiveClass);
        body.removeClass('freeze-body');
        container.removeClass(containerClass);
		pushy.animate({left: "-" + menuWidth}, menuSpeed);

		container.animate({left: "0px"}, menuSpeed);
		//push.animate({left: "0px"}, menuSpeed); //css class to add pushy capability
        siteOverlay.hide();
	}

	/*if(Modernizr.csstransforms3d){
		//toggle menu
		menuBtn.click(function() {
			togglePushy();
            siteOverlay.show();

		});
		//close menu when clicking site overlay
		siteOverlay.click(function(){ 
			togglePushy();
            siteOverlay.hide();
		});
	}else{*/
		//jQuery fallback
		pushy.css({left: "-" + menuWidth}); //hide menu by default
		//container.css({"overflow": "scroll"}); //fixes IE scrollbar issue

		//keep track of menu state (open/close)
		var state = true;

		//toggle menu
		menuBtn.click(function() {
			if (state) {
                pushy.show();
				openPushyFallback();
				state = false;
			} else {
				closePushyFallback();
				state = true;
			}
		});

		//close menu when clicking site overlay
		siteOverlay.click(function(){ 
			if (state) {
				openPushyFallback();
				state = false;
			} else {
				closePushyFallback();
				state = true;
			}
		});
	//}
});

jQuery(function() {
    var pushy = jQuery('.pushy2'), //menu css class
        body = jQuery('body'),
        container = jQuery('#container'), //container css class
        push = jQuery('.push'), //css class to add pushy capability
        siteOverlay = jQuery('.site-overlay2'), //site overlay
        pushyClass = "pushy-right pushy-open", //menu position & menu open class
        pushyActiveClass = "pushy-active", //css class to toggle site overlay
        containerClass = "container-push2", //container open class
        pushClass = "push-push", //css class to add pushy capability
        menuBtn = jQuery('.mobile-account-button'), //css classes to toggle the menu
        menuSpeed = 200, //jQuery fallback menu speed
        menuWidth = pushy.width() + "px"; //jQuery fallback menu width

    siteOverlay.hide();

    function togglePushy(){
        body.toggleClass(pushyActiveClass); //toggle site overlay
        pushy.toggleClass(pushyClass);
        container.toggleClass(containerClass);
        push.toggleClass(pushClass); //css class to add pushy capability

    }

    function openPushyFallback(){

        body.addClass(pushyActiveClass);
        body.addClass('freeze-body');
        //pushy.animate({right: "-" + menuWidth}, menuSpeed);
        //pushy.animate({transform: "translate3d(" + Math.floor(jQuery('#container').width-menuWidth) + "px,0,0)"}, menuSpeed);
        pushy.animate({right: "0px"}, menuSpeed);
        container.animate({left: "-" + menuWidth}, menuSpeed);
        push.animate({right: "0px"}, menuSpeed); //css class to add pushy capability
        container.addClass(containerClass);
        siteOverlay.show();


    }

    function closePushyFallback(){
        body.removeClass(pushyActiveClass);
        body.removeClass('freeze-body');
        pushy.animate({right: "-" + menuWidth}, menuSpeed);
        container.animate({left: "0px"}, menuSpeed);
        push.animate({right: menuWidth}, menuSpeed); //css class to add pushy capability
        container.removeClass(containerClass);
        siteOverlay.hide();
        jQuery('#signin-form').hide()

    }

    /*if(Modernizr.csstransforms3d){
        //toggle menu
        menuBtn.click(function() {
            togglePushy();
        });
        //close menu when clicking site overlay
        siteOverlay.click(function(){
            togglePushy();
        });
    }else{*/
        //jQuery fallback
        pushy.css({right: "-" + menuWidth}); //hide menu by default
        //container.css({"overflow": "scroll"}); //fixes IE scrollbar issue

        //keep track of menu state (open/close)
        var state = true;

        //toggle menu
        menuBtn.click(function() {
            if (state) {
                pushy.show();
                openPushyFallback();
                state = false;
            } else {
                closePushyFallback();
                state = true;
            }
        });

        //close menu when clicking site overlay
        siteOverlay.click(function(){
            if (state) {
                openPushyFallback();
                state = false;
            } else {
                closePushyFallback();
                state = true;
            }
        });
    //}
});