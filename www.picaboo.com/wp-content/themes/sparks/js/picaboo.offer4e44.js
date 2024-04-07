//The sign up modal that pops up on the homepage
// for new customers offering a deal for signing up.
// Only shows if "returning" cookie is not found.

var newCustomerOffer; //defined in the offer's content found in AdRotate plugin in Wordpress

jQuery('#register-form').validate({
    rules: {
        firstName: "required",
        lastName: "required",
        email: {
            required: true,
            email: true
        },
        password: {
            required: true,
            minlength: 4,
            maxlength: 50
        },
        password2: {
            required: true,
            minlength: 4,
            maxlength: 50,
            equalTo: "#s_password"
        }
    },
    messages: {
        firstName: "!",
        lastName: "!",
        email: "!",
        password: {
            required: "!",
            minlength: "!",
            maxlength: "!"
        },
        password2: {
            required: "!",
            minlength: "!",
            maxlength: "!",
            equalTo: "!"
        }
    },
    errorClass: "invalid",
    success: function(label) {
        label.addClass("valid").text("")
    },
    focusInvalid: false,
    errorPlacement: function(error, element) {
        error.appendTo( element.next("span") );
    },
    debug: true,
    submitHandler: function(form) {
        jQuery('.signin-form .form-error').fadeTo('fast', 0).hide();
        jQuery('#signin-button').val("please wait...");
        var frm = jQuery(form);
        var form_data = frm.serialize();
        console.log(form_data);
        jQuery.ajax({
            type: frm.attr('method'),
            url: frm.attr('action'),
            dataType: 'xml',
            data: frm.serialize(),
            success: function(data) {
                var result = jQuery.xml2json(data);
                handleSignUp(result);
            },
            error: function(data,errorThrown,textStatus) {
                console.log(errorThrown);
                console.log(data);
                console.log(textStatus);
                jQuery('#signin-button').val("Create account");
                alert("Whoa! Something went wrong. Try again.");

            },
            complete: function(data, textStatus){

            }
        });
    }
});

function handleSignUp(data) {
    if (data.Result == 0) {
        dataLayerEvent('Account created', 'Sign up from offer modal', newCustomerOffer, 0);
        window.location.href="https://"+window.location.hostname+"/sign-in/?new=true";
    } else if (data.Result == '-1002') {
        resizeThickbox(0,550);
        jQuery('.signin-form .form-error').fadeTo('slow', 1);
        jQuery('.signin-form .form-error').html('The email is already in use.');
        jQuery('#signin-button').val("Create account");
    } else {
        resizeThickbox(0,550);
        jQuery('.signin-form .form-error').fadeTo('slow', 1);
        jQuery('.signin-form .form-error').html('Something went wrong. Try again.');
        jQuery('#signin-button').val("Create account");
    }
}


jQuery(document).ready(function(){
    //Commenting it out as it doesnot trigger the registration pop up properly.
    /* var is_root = location.pathname == "/";
	
    if (!getCookie("tokenData") && !getCookie("returning") && device_width > 1024  && is_root && !getUrlParameters("modalUrl","", true)) {
        //showSignUp('header','','new');
        tb_show("","#TB_inline?width=400&height=480&inlineId=signin-form");
        jQuery('#register-form').fadeTo('fast', 1);
        dataLayerEvent('Sign up offer modal loaded',newCustomerOffer,'',0);
    } */

    jQuery('input[name="siteID"]').val(getSiteID());


});










