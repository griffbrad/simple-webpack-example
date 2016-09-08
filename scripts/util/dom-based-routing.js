var $ = require('jquery');

// The routing fires all common scripts, followed by the page specific scripts.
// Add additional events for more control over timing e.g. a finalize event
var factory = function (namespace) {
    var router = {
        fire: function (func, funcname, args) {
            var fire;
            funcname = (funcname === undefined) ? 'init' : funcname;
            fire = func !== '';
            fire = fire && namespace[func];
            fire = fire && typeof namespace[func][funcname] === 'function';

            if (fire) {
                namespace[func][funcname](args);
            }
        },
        loadEvents: function() { // Fire common init JS
            router.fire('common');

            // Fire page-specific init JS, and then finalize JS
            $.each(document.body.className.replace(/-/g, '_').split(/\s+/), function(i, classnm) {
                router.fire(classnm);
                router.fire(classnm, 'finalize');
            });

            // Fire common finalize JS
            router.fire('common', 'finalize');
        }
    };

    return router;
};

var init = function (namespace) {
    var router = factory(namespace);
    $(document).ready(router.loadEvents);
};

module.exports = {
    factory: factory,
    init:    init
};
