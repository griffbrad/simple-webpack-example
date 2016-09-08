var isSafari = require('./util/browser-detection').isSafari;

module.exports = {
    init: function() {
        if (isSafari) {
            console.log('Safari!');
        } else {
            console.log('Not Safari!');
        }
    },
    finalize: function() {
    }
};
