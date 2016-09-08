module.exports = {
    init: function () { // JavaScript to be fired on all pages
        $(document.body).append('jQuery example in common.js!');
    },
    finalize: function () { // JavaScript to be fired on all pages, after page specific JS is fired

    }
};
