//updated 2/9/17
//Picaboo Account

/*
 the_bouncer function checks for the token set by sign in.
 If the token exists then user is signed in and
 member only content is displayed (ie. account menu).
 */
function the_bouncer() {
    var instance = axios.create();
    instance.defaults.withCredentials = true;
    instance.get('https://app2.' + host + '/zoomUtils/getToken')
        .then(function (response) {
            //console.log(response)
        var in_the_house = response.data.loggedIn;
        var accountId  = response.data.accountID;

        //var in_the_house = getCookie("tokenData");
        var the_name = "good looking!";
        var firsty = getCookie("firstNameData");
        var emaily = getCookie("emailData");

        if (in_the_house) {

            if ( response.data.tosAccepted === false && window.location.href.indexOf('privacy') === -1 && window.location.href.indexOf('terms') === -1 ) {

                function tosChangeHandler() {
                    $('#acceptTOSButton').prop('disabled', function(i, v) { return !v; });
                }

                function acceptHandler() {
                    instance.get('https://app2.' + host + '/account/AcceptTOS').then(function() {
                        tb_remove();
                    });
                }

                function cancelHandler() {

                    function goHome() {
                        window.location ='https://www.'+host;
                    }

                    jQuery.ajax({
                        url: 'https://app2.' + host + '/zoomUtils/logout',
                        jsonp: "callback",
                        dataType: "jsonp",
                        success: goHome,
                        failure: goHome
                    });
                }

                var tosContent = '<div id="tos-content" style="display:none;"> <div class="tos-content"> <h2>Terms of Service and Privacy Policy</h2> <p>Our terms of service and privacy policy has been updated.</p> <label for="tosAccept"><input  type="checkbox" id="tosAccept">I agree to the <a target="_blank" href="https://www.picaboo.com/terms/">terms of service</a> and the <a target="_blank" href="https://www.picaboo.com/privacy/">privacy policy</a>.</label> <br/> <button style="margin-right: 10px" id="cancelTOSButton" type="button" class="btn btn-link">Cancel</button> <button style="margin-right: 10px" id="acceptTOSButton" type="button" class="btn btn-primary" disabled>Accept</button> </div> </div>';

                $("body").append(tosContent);//, tosLink);
                $("#tosAccept").change(tosChangeHandler);
                $('#acceptTOSButton').click(acceptHandler);
                $('#cancelTOSButton').click(cancelHandler);

                jQuery(document).bind('keydown.thickbox', function(e) {
                    if (e.which == 27) { // close
                        e.stopImmediatePropagation();
                        return false;
                    }
                    return false;
                });

                var w = 560;
                var h = 350;

                tb_show("","#TB_inline?&width=" + w +"&height="+h+"&inlineId=tos-content","", true);

                jQuery('#TB_closeWindowButton').hide();
            }

            in_the_house = encodeURIComponent(in_the_house);
            if (firsty !== '' && firsty !== null) {
                the_name = firsty
            } else {
                the_name = emaily
            }
        } else {
            jQuery.ajax({
                url: 'https://app2.' + host + '/zoomUtils/logout',
                jsonp: "callback",
                dataType: "jsonp",
                success: function( response ) {
                    //console.log("response", response );
                }
            });
        }
	
	 
        var deskTopCarticon = '<a target="_blank"  href="https://cart.picaboo.com/cart/list"><img style="width: 26px;"src="https://d88zf0kfw1nyb.cloudfront.net/wp-content/themes/sparks/images/cart_blank.svg" alt="Cart"></img></a>';
        var mobileCartIcon = '<a class="mobile-cart-icon" target="_blank" href="https://cart.picaboo.com/cart/list"><img class="cart-image" src="https://d88zf0kfw1nyb.cloudfront.net/wp-content/themes/sparks/images/cart_blank.svg" alt="Cart"></img></a>';
        jQuery.ajax({
            type: "GET",
            url: host_name + '/Server/Web/CartItemCount.aspx?accountId=' + accountId,
            dataType: 'json',
            async: false,
            success: function (data) {
              var cartItems = data.items;    
              if(cartItems > 0){
                deskTopCarticon = '<a target="_blank" href="https://cart.picaboo.com/cart/list"><img style="width: 26px;" src="https://d88zf0kfw1nyb.cloudfront.net/wp-content/themes/sparks/images/cart_reddot.svg" alt="Cart Items"></img>' + '</a>';
                mobileCartIcon = '<a class="mobile-cart-icon" target="_blank" href="https://cart.picaboo.com/cart/list"><img class="cart-image" src="https://d88zf0kfw1nyb.cloudfront.net/wp-content/themes/sparks/images/cart_reddot.svg" alt="Cart"></img></a>';
              }       
            }
         });
               var turn_table = ' ' +
            '<ul class="" id="account">' +
            '<li class="account-menu" >' +
            '<a href="#" class="account-link">My Account</a>' +
            '<ul class="sub-menu">' +
            '<li><div class="account-menu-arrow"></div>Hi, ' + the_name + '</li>' +
            '<li class=""><a href="/my-projects/">My Projects</a></li>' +
            '<li class=""><a href="'+cart_host+'/cart/list/" target="_blank">Shopping Cart</a></li>' +
            '<li class=""><a href="/account/vouchers/">My Vouchers <span class="voucher-count"></span></a></li>' +
            '<li class=""><a href="/account/order-history/">Order History</a></li>' +
            '<li class=""><a href="/account/">Account Settings</a></li>' +
            '<li class=""><a href="/customer-care/">Help</a></li>' +
            '<li class=""><a href="javascript:void(0)" onclick="get_out()">Sign Out</a></li>' +
            '</ul>' +
            '</li>' +
            '</ul>' +
            '<ul class="" id="account">' + 
            '<li class="">' + deskTopCarticon + 
            '</li>' + 
            '</ul>';

        var mobile_turn_table = ' ' +
            '<li class="mobile-account-links mobile-account-links-first">Hi, ' + the_name + '</li>' +
            '<li class="mobile-account-links"><a href="/my-projects/">My Projects</a></li>' +
            '<li class="mobile-account-links"><a href="'+cart_host+'/cart/list/" target="_blank">Shopping Cart</a></li>' +
            '<li class="mobile-account-links"><a href="/account/vouchers/">My Vouchers <span class="voucher-count"></span></a></li>' +
            '<li class="mobile-account-links"><a href="/account/order-history/">Order History</a></li>' +
            '<li class="mobile-account-links"><a href="/account/">Account Settings</a></li>' +
            '<li class="mobile-account-links"><a href="/customer-care/">Help</a></li>' +
            '<li class="mobile-account-links"><a href="javascript:void(0)" onclick="get_out()">Sign Out</a></li>';

        var mobile_cart_icon = ' ' + mobileCartIcon + '';

        var url = window.location.href;
        if (device_width > 768) {
            var front_door = ' ' +
                '<ul class="" id="account">' +
                '<li><a href="/sign-in/" class="real-signin-link">Sign In</a></li>' +
                '<li><a href="/sign-in/?signup=true" class="signin-link">Register</a></li>' +
                '</ul>';
        } else {
            var front_door = ' ' +
                '<li><a href="/sign-in/" class="mobile-signin-link">Sign In</a></li>'+
                '<li><a href="/sign-in/?signup=true" class="mobile-signin-link">Register</a></li>';
        }


        if (in_the_house) { //signed in, show some stuff
            jQuery('#sign-in .signin-inner').html(turn_table);
            jQuery('.utility-account').hide();
            jQuery('#help').addClass("help-signedin");
            jQuery('.gh-middle-right').html(mobile_cart_icon);
            jQuery('.mobile-account-menu #mobile-menu-primary').html(mobile_turn_table);

            //open the account nav on the homepage
            var showAccountNav = setTimeout(function () {
                openAccountNav();
            }, 2000)

            function openAccountNav() {
                var account_nav_height = (jQuery('#account-navbar').height())-30;
                jQuery('.account-nav-inner').hide();
                jQuery('#account-navbar').css("height", "1px");
                jQuery('#account-navbar').show();
                jQuery('#account-navbar').animate({
                    height: account_nav_height + "px"
                }, 500, function () {
                    jQuery('.account-nav-inner').fadeIn("slow");
                });
            }

            jQuery('#welcome-name').html(the_name);

        } else { //not signed in
            jQuery('#sign-in .signin-inner').html(front_door);
            jQuery('.mobile-account-menu #mobile-menu-primary').html(front_door);

        }


        jQuery('.account-link').click(function (event) {
            event.preventDefault()
        });

        jQuery('#account').hoverIntent({
            over: showAccountMenu,
            out: hideAccountMenu,
            selector: '.account-menu',
            timeout:1000
        });

     })
        .catch(function (error) {
            console.log("error ", error);
     });

}

