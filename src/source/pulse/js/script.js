$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1100,
        // adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/pic/arrows/prev_arrow.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/pic/arrows/next_arrow.png"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                  dots: false,
                  arrows: false,
                  autoplay: true
                }
              }
          ]
    });

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
      });
    
    // $('.catalog-item__link').each(function(i){
    //     $(this).on('click', function(e){
    //         e.preventDefault();
    //         $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
    //         $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
    //     })
    // })

    // $('.catalog-item__back').each(function(i){
    //     $(this).on('click', function(e){
    //         e.preventDefault();
    //         $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
    //         $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
    //     })
    // })
    function toggleSlide(item){
        $(item).each(function(i){
             $(this).on('click', function(e){
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            })
        })
    };
    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');

    $('[data-modal=consultation]').on('click', function(){
        $('.overlay, #consultation').fadeIn('slow');
    });

    $('.modal__close').on('click', function(){
        $('.overlay, #consultation, #order, #thanks').fadeOut('slow');
    });
    // $('.button_mini').on('click', function() {
    //     $('.overlay, #order').fadeIn('slow');
    // });
    $('.button_mini').each(function(i) {
        $(this).on('click', function() {
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn('slow');
        });
    });
        
    // validation forms
    // $('#consultation-form').validate();
    // $('#consultation form').validate({
    //     rules:{
    //         name: "required",
    //         phone: "required",
    //         email: {
    //             required: true,
    //             email: true
    //         }
    //     },
    //     messages: {
    //         name: "Пожалуйста, введите Ваше имя",
    //         phone: "Пожалуйста, введите Ваш номер телефона",
    //         email: {
    //           required: "Пожалуйста, введите Ваш Email",
    //           email: "Ваш email далжен быть формата name@domain.com"
    //         }
    //       }

    // });    
    // $('#order form').validate();

    function validateForms(form) {
        $(form).validate({
            rules:{
                name: "required",
                phone: "required",
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: "Пожалуйста, введите Ваше имя",
                phone: "Пожалуйста, введите Ваш номер телефона",
                email: {
                required: "Пожалуйста, введите Ваш Email",
                email: "Ваш email далжен быть формата name@domain.com"
            }
            }
        });
    };
    validateForms('#consultation-form');
    validateForms('#consultation form');
    validateForms('#order form');

    $('input[name=phone]').mask("+ 8 (999) 999-99-99");

    $('form').submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('#consultation, #order').fadeOut();
            $('.overlay, #thanks').fadeIn('slow');
            $('form').trigger('reset');
        });
        return false;
    });
//   scroll

    $(window).scroll(function(){
        if ($(this).scrollTop() > 1600) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });
    // плавность перехода
    $("a[href='#up']").click(function(){
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });
    
    new WOW().init();

    
});
