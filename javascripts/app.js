(function($, win, doc) {

    var app = (function() {
        var initLandingPage = function() {
            $('#wrapper')
                .find('#logo')
                    .velocity('transition.slideDownIn', {duration: 1000})
                    .end()
                .find('#content-area')
                    .velocity('transition.fadeIn', {delay: 400, duration: 1000})
                    .end();
        };

        return {
            init: function() {
                initLandingPage();
            }
        };
    })();

    $(doc).ready(function() {
        app.init();
    });

})(window.jQuery, window, document);