jQuery('.help-link').click(function (event) {
    event.preventDefault()
});

jQuery('#help').hoverIntent({
    over: showHelpMenu,
    out: hideHelpMenu,
    selector: '.help-menu',
    timeout:1000
});

function showAccountMenu() {
    hideHelpMenu();
    jQuery('#account .sub-menu').fadeIn('fast');
}

function hideAccountMenu() {
    jQuery('#account .sub-menu').fadeOut('fast');
}

function showHelpMenu() {
    hideAccountMenu();
    jQuery('#help .sub-menu').fadeIn('fast');
}

function hideHelpMenu() {
    jQuery('#help .sub-menu').fadeOut('fast');
}


the_bouncer();




/*
 get_out function removes cookies that authenticates a user.
 */
function get_out() {
    window.location ='https://app2.' + host + '/zoomUtils/logout?redirectURL=https://www.'+host+'/sign-in/';

    // jQuery.ajax({
    //     type: 'GET',
    //     url: 'https://app2.' + host + '/zoomUtils/logout?redirectURL=https://www.'+host+'/sign-in/',
    //     dataType: 'jsonp',
    //     success: function(data) {
    //
    //     },
    //     error: function(data) {
    //         deleteCookie('emailData');
    //         deleteCookie('firstNameData');
    //         deleteCookie('lastNameData');
    //         deleteCookie('tokenData');
    //         deleteCookie('userID');
    //         window.location.href="/";
    //     }
    // });
}


