jQuery(document).ready(function() {
    
    //BEGIN - add popup to instruct about Summary page on application
    var $ = jQuery;
    var container = $("#bmlo-long-app").closest("section");
    var $submitMessage = $("<div>", {id: "submit-message"}).html('<h4 style="text-align:center">IMPORTANT!</h4><p>When you get to the <b>Summary tab</b>, make sure to scroll <b>all the way down</b> to submit your application.</p><p id="popup-close" style="display:none;margin-bottom:0;text-align:center;"><span style="font-size:75%;">By clicking "I Agree", you acknowledge that you have read the above.</span><br><button style="box-shadow:0 1px 3px rgba(0, 0, 0, 0.5);padding:8px 20px;" id="message-confirm" title="I agree that I have read the above.">I Agree</button></p>').css({
        "position": "fixed",
        "color": "#000",
        "z-index": "3",
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
    var url = window.location.hostname;
    $('#app-checklist-link').click( function() {   
    window.open('../application-items-checklist.html','Mortgage Application Resources Checklist','resizable,height=762,width=813'); 
    return false; 
});
    $( window ).load(function() {
        if (url === 'nlc.benchmark.us') {
            setTimeout(function() {
                $('<div id="referral-reminder" class="animated bounceInDown"><i class="fa fa-exclamation-circle" aria-hidden="true"></i>Type the name of your Originator as your Referral.<br><small id="close">close</small></div>').appendTo('#bmlo-long-app').fadeIn(400);
                $('#referral-reminder').css({'color': 'rgb(6, 35, 115)','font-weight': 'bold', 'z-index': '999', 'margin-top': '-987px', 'margin-bottom': 'calc(987px - 106px)', 'box-shadow': '1px 3px 10px rgba(102, 102, 102, 0.6)', 'margin-left': '51%', 'max-width':'240px', 'border':'1px solid #000', 'padding':'10px', 'background-color':'#fff', 'position':'relative'});
                $('small#close').css({'text-align':'center', 'color':'#171717', 'cursor':'pointer'});
                $('small#close').click(function() {
                    $('#referral-reminder').addClass('bounceOutUp');
                });
            }, 1000);
        };
        
         if (navigator.userAgent.indexOf('Windows NT 6.1') > 0) {
             if ($.browser.webkit) {
                $('#bmlo-long-app iframe').css({'width':'819px', 'height':'1526px'});
             };
         };
        setTimeout(function() {
            $submitMessage.appendTo(container).fadeIn(400);
            $("#submit-message").click(function() {
                $("#popup-close").css('display','block');
            });
            $("#submit-message button").click(function() {
            $submitMessage.fadeOut("ease");
            });
    }, 5000);
    });
    //END - popup
    
});