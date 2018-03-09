var isOldIE = (navigator.userAgent.indexOf("MSIE") !== -1);
iFrameResize(
    {
    log:true, 
    checkOrigin:false,
    minHeight:500,
    heightCalculationMethod: isOldIE ? 'max' : 'lowestElement'   
    },

    'iframe.floify'
);

jQuery('iframe.floify').on('load', function() {
    jQuery('iframe.floify').removeAttr('height');
});