/* Account Pages */

/*
 Resizes account iframes based on content size received by the server those pages reside on
 */
window.addEventListener("message", receiveMessage, false);
function receiveMessage(event)
{
    if (event.origin !== "https://www.picaboo.com" && event.origin !== libraryURL) {
        if (event.data > 0 && window.location.hash == "#account") {
            jQuery('#account-iframe').attr('height', event.data);
			jQuery('#account-iframe').css({
			  'width': '100%',
			  'padding-right': '10px',
			  'padding-left': '10px'
			});
        }
		if (window.location.hash == "#password") {
			jQuery('#account-iframe').css({
			  'width': '100%',
			  'padding-right': '10px',
			  'padding-left': '10px'
			});
		}
		if (window.location.hash == "#shipping") {
			jQuery('#account-iframe').css({
			  'width': '',
			  'padding-right': '0px',
			  'padding-left': '0px'
			});
		}
        if (event.data > 640) {
            jQuery('#orderhistory-iframe').attr('height', event.data);
        } else {
            jQuery('#orderhistory-iframe').attr('height', '640');
        }

        return;
    }
}

jQuery('.account-page-menu li a').click(function(event) {
    event.preventDefault();
    jQuery('.account-page-menu li a').removeClass('account-link-active');
    window.location.hash = this.hash;
    var hash = this.hash;
    hash = hash.substring(1);
    loadAccountFrame(hash);
});

if (this_page == "account") { getHash(); }

function getHash() {
    if(window.location.hash) {
        var hash = window.location.hash;
        hash = hash.substring(1);
        loadAccountFrame(hash);
    } else {
        window.location.hash = '#account';
        jQuery('#account-link').addClass('account-link-active');
        loadAccountFrame('account')
    }
}

function loadAccountFrame(h) {
    jQuery('#'+h+'-link').addClass('account-link-active');
    var iframe = jQuery('#account-iframe');
    switch (h) {
        case 'account':
            jQuery('.spinner').hide();
            iframe.attr('src', host_name + '/MyAccount/AccountPanel.aspx');
            iframe.attr('width', '450');
            break;
        case 'password':
            jQuery('.spinner').hide();
            iframe.attr('src', host_name + '/MyAccount/PasswordPanel.aspx');
            iframe.attr('height', '410');
            iframe.attr('width', '500');
            break;
        case 'shipping':
            jQuery('.spinner').hide();
            iframe.attr('src', host_name + '/MyAccount/ShippingPanel.aspx');
            iframe.attr('height', '1000');
            iframe.attr('width', '650');
            break;
        case 'billing':
            jQuery('.spinner').hide();
            iframe.attr('src', host_name + '/MyAccount/BillingPanel.aspx');
            iframe.attr('height', '1000');
            iframe.attr('width', '650');
            break;
        default:
            jQuery('.spinner').hide();
            iframe.attr('src', host_name + '/MyAccount/AccountPanel.aspx');
            iframe.attr('height', '1000');
            iframe.attr('width', '450');
    }

}

