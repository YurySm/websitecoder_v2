// const hamburger     = document.querySelector('.hamburger'),
//       menu          = document.querySelector('.menu'),
//       closeElem     = document.querySelector('.menu__close'),
//       modal         = document.querySelector('.modal');





// hamburger.addEventListener('click', () => {
//     menu.classList.add('active');
// } );

// closeElem.addEventListener('click', () => {   
//     menu.classList.remove('active');    
// } );


// const persents = document.querySelectorAll('.skills__lines-persent'),
//       lines    = document.querySelectorAll('.main_color');

// persents.forEach((item, i) => {
// lines[i].style.width = item.innerHTML;
// });

// $(document).ready(function(){
//     $('.contacts__form').submit(function(e) {
//         e.preventDefault();
//         $.ajax({
//             type: "POST",
//             url: "mailer/smart.php",
//             data: $('.contacts__form').serialize()
//         }).done(function() {
//             $('.contacts__form').find("input").val("");
//             $('.overlay__modal').fadeIn('slow').delay(2000).fadeOut(1000);
//             $('.contacts__form').trigger('reset');
//         });
//         return false;
//      });
// });


document.addEventListener('DOMContentLoaded', () => {
    const hamburger     = document.querySelector('.hamburger'),
      menu          = document.querySelector('.menu'),
      closeElem     = document.querySelector('.menu__close'),
      overlay      = document.querySelector('.menu__overlay'),
      listItems    = document.querySelectorAll('.menu__link'),
      scroll = calcScroll();
    //   modal         = document.querySelector('.modal');


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

    // skills 
    const persents = document.querySelectorAll('.skills__lines-persent'),
          lines    = document.querySelectorAll('.main_color');

    persents.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
    });



});