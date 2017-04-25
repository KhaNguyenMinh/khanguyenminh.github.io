(function ($) {

    "use strict";

    function openMenu() {
        $('#mainSideNav').width(250);
        $('#openMenuIcon').addClass('hidden');
        $('#closeMenuIcon').removeClass('hidden');
    }

    function closeMenu() {
        $('#mainSideNav').width(0);
        // $('body').css('background-color', '#fff');
        $('#openMenuIcon').removeClass('hidden');
        $('#closeMenuIcon').addClass('hidden');
    }

    function fullPageScroll() {
        // fullpage customization
        $('#homePage').fullpage({
            // sectionsColor: ['#B8AE9C', '#348899', '#F2AE72', '#5C832F', '#B8B89F'],
            sectionSelector: '.vertical-scrolling',
            slideSelector: '.horizontal-scrolling',
            navigation: true,
            slidesNavigation: true,
            controlArrows: false,
            anchors: ['home', 'content'],
            menu: '#menu',

            // afterLoad: function(anchorLink, index) {
            //   $header_top.css('background', 'rgba(0, 47, 77, .3)');
            //   $nav.css('background', 'rgba(0, 47, 77, .25)');
            //   if (index == 5) {
            //       $('#fp-nav').hide();
            //     }
            // },

            // onLeave: function(index, nextIndex, direction) {
            //   if(index == 5) {
            //     $('#fp-nav').show();
            //   }
            // },

            afterSlideLoad: function (anchorLink, index, slideAnchor, slideIndex) {
                if (anchorLink == 'fifthSection' && slideIndex == 1) {
                    $.fn.fullpage.setAllowScrolling(false, 'up');
                    // $header_top.css('background', 'transparent');
                    // $nav.css('background', 'transparent');
                    // $(this).css('background', '#374140');
                    // $(this).find('h2').css('color', 'white');
                    // $(this).find('h3').css('color', 'white');
                    // $(this).find('p').css(
                    //   {
                    //     'color': '#DC3522',
                    //     'opacity': 1,
                    //     'transform': 'translateY(0)'
                    //   }
                    // );
                }
            },

            onSlideLeave: function (anchorLink, index, slideIndex, direction) {
                if (anchorLink == 'fifthSection' && slideIndex == 1) {
                    $.fn.fullpage.setAllowScrolling(true, 'up');
                    // $header_top.css('background', 'rgba(0, 47, 77, .3)');
                    // $nav.css('background', 'rgba(0, 47, 77, .25)');
                }
            }
        });
    }

    $(document).ready(function () {
        /**start*************SLIDE MENU***************/
        $('#openMenuIcon').click(function () {
            openMenu();
        });

        $('#closeMenuIcon').click(function () {
            closeMenu();
        });
        /**end*************SLIDE MENU***************/

        /**start*************HOME PAGE***************/
        if ($('#homePage').length > 0) {
            fullPageScroll();
        }
        /**end*************HOME PAGE***************/

        /**start*************PROJECTS PAGE***************/
        if ($('#grid-gallery').length > 0) {
            new CBPGridGallery(document.getElementById('grid-gallery'));
        }
        /**end*************PROJECTS PAGE***************/
    });

})(window.jQuery);