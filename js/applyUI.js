jQuery(document).ready(function(){
    var is_safari = navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1;
    /*if(is_safari) {
        jQuery('#placeholder p:nth-child(2)').html('Your Application Will Open In A New Window');
    }*/

jQuery("#bmlo-long-app, #bmlo-short-app, #post-app").hide(); 

jQuery("#bmlo-long-button").click( function(){ 
    /*if (is_safari) {
            jQuery('.before-app a').trigger('click');
        }
    else {*/
       jQuery("#bmlo-long-app").show("fast"); 
       jQuery("#post-app").show(); 
       jQuery("#bmlo-short-app, #bmlo-short-button, #bmlo-long-button, #pre-app, .cmls-container-title .builder-text-column-2, #intro-long-app, #placeholder").hide("fast"); 
       jQuery(".builder-text-column-1").css({"width":"100%", "text-align":"center"});
        //BEGIN - add popup to instruct about Summary page on application
        var $ = jQuery;
        var container = $("#bmlo-long-app").closest("section");
        var $submitMessage = $("<div>", {id: "submit-message"}).html('<h4 style="text-align:center">IMPORTANT!</h4><p>When you get to the <b>Summary tab</b>, make sure to scroll <b>all the way down</b> to submit your application.</p><p id="popup-close" style="display:none;margin-bottom:0;text-align:center;"><span style="font-size:75%;">By clicking "I Agree", you acknowledge that you have read the above.</span><br><button style="box-shadow:0 1px 3px rgba(0, 0, 0, 0.5);padding:8px 20px;" id="message-confirm" title="I agree that I have read the above.">I Agree</button></p>').css({
            "position": "fixed",
            "color": "#000",
            "z-index": "4",
            "top": "40%",
            "right": "2.5%",
            "margin-left": "2.5%",
            "max-width": "401px",
            "padding": "20px",
            "font-size": "1.5rem",
            "background-color": "rgba(255, 255, 255, 0.9)",
            "border": "6px solid #062373",
            "border-radius": "5px",
            "box-shadow": "0 0 1px 2px cornsilk, 0 8px 30px rgba(0, 0, 0, 0.7), inset 0 0 3px rgba(0, 0, 0, 0.5)",
        });
        setTimeout(function() {
                $submitMessage.appendTo(container).fadeIn(400);
                $("#submit-message").click(function() {
                    $("#popup-close").css('display','block');
                });
                $("#submit-message button").click(function() {
                $submitMessage.fadeOut("ease");
                });
        }, 5000);
        //END - popup 
        __gaTracker('send', 'event', 'Apply Now', 'click', 'Corporate Apply Now btn Click');
    //}
}); 

jQuery("#bmlo-short-button").click( function(){ 
    /*if (is_safari) {
            jQuery('.before-app a').trigger('click');
        }
    else {*/
       jQuery("#bmlo-short-button").addClass("bmlo-app-button-active"); 
       jQuery("#bmlo-short-app").show("fast"); jQuery("#post-app").show("slow"); 
       jQuery("#bmlo-long-app, #pre-app, #placeholder").hide("fast");
    //}
});

/*testing new pop-up's in external js file */

jQuery('#app-checklist-link').click( function() {   
    window.open('../application-items-checklist.html','Mortgage Application Resources Checklist','resizable,height=762,width=813'); 
    return false; 
});

jQuery('#bmlo-short-app .before-app a').click( function() {   
    var h = screen.availHeight;
    var href= jQuery(this).attr('href');
    
    window.open(href,'Short Application','resizable,height=' + h + ',width=776'); 
    return false; 
});

jQuery('#bmlo-long-app .before-app a').click( function() {   
    var h = screen.availHeight;
    var href= jQuery(this).attr('href');
    
    window.open(href,'Full Web Application','resizable, height=' + h + ', width=776'); 
    return false; 
});
      
});