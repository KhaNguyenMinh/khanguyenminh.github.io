(function ($) {

    "use strict";

    $.fn.adtop_animation = function (effect, callback) {
        this.addClass(effect + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            $(this).removeClass(effect + ' animated');
            if (typeof callback === 'function') {
                callback.call(this);
            }
        });
    };

    window.loading_screen = window.pleaseWait({
        logo: "dist/images/favicon.png",
        backgroundColor: '#fff',
        loadingHtml: '<div class="spinner"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div>'
    });

    $(window).on('load', function () {
        window.loading_screen.finish();
        $('body').css('opacity', 1);
        // if ($('.subscribe-modal').length) {
        //     setTimeout(function() {
        //         $('.subscribe-modal').modal('show');
        //     }, 1000);
        // }
    });

})(window.jQuery);