if (this_page == "order-history") {
    if(getUrlParameters("tab", "", true)) {
        var tabID = getUrlParameters("tab", "", true)
    } else {
        var tabID = 1
    }
    var in_the_house = getCookie("tokenData");
    in_the_house = encodeURIComponent(in_the_house);
    var iframe = jQuery('#orderhistory-iframe');
    iframe.attr('src', host_name + '/MyAccount/ViewOrderHistory.aspx?tab='+tabID+'&token=' + in_the_house +'');
}

if (this_page == "my-projects") {

    var iframe = jQuery('#myprojects-iframe');
    iframe.attr('src', libraryURL + window.location.search);

    //Cross-domain messaging for setting iframe height
    // Create IE + others compatible event handler
    var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
    var eventer = window[eventMethod];
    var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";

    // Listen to message from child window
    eventer(messageEvent,function(e) {
            //console.log('parent received message!:  ',e.data);
			if(!isNaN(e.data)){
				document.getElementById('myprojects-iframe').height = e.data + 'px';
			}
    },false);


}


jQuery(document).ready(function(){

    //SIGN UP WELCOME
    var welcome = getUrlParameters("welcome", "", true);
    if (welcome == "true") {
        if (device_width > 768) {
            tb_show("", "#TB_inline?width=430&height=95&inlineId=show-after-signup");
            var hideWelcome = setTimeout(function () {
                tb_remove();
            }, 1500)
        }
    }


    jQuery('input[name="siteID"]').val(getSiteID());

    if (typeof MyVouchersPage !== 'undefined') {
        if (MyVouchersPage == true) {
            checkCounter();
            loadVouchers();
        }
    }



});



//VOUCHERS

var exceptionArray = new Array();
exceptionArray[0] = {prefix: "EVK,EVL,EVM,EVN,EVO,EVP,EVQ,VGJ,VGK,VGW,VJA,VJB,VJC,VJD,VJE,VJF,VJF,VJG,VJH,VJJ,VJK,RBI,VJL,VJM,VJN,VJP,VJQ,VJR,VWQ,VWR,VWS,VWT,VWU,VWV,VWW,VKU,LPA,LPB,LPD,LPE,LPF,LPG,LPH,LPJ,LPK,LPL,LPM,LPP,LPQ", days: 7};

var activeArray = new Array();
var usedArray = new Array();
var expiredArray = new Array();
var voucherTotalCount;
var voucherCounter = 0;
var voucherCounterMenu = 0;


function loadVouchers() {
    jQuery('.spinner').show();
    jQuery.ajax({
        url: cart_host + "/voucher/list",
        dataType: 'jsonp',
        success: function(data) {
            jQuery('.spinner').hide();
            parseData(data);

        },
        error: function(data) {
            jQuery('.spinner').hide();
            console.log("Whoa! Something went wrong trying to get vouchers.");
        }
    });
}


function formatDate(d) {

    var monthNames = [
        "January", "February", "March",
        "April", "May", "June", "July",
        "August", "September", "October",
        "November", "December"
    ];

    var date = new Date(d);
    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();

    return monthNames[monthIndex] + " " + day + ", " + year;

}

function parseData(data) {

    voucherTotalCount = parseInt(data.notExpired.length + data.noBalance.length + data.expired.length);

    for (var i = 0; i < data.notExpired.length; i++) {
        voucherCounter++;
        voucherCounterMenu++;
        var voucher = data.notExpired[i];
        sortVoucher(voucher);
    }

    for (var i = 0; i < data.noBalance.length; i++) {
        voucherCounter++;
        voucherCounterMenu++;
        var voucher = data.noBalance[i];
        sortVoucher(voucher);
    }

    for (var i = 0; i < data.expired.length; i++) {
        voucherCounter++;
        voucherCounterMenu++;
        var voucher = data.expired[i];
        sortVoucher(voucher);
    }

}

