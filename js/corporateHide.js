jQuery(document).ready( function() {
    jQuery(".corporateHide").remove();
    
    //remove addthis extra content
    /*jQuery(".addthis_toolbox").eq(1).remove();*/
    
    //update year text with current year
    var currentYear = (new Date).getFullYear();
    jQuery('.currentYear').text(currentYear);
});