var $ = jQuery;
//floify fixes
var desktopSignupToLoginTransition = function () {
    $("#desktop-apply-now-create-account-modal").hide();
    $("#desktop-apply-now-login-modal").show();
    if (!desktopLoginListenersRegistered) {
        desktopLoginListenersRegistered = true;
        desktopRegisterLoginListeners();
    }
    desktopHideErrorsAndClearInputs();
};
var desktopLoginToSignupTransition = function () {
    $("#desktop-apply-now-login-modal").hide();
    $("#desktop-apply-now-create-account-modal").show();
    if (!desktopSignupListenersRegistered) {
        desktopSignupListenersRegistered = true;
        desktopRegisterSignupListeners();
    }
    desktopHideErrorsAndClearInputs();
};
//mobile transition functions
var mobileSignupToLoginTransition = function () {
    $("#mobile-apply-now-create-account-modal").hide();
    $("#mobile-apply-now-login-modal").show();
    if (!loginListenersRegistered) {
        loginListenersRegistered = true;
        mobileRegisterLoginListeners();
    }
    hideErrorsAndClearInputs();
};
var mobileLoginToSignupTransition = function () {
    $("#mobile-apply-now-login-modal").hide();
    $("#mobile-apply-now-create-account-modal").show();
    if (!signupListenersRegistered) {
        signupListenersRegistered = true;
        mobileRegisterSignupListeners();
    }
    hideErrorsAndClearInputs();
};
//remove floify logo
var removeLogo = function () {
    $('.desktop-apply-now-company-logo, .mobile-apply-now-company-logo').remove();
}
var removeHeader = function () {
    $('.header').remove();
}
var removeFooter = function () {
        $('.copyright').remove();
    }
    //Hijack Their own animation styles to prevent the repainting error with resizing
var desktopWelcomeToLoginTransition = function () {
    console.log("login transition");
    $(".desktop-apply-now-page-remainder-blob-background").show();
    $("#desktop-apply-now-login-modal").show();
    $("#desktop-apply-now-create-account-modal").hide();
    $("#desktop-apply-now-welcome").hide();
    $(".desktop-apply-now-page-remainder-blob-background").removeAttr('style');
};
var desktopWelcomeToSignupTransition = function () {
    console.log("signup transition");
    $("#desktop-apply-now-create-account-modal").show();
    $(".desktop-apply-now-page-remainder-blob-background").show();
    $("#desktop-apply-now-login-modal").hide();
    $("#desktop-apply-now-welcome").hide();
    $(".desktop-apply-now-page-remainder-blob-background").removeAttr('style');
};
var desktopBackToWelcomeTransition = function () {
    console.log("welcome transition");
    $(".desktop-apply-now-page-remainder-blob-background").hide();
    $("#desktop-apply-now-welcome").show(); /*.slideDown(250)*/
    $("#desktop-apply-now-welcome").removeAttr('style');
    $("#desktop-apply-now-welcome").hide();
    $('#desktop-apply-now-login-modal, #desktop-apply-now-create-account-modal').hide();
    /* .css({
           display: 'none'
           , bottom: 'auto'
           , left: 'initial'
           , position: 'initial'
           , width: null
           , height: 'initial'
           , minWidth: '375px'
       });*/
};
//END Hijacking animation styles
//Benchmark modifications
//Determine LO
/*let benchmarkLo = $("div.mortgage-company-instructions.col-md-2.hidden-xs > p:nth-child(1) > b").text().trim();*/
var benchmarkLo = window.location.href.split('//')[1].split('.')[0];
let johnNorris = benchmarkLo === "johnnorris1";
var refinance = $("#sec2_refinance").is(':checked');

function skipDownPaymentSource() {
    $("#tab_sec2_subpage1 #tab_sec2_next").on('click', function () {
        $("#tab_sec2").removeClass('active');
        $("#tab_sec3").addClass('active');
    });
}
/*if (johnNorris) { //It works!
    if (refinance) {
        skipDownPaymentSource();
    }
}*/
// Prevent the backspace key from navigating back.
$(document).unbind('keydown').bind('keydown', function (event) {
    if (event.keyCode === 8) {
        var doPrevent = true;
        var types = ["text", "password", "file", "search", "email", "number", "date", "color", "datetime", "datetime-local", "month", "range", "search", "tel", "time", "url", "week"];
        var d = $(event.srcElement || event.target);
        var disabled = d.prop("readonly") || d.prop("disabled");
        if (!disabled) {
            if (d[0].isContentEditable) {
                doPrevent = false;
            }
            else if (d.is("input")) {
                var type = d.attr("type");
                if (type) {
                    type = type.toLowerCase();
                }
                if (types.indexOf(type) > -1) {
                    doPrevent = false;
                }
            }
            else if (d.is("textarea")) {
                doPrevent = false;
            }
        }
        if (doPrevent) {
            event.preventDefault();
            return false;
        }
    }
});

function unBindWindow() {
    window.onbeforeunload = null;
}
//Show No-Save warning to only salient pages
var checkForUnloadWarning = function () {
        if ((window.location.href.indexOf('apply') > -1) && (document.getElementById('desktop-apply-now-welcome-login-all-items') == undefined) && (document.getElementById('mobile-apply-now-forgot-password-container') == undefined) && (jQuery('input[type="text"]').val() !== "") //Check to make sure this is not the login, forget password, or signup page, or that inputs have been entered.
        ) {
            window.onbeforeunload = function () { //Throw the browser's native warning
                    return "Your work will be lost."; //and return 'your work will be lost' to the console.
                }
                //unbind window on submit button click
            $("#tab_last_submit").on('click', function () {
                unBindWindow()
            });
        }
    }
    //on keyup, check conditions for onbeforeunload warning
$(document).on('keyup', function () {
    checkForUnloadWarning()
});
//Add listening to increase the height of the modal when password helper section displays
//When password field is in focus
$("#desktop-apply-now-modal-create-account-password").focusin(function () {
    //increase the height of the modal by 50px
    $("#desktop-apply-now-create-account-modal").css("max-height", "520px");
});
//when password field is not in focus
$("#desktop-apply-now-modal-create-account-password").focusout(function () {
    //reduce the height down by 50px
    $("#desktop-apply-now-create-account-modal").css("max-height", "470px");
});
//Main functions to fire when DOM is ready
$(document).ready(function () {
    //Remove blob background graphic and house icon
    $('#desktop-apply-now-house-blob-background, #mobile-apply-now-house-blob-background').remove();
    //Swap the floify logo for the BM circle
    $('img[src="/logo-apply-now"]').attr('src', 'https://benchmark.us/wp-content/themes/make-child/assetts/BM-Circle-Only.png');
    //Remove X to close login, signup modals, which results in an empty document when clicked, so get rid of them!
    $(".desktop-welcome-login-X-transition-button").unwrap().empty().remove();
    //Check if in iframe, or for ?noheaderfooter query string  
    if ((window.location.href.split('').join(', ').indexOf('?') >= 0) || !(top.location === window.location)) {
        //Remove the Floify logo
        removeLogo();
        removeHeader();
        removeFooter();
    }
    //Fix Floify's broken (non-existent) event listener on mobile
    $("#mobile-apply-now-create-from-login-link").on('click', function () {
        mobileLoginToSignupTransition();
    });
});