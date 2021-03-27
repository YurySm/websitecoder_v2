document.addEventListener('DOMContentLoaded', () => {
    const hamburger     = document.querySelector('.hamburger'),
      menu          = document.querySelector('.menu'),
      closeElem     = document.querySelector('.menu__close'),
      overlay      = document.querySelector('.menu__overlay'),
      listItems    = document.querySelectorAll('.menu__link'),
      scroll = calcScroll();


    hamburger.addEventListener('click', () => {
        menu.classList.add('active');
        document.body.style.overflow = "hidden";
        if (document.documentElement.clientWidth > 900) { 
            document.body.style.marginRight = `${scroll}px`;
        }
    });
    console.log(document.documentElement.clientWidth);
    
    hamburger.addEventListener('click', () => {
        menu.classList.add('active');
        document.body.style.overflow = "hidden";
        document.body.style.marginRight = `${scroll}px`;
    } );

    closeElem.addEventListener('click', () => {   
        menu.classList.remove('active'); 
        document.body.style.overflow = "";
        document.body.style.marginRight = 0;
    } );
    overlay.addEventListener('click', () => {   
        menu.classList.remove('active');  
        document.body.style.overflow = "";
        document.body.style.marginRight = 0;  
    } );
    listItems.forEach(item => {
        item.addEventListener('click', () => {
            menu.classList.remove('active');  
            document.body.style.overflow = "";
            document.body.style.marginRight = 0; 
        });
    });
    function calcScroll() {
        let div = document.createElement('div');
        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';

        document.body.appendChild(div);
        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();

        return scrollWidth;
    }    
    calcScroll();

    //portfolio
    const img = document.querySelectorAll('.portfolio__elem_img'),
            link = document.querySelectorAll('.portfolio__elem_link');

        img.forEach((item, i) => {
            item.addEventListener('mouseover', () => {
                link[i].classList.add('portfolio__elem_link_active');
            });
            item.addEventListener('mouseout', () => {
                link[i].classList.remove('portfolio__elem_link_active');
            });
        });

    const portfolioBtn = document.querySelector('.portfolio__btn'),
            triggerItems = document.querySelectorAll('.trigger');

        triggerItems.forEach(item => {
            item.classList.add('hide');
        });

        portfolioBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if (portfolioBtn.classList[2] == 'asd') {
                triggerItems.forEach(item => {
                    item.classList.remove('fade');
                    item.classList.add('fadeOut');                    
                    setTimeout(() => {
                        item.classList.add('hide');
                    },1000);
                });
                portfolioBtn.innerHTML = 'Еще работы';
                portfolioBtn.classList.remove('asd');
            } else {
                triggerItems.forEach(item => {
                    item.classList.add('fade');
                    item.classList.remove('hide');
                    item.classList.remove('fadeOut');
                });
                portfolioBtn.innerHTML = 'Свернуть';
                portfolioBtn.classList.add('asd');
            }
        });

    // skills 
    const persents = document.querySelectorAll('.skills__lines-persent'),
          lines    = document.querySelectorAll('.main_color');

    persents.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
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
    $("a[href='#promo']").click(function(){
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });
    



});