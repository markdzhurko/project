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
