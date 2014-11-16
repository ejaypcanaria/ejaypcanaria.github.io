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
        },

        initTLDRButton = function() {
            $('#tldr-toggle').on('click', function() {
                $(this).toggleClass('on');

                $('#skills, #experience')
                    .toggleClass('tldr')
                    .velocity('callout.bounce');
            });
        };

        return {
            init: function() {
                initTLDRButton();
                initLandingPage();
            }
        };
    })();

    $(doc).ready(function() {
        app.init();
    });

})(window.jQuery, window, document);
