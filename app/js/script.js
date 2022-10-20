$('.achievements__list').slick({
    infinite: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 2,
    dots: true,
    responsive: [
        {
          breakpoint: 648,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
    ]
  });

  $('.team').slick({
    infinite: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
  });


const burger = document.querySelector('.header__menu-btn');
const burgerMenu = document.querySelector('.header__list');
const burgerClose = document.querySelector('.header__list-close');
const overlay = document.querySelector('.it__form-overlay');
const buttonForm = document.querySelector('.it__body-btn');
const form = document.querySelector('.it__form');
const close = document.querySelector('.it__form-close');
const overlayHeader = document.querySelector('.header__overlay');
const body = document.querySelector ('body');

burger.addEventListener('click', burgerToggle);
burgerClose.addEventListener('click', burgerRemove);
buttonForm.addEventListener('click', menuToggle);
close.addEventListener('click', menuRemove);
overlay.addEventListener('click', menuRemove);
overlayHeader.addEventListener('click', burgerRemove);


function menuToggle() {
    form.classList.toggle('show');
    overlay.classList.toggle('show');
    body.classList.toggle('no-scroll');
}
function menuRemove() {
    form.classList.remove('show');
    overlay.classList.remove('show');
    body.classList.remove('no-scroll');
}
function burgerToggle() {
    burgerMenu.classList.toggle('show');
    overlayHeader.classList.toggle('show');
}

function burgerRemove() {
    burgerMenu.classList.remove('show');
    overlayHeader.classList.remove('show');
    body.classList.remove('no-scroll');
}

