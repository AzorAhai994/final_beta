<script>
        var $grid = $('.grid').isotope({
            sortBy: 'random',
            itemSelector: '.grid-item',
            layoutMode: 'packery',

            packery: {
                itemSelector: '.grid-item',
                gutter: 0,
                percentPosition: true,


            }
        });

        $(window).on("load", (function () {
            var $container = $('.grid');
        }));

        // layout Isotope after each image loads
        $grid.imagesLoaded().progress(function () {
            $grid.isotope('layout');
        });


        $('#filters i').click(function () {
            var selector = $(this).attr('data-filter');
            $grid.isotope({
                filter: selector
            });
            return false;
        });
    </script>
    <script type="text/javascript">
        (function () {

            //	default opts:
            //	parallaxMultiple: 0.1,
            //	tiltMultiple: 0.05,
            //      duration: 500,
            //      easing:'easeOutExpo'

            $('.tilter_image').parallaxTilt({
                parallaxMultiple: 0.10,


            });
            $('.tilter_deco').parallaxTilt({
                parallaxMultiple: .005
            });
            $('.tilter_caption').parallaxTilt({
                parallaxMultiple: -(0.08)
            });

        })();
    </script>
    <script>
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            $(function () {
                $('#work').hover(function () {

                    $('#tag').css('border-top', '4px solid #519700');
                }, function () {
                    // on mouseout, reset the background colour

                    $('#tag').css('border-top', '4px solid #0058fb');
                });
            });
        } else {
            $(function () {
                $('#work').hover(function () {
                    $('#deco').css('opacity', '1');
                    $('#tag').css('border-top', '4px solid #1dd100');
                }, function () {
                    // on mouseout, reset the background colour
                    $('#deco').css('opacity', '0');
                    $('#tag').css('border-top', '4px solid #0058fb');
                });
            });
        }
    </script>
    <script>
        $(function () {
            $('#work').hover(function () {
                $('#txt').css('opacity', '0');

            }, function () {
                // on mouseout, reset the background colour
                $('#txt').css('opacity', '1');

            });
        });
    </script>
    <script>
        $(function () {
            $.scrollify({
                section: ".section",
                //standardScrollElements: ".page2",

                //interstitialSection: ".grid--sect",
                scrollSpeed: 650,
                touchScroll: false,
                setHeights: false,






            });
        });
    </script>
    <script>
        $('#filters').switchstyler({ //fixed object
            on: '.page2', //target section
            addClass: 'animated',
            removeClass: 'none' //classes to remove
        });
    </script>
    <script>
        $('#circle').switchstyler({ //fixed object
            on: '.page2', //target section
            addClass: 'toggle-circle',
            removeClass: '' //classes to remove
        });
    </script>

    <script>
        $('#work').switchstyler({ //fixed object
            on: '.page3', //target section
            addClass: 'animated',
            removeClass: '' //classes to remove
        });
    </script>
    <script>
        var ptr = PullToRefresh.init({
            mainElement: 'body',
            onRefresh: function () {
                window.location.reload();
            }
        });
    </script>
    <script src="js/mobile-chrome-vh-fix.js"></script>

    <script>
        var vhFix = new VHChromeFix([{
                selector: '.page1',
                vh: 100
            },
            {
                //selector: '.page3',
                vh: 100
            },

        ]);
    </script>