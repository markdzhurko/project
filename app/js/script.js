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

const buttonForm = document.querySelector('.it__body-btn');
const form = document.querySelector('.it__form');
const close = document.querySelector('.it__form-close')

buttonForm.addEventListener('click', menuToggle);
close.addEventListener('click', menuRemove);

function menuToggle() {
    form.classList.toggle('show');
}
function menuRemove() {
    form.classList.remove('show');
}
console.log(form)
