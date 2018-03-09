var options = { valueNames: [ 'name', 'city', 'state' ] };
var loList = new List('lo-list', options);
jQuery("#lo-list .list, #lo-list .clear-search, #lo-list .sort-order, #lo-list .ZA, #lo-list .by-state").hide();
jQuery("#lo-list .search").keyup( function() { 
  jQuery('#lo-list .search').each(function(n,element){
    if (jQuery('#lo-list .search').val()=='') {
      jQuery("#lo-list .list").slideUp();
      jQuery('#lo-list .sort-order').hide();
    }
    else {
      jQuery("#lo-list .list, #lo-list .sort-order").show();
    }
  });
});
jQuery('#lo-list button').click( function(){
    jQuery('#lo-list .list').slideDown().addClass('open');
    if (jQuery('#lo-list button.name, #lo-list button.state').hasClass('asc')) {
    jQuery('#lo-list .sort-order, #lo-list .AZ').show();
    jQuery('#lo-list .ZA').hide();
    }
    else if (jQuery('#lo-list button.name, #lo-list button.state').hasClass('desc')) {
    jQuery('#lo-list .sort-order, #lo-list .ZA').show();
    jQuery('#lo-list .AZ').hide();
    };
});
jQuery('#lo-list button.name').click( function() {
    jQuery('#lo-list .by-name').show();
    jQuery('#lo-list .by-state').hide();
})
jQuery('#lo-list button.state').click( function() {
    jQuery('#lo-list .by-state').show();
    jQuery('#lo-list .by-name').hide();
})
jQuery('#lo-list .search').focus(function() {
    jQuery('#lo-list .search').val('');            
    jQuery('#lo-list .list').slideUp().removeClass('open');
    jQuery('button.name, button.state').removeClass("asc desc");
    jQuery('#lo-list .sort-order').hide();
});
jQuery('#lo-list button, #lo-list .search').focus(function() {
        jQuery('#lo-list table').css({"box-shadow":"0 3px 8px #666"});
});
jQuery('#lo-list button, #lo-list .search').focusout(function() {
    if (!jQuery('#lo-list .list').hasClass('open')) {
        jQuery('#lo-list table').css({"box-shadow":"none"});
    }
});
if (jQuery(window).width() < 430 ) {
    jQuery("#lo-list .search").attr("placeholder","Search by Name or by State");
}
else {
    jQuery("#lo-list .search").attr("placeholder","Start typing the name or location of your Loan Officer now...");
}

if (jQuery('body').hasClass('logged-in')) {
    var total = jQuery("#lo-list ul > li").length;
    jQuery("#lo-list").append('<div style="color:#666;font-size:70%">Total =' + total + '</div>');
}