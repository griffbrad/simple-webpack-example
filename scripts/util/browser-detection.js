/**
 * Browser detection
 */

var isIE = function () {
    return ((navigator.appName == 'Microsoft Internet Explorer') || ((navigator.appName == 'Netscape') && (new RegExp("Trident/.*rv:([0-9]{1,}[\.0-9]{0,})").exec(navigator.userAgent) != null)));
};

var isIEOld  = isIE() && isIE() < 9,
    isiPad   = navigator.userAgent.match(/iPad/i),
    isChrome = navigator.userAgent.indexOf('Chrome') > -1,
    isSafari = false;

if ( (navigator.userAgent.indexOf('Safari') > -1) && ! isChrome ) {
    isSafari = true;
}

module.exports = {
    isIEOld:  isIEOld,
    isiPad:   isiPad,
    isChrome: isChrome,
    isSafari: isSafari
};
