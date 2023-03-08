let $owl = $('.carousel-2');
        $owl.children().each(function (index) {
            $(this).attr('data-position', index);
        });
        $(document).on('click', '.owl-item>div', function () {
            let $speed = 300;
            $owl.trigger('to.owl.carousel', [$(this).data('position'), $speed]);
        });
        $owl.owlCarousel({
            loop: true,
            mergeFit: true,
            center: true,
            autoplay:true,
            autoplayHoverPause: true,
            autoplaySpeed:2000,
            nav: true,
            navText: ['&lsaquo;', '&rsaquo;'],
            responsive: {
                0: { items: 1 },
                600: { items: 2 },
                992: { items: 3 },
                1200: { items: 4 },
            }
        }); 