(function($, win, doc) {

    $(doc).ready(function() {
        $('.main-nav ul li a').on('click', function() {
            var target = this.dataset.target;

            $('html, body').animate({scrollTop:  $(target).offset().top}, 800);

            return false;
        });
    });

})(window.jQuery, window, document);