function sortVoucher(voucher) {
    if (voucher.expirationDate == null) {
        if (voucher.balance == "0") {
            addUsed(voucher, "No Expiration");
        } else {
            addActive(voucher, "No Expiration");
        }
    } else {
        var v_expire = new Date(voucher.expirationDate);
        var prefix = voucher.codeUpperCase.substring(0,3);
        if (exceptionArray.length > 0) {
            for (var j = 0; j < exceptionArray.length; j++) {
                var prefixA = exceptionArray[j].prefix.toUpperCase();
                var prefixB = prefix.toUpperCase();
                if (prefixA.search(prefixB) > -1) {
                    v_expire.setDate(v_expire.getDate() - exceptionArray[j].days);
                } else {
                    v_expire.setDate(v_expire.getDate() - 14);
                }
            }
        } else {
            v_expire.setDate(v_expire.getDate() - 14);
        }
        var new_expire = new Date(v_expire);
        var today = new Date();
        if (today.getTime() > new_expire.getTime()) {
            addExpired(voucher, formatDate(new_expire));
        } else {
            if (voucher.balance == "0") {
                addUsed(voucher, formatDate(new_expire)); //TODO: zero balance IDDs are not going here.
            } else {
                addActive(voucher, formatDate(new_expire));
            }
        }
    }
}

function checkCounter() {
    if (voucherCounter === voucherTotalCount && voucherTotalCount != undefined) {
        displayVouchers();
    }
    else {
        window.setTimeout("checkCounter();", 100);
    }
}


function displayVouchers() {
    if (activeArray.length > 0) {
        jQuery('.active-tab').append(" ("+activeArray.length+")");
        var notExpired_list = "<table><tr><th>Description</th><th>Code</th><th>Use By</th><th>Balance</th></tr>";
        for (var i = 0; i < activeArray.length; i++) {
            var v_desc = activeArray[i].description;
            var v_terms = activeArray[i].termsURL;
            var v_code = activeArray[i].codeUpperCase;
            var v_expire = activeArray[i].newExpiration;
            var v_balance = activeArray[i].balance;
            v_balance = Math.round(v_balance * 100) / 100;
            var v_type = activeArray[i].type;
            if (v_type == "GiftCard") {
                v_desc = v_desc + " Gift Certificate";
                v_expire = "No Expiration";
            }

            notExpired_list = notExpired_list + "<tr>";
            notExpired_list = notExpired_list + "<td>" + v_desc + (v_expire == 'No Expiration' ? "" : " <a href=\"" + v_terms + "\" target=\"_blank\">Details</a>") + "</td>";
            notExpired_list = notExpired_list + "<td>" + v_code + "</td>";
            notExpired_list = notExpired_list + "<td>" + v_expire + "</td>";
            notExpired_list = notExpired_list + "<td>$" + v_balance + "</td>";
            notExpired_list = notExpired_list + "</tr>";
        }
        notExpired_list = notExpired_list + "</table>";
        jQuery(".v-notExpired").html(notExpired_list);
    } else {
        jQuery(".v-notExpired").html("No active vouchers or gift certificates.")
        jQuery('.active-tab').append(" (0)");
    }

    if (usedArray.length > 0) {
        jQuery('.used-tab').append(" ("+usedArray.length+")");
        var noBalance_list = "<table><tr><th>Description</th><th>Code</th><th>Use By</th><th>Balance</th></tr>";
        for (var i = 0; i < usedArray.length; i++) {
            var v_desc = usedArray[i].description;
            var v_terms = usedArray[i].termsURL;
            var v_code = usedArray[i].codeUpperCase;
            var v_expire = usedArray[i].newExpiration;
            var v_balance = usedArray[i].balance;
            v_balance = Math.round(v_balance * 100) / 100;
            var v_type = usedArray[i].type;
            if (v_type == "GiftCard") {
                v_desc = v_desc + " Gift Certificate";
                v_expire = "No Expiration";
            }

            noBalance_list = noBalance_list + "<tr>";
            noBalance_list = noBalance_list + "<td>" + v_desc + (v_expire == 'No Expiration' ? "" : " <a href=\"" + v_terms + "\" target=\"_blank\">Details</a>") + "</td>";
            noBalance_list = noBalance_list + "<td>" + v_code + "</td>";
            noBalance_list = noBalance_list + "<td>" + v_expire + "</td>";
            noBalance_list = noBalance_list + "<td>$" + v_balance + "</td>";
            noBalance_list = noBalance_list + "</tr>";
        }
        noBalance_list = noBalance_list + "</table>";
        jQuery(".v-noBalance").html(noBalance_list);
    } else {
        jQuery(".v-noBalance").html("No vouchers or gift certificates with $0 balance.")
        jQuery('.used-tab').append(" (0)");
    }

    if (expiredArray.length > 0) {
        jQuery('.expired-tab').append(" ("+expiredArray.length+")");
        var expired_list = "<table><tr><th>Description</th><th>Code</th><th>Use By</th><th>Balance</th></tr>";
        for (var i=0;i<expiredArray.length;i++) {
            var v_desc = expiredArray[i].description;
            var v_terms = expiredArray[i].termsURL;
            var v_code = expiredArray[i].codeUpperCase;
            var v_expire = expiredArray[i].newExpiration;
            var v_balance = expiredArray[i].balance;
            v_balance = Math.round(v_balance * 100) / 100;
            var v_type = expiredArray[i].type;
            if (v_type == "GiftCard") {
                v_desc = v_desc + " Gift Certificate";
                v_expire = "No Expiration";
            }

            expired_list = expired_list + "<tr>";
            expired_list = expired_list + "<td>" + v_desc + " <a href=\"" + v_terms + "\" target=\"_blank\">Details</a></td>";
            expired_list = expired_list + "<td>" + v_code + "</td>";
            expired_list = expired_list + "<td>" + v_expire + "</td>";
            expired_list = expired_list + "<td>$" + v_balance + "</td>";
            expired_list = expired_list + "</tr>";
        }
        expired_list = expired_list + "</table>";
        jQuery(".v-expired").html(expired_list);
    } else {
        jQuery(".v-expired").html("No expired vouchers or gift certificates.")
        jQuery('.expired-tab').append(" (0)");
    }
}





