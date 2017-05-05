(function ($) {

    "use strict";

    var projectGallery;

    function openMenu() {
        $('#mainSideNav').width(250);
        $('#openMenuIcon').addClass('hidden');
        $('#closeMenuIcon').removeClass('hidden');
    }

    function closeMenu() {
        $('#mainSideNav').width(0);
        $('#openMenuIcon').removeClass('hidden');
        $('#closeMenuIcon').addClass('hidden');
    }

    function homePageSlide() {
        var slider = new MasterSlider();
        slider.setup('masterslider' , {
            speed: 5,
            layout: 'fullscreen',
            autoplay: true,
            layersMode: 'full',
            grabCursor: false,
            loop: true,
            view:"fade"
        });
        return slider;
    }

    function productsSlide() {
        var slider = new MasterSlider();

        slider.control('arrows');   
        slider.control('lightbox'); 
        slider.control('thumblist' , {autohide:false ,dir:'h',align:'bottom', width:130, height:85, margin:5, space:5 , hideUnder:400});

        slider.setup('productMasterslider' , {
            width:1000,
            height:500, 
            fullwidth:true,
            space:5,
            loop:true,
            view:'fade',
            autoplay: true
        });
    }

    function projectGallery() {
        projectGallery = $("#gallery").unitegallery({
            tiles_align:"center",	                //align of the tiles in the space
            tiles_space_between_cols: 1,			//space between images
            tiles_exact_width: false,				//exact width of column - disables the min and max columns
            tiles_space_between_cols_mobile: 1,     //space between cols for mobile type
            tiles_include_padding: false,			//include padding at the sides of the columns, equal to current space between cols
            tiles_min_columns: 1,					//min columns
            tiles_max_columns: 4,					//max columns (0 for unlimited)
            tiles_set_initial_height: true,			//columns type related only
            tiles_enable_transition: true,		    //enable transition when screen width change
            tile_overlay_opacity:0.3,
            tile_enable_icons: false,
            tile_enable_image_effect: false,

            tile_enable_action:	false,			    //enable tile action on click like lightbox
            tile_as_link: true,				        //act the tile as link, no lightbox will appear
            tile_link_newpage: false,			    //open the tile link in new page

            tile_enable_overlay: true,
            tile_enable_textpanel: true,		 	//enable textpanel
            tile_textpanel_source: "description",	//title,desc,desc_title. source of the textpanel. desc_title - if description empty, put title
            tile_textpanel_always_on: false,	 	//textpanel always visible
            tile_textpanel_appear_type: "fade", 	//slide, fade - appear type of the textpanel on mouseover
            tile_textpanel_position:"inside_center",//inside_bottom, inside_top, inside_center, top, bottom the position of the textpanel
            tile_textpanel_offset:10,			    //vertical offset of the textpanel

            tile_textpanel_padding_top:8,		 	//textpanel padding top
            tile_textpanel_padding_bottom:20,	 	//textpanel padding bottom
            tile_textpanel_padding_right: 11,	 	//cut some space for text from right
            tile_textpanel_padding_left: 11,	 	//cut some space for text from left
            tile_textpanel_bg_opacity: 0.4,		 	//textpanel background opacity
            tile_textpanel_bg_color:"transparent",	//textpanel background color
            tile_textpanel_bg_css:{},			 	//textpanel background css

            tile_textpanel_title_color:null,		//textpanel title color. if null - take from css
            tile_textpanel_title_font_family:null,	//textpanel title font family. if null - take from css
            tile_textpanel_title_text_align: 'center',	 //textpanel title text align. if null - take from css
            tile_textpanel_title_font_size: 16,	    //textpanel title font size. if null - take from css
            tile_textpanel_title_bold:null			//textpanel title bold. if null - take from css
        });
    }

    function fullPageScroll() {
        $('#homePage').fullpage({
            verticalCentered: true
            // sectionsColor: ['#B8AE9C', '#348899', '#F2AE72', '#5C832F', '#B8B89F'],
            // sectionSelector: '.vertical-scrolling',
            // slideSelector: '.horizontal-scrolling',
            // navigation: true,
            // slidesNavigation: true,
            // controlArrows: false,
            // anchors: ['home', 'content'],
            // menu: '#menu',

            // afterRender: function () {
            //     setInterval(function () {
            //         $.fn.fullpage.moveSlideRight();
            //     }, 3000);
            // }

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

            // afterSlideLoad: function (anchorLink, index, slideAnchor, slideIndex) {
            //     if (anchorLink == 'fifthSection' && slideIndex == 1) {
            //         $.fn.fullpage.setAllowScrolling(false, 'up');
            //         // $header_top.css('background', 'transparent');
            //         // $nav.css('background', 'transparent');
            //         // $(this).css('background', '#374140');
            //         // $(this).find('h2').css('color', 'white');
            //         // $(this).find('h3').css('color', 'white');
            //         // $(this).find('p').css(
            //         //   {
            //         //     'color': '#DC3522',
            //         //     'opacity': 1,
            //         //     'transform': 'translateY(0)'
            //         //   }
            //         // );
            //     }
            // },

            // onSlideLeave: function (anchorLink, index, slideIndex, direction) {
            //     if (anchorLink == 'fifthSection' && slideIndex == 1) {
            //         $.fn.fullpage.setAllowScrolling(true, 'up');
            //         // $header_top.css('background', 'rgba(0, 47, 77, .3)');
            //         // $nav.css('background', 'rgba(0, 47, 77, .25)');
            //     }
            // }
        });
    }

    $(document).ready(function () {
        // Home page slider
        homePageSlide();

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
        // if ($('#grid-gallery').length > 0) {
        //     new CBPGridGallery(document.getElementById('grid-gallery'));
        // }

        if ($('#gallery').length > 0) {
            projectGallery();
        }

        /**end*************PRODUCT PAGE***************/
        $('#productsPage .products-img .img-wrapper').click(function (e) {
            var index = $(e.target).data('index');
            var relatedIndex = $(e.target).data('related').split('-');

            // $('#productsPage .products-img .img-wrapper').removeClass('hidden');
            $('#productsPage .products-img .img-wrapper').css('width', '25%');
            for (var i=0; i < relatedIndex.length; i++) {
                var item = parseInt(relatedIndex[i]);
                // $('#productsPage .products-img .img-wrapper[data-index="' + item + '"]').addClass('hidden');
            }

            $('#productsPage .products-img .img-wrapper[data-index="' + index + '"]').css('width', '50%');
            console.log('index', index);
        });
        /**start*************HOME PAGE***************/

        /**end*************PRODUCT PAGE***************/

    });

})(window.jQuery);