function addActive(voucher, new_expire) {
    activeArray.push({
        balance: voucher.balance,
        codeUpperCase: voucher.codeUpperCase,
        compareExpirationDate: voucher.compareExpirationDate,
        creationTimestamp: voucher.creationTimestamp,
        description: voucher.description,
        expirationDate: voucher.expirationDate,
        modificationTimestamp: voucher.modificationTimestamp,
        orderLine: voucher.orderLine,
        orderNumber: voucher.orderNumber,
        orderStatus: voucher.orderStatus,
        termsURL: voucher.termsURL,
        type: voucher.type,
        newExpiration: new_expire
    });
}

function addUsed(voucher, new_expire) {
    usedArray.push({
        balance: voucher.balance,
        codeUpperCase: voucher.codeUpperCase,
        compareExpirationDate: voucher.compareExpirationDate,
        creationTimestamp: voucher.creationTimestamp,
        description: voucher.description,
        expirationDate: voucher.expirationDate,
        modificationTimestamp: voucher.modificationTimestamp,
        orderLine: voucher.orderLine,
        orderNumber: voucher.orderNumber,
        orderStatus: voucher.orderStatus,
        termsURL: voucher.termsURL,
        type: voucher.type,
        newExpiration: new_expire
    });
}

function addExpired(voucher, new_expire) {
    expiredArray.push({
        balance: voucher.balance,
        codeUpperCase: voucher.codeUpperCase,
        compareExpirationDate: voucher.compareExpirationDate,
        creationTimestamp: voucher.creationTimestamp,
        description: voucher.description,
        expirationDate: voucher.expirationDate,
        modificationTimestamp: voucher.modificationTimestamp,
        orderLine: voucher.orderLine,
        orderNumber: voucher.orderNumber,
        orderStatus: voucher.orderStatus,
        termsURL: voucher.termsURL,
        type: voucher.type,
        newExpiration: new_expire
    });
}

function changeTab(t) {
    jQuery('.active-container').hide();
    jQuery('.used-container').hide();
    jQuery('.expired-container').hide();
    jQuery('.'+t+'-container').show();

    jQuery('.active-tab').removeClass('active');
    jQuery('.used-tab').removeClass('active');
    jQuery('.expired-tab').removeClass('active');
    jQuery('.'+t+'-tab').addClass('active');

}


//enforce sign in on protected pages
jQuery(window).bind("load", function() {
    if (typeof notSignedIn !== 'undefined') {
        thisPage = window.location.href;
        window.location.href="https://"+window.location.hostname+"/sign-in/?url="+encodeURIComponent(thisPage);
    }

});

