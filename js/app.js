/* #Header
    ======================================================= */

// Scroll BG Color change
const header = document.querySelector('.header');

if (header) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
      header.classList.add('header-white');
    } else {
      header.classList.remove('header-white');
    }
  });

  if (window.scrollY > 0) {
    header.classList.add('header-white');
  } else {
    header.classList.remove('header-white');
  }
}

// Hamburger
const hamburgerBtn = document.querySelector('.header .hamburger');
const headerNav = document.querySelector('.header-nav');
const body = document.querySelector('body');

if (hamburgerBtn) {
  hamburgerBtn.addEventListener('click', (e) => {
    hamburgerBtn.classList.toggle('is-active');
    header.classList.toggle('show-menu');
    body.classList.toggle('no-scroll');
  });
}

if (headerNav) {
  if (window.innerWidth < 1024) {
    headerNav.style.display = 'none';
    setTimeout(() => {
      headerNav.style.display = 'flex';
    }, 250);
  }
}

/* #Collapse
    ======================================================= */
const collapsibles = document.querySelectorAll('.collapsible');

if (collapsibles) {
  collapsibles.forEach((collapsible) => {
    if (window.innerWidth > 1024) {
      // Hover
      if (collapsible.classList.contains('hover')) {
        collapsible.addEventListener('mouseover', (e) => {
          collapsible.classList.add('show');
        });
        collapsible.addEventListener('mouseout', (e) => {
          collapsible.classList.remove('show');
        });
        // Click
      } else {
        collapsible.addEventListener('click', (e) => {
          if (e.target.closest('.collapse-toggler')) {
            e.preventDefault();
            collapsible.classList.toggle('show');
          }
        });
      }
    } else {
      collapsible.addEventListener('click', (e) => {
        if (e.target.closest('.collapse-toggler')) {
          e.preventDefault();
          collapsible.classList.toggle('show');
        }
      });
    }
  });
}

// Sliders
window.addEventListener('load', () => {
  /* #Banner Slider
    ======================================================= */
  new Swiper('.banner-slider .swiper-container', {
    effect: 'fade',
    loop: true,
    pagination: {
      el: '.banner-slider .swiper-pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.banner-slider .swiper-button-next',
      prevEl: '.banner-slider .swiper-button-prev',
    },
  });

  /* #Video Slider
      ======================================================= */
  new Swiper('.video-slider .swiper-container', {
    loop: true,
    slidesPerView: 2,
    centeredSlides: true,
    navigation: {
      nextEl: '.video-slider .swiper-button-next',
      prevEl: '.video-slider .swiper-button-prev',
    },
    breakpoints: {
      0: {
        slidesPerView: 1.1
      },
      1024: {
        slidesPerView: 2
      }
    },
  });

  /* #Popular Products Slider
======================================================= */
  const popularProductsTopSlider = new Swiper('#popularProductsTopSlider', {
    slidesPerView: 5,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    allowTouchMove: false,
    breakpoints: {
      0: {
        slidesPerView: 4,
        allowTouchMove: true,
        spaceBetween: 30
      },
      1024: {
        slidesPerView: 8,
        allowTouchMove: false,
      }
    },
    navigation: {
      nextEl: '#popularProductsTopSlider .swiper-button-next',
      prevEl: '#popularProductsTopSlider .swiper-button-prev',
    },
  });

  const popularProductsBottomSlider = new Swiper('#popularProductsBottomSlider', {
    slidesPerView: 1,
    thumbs: {
      swiper: popularProductsTopSlider
    },
    noSwiping: true,
    allowTouchMove: false,
    effect: 'fade',
    speed: 500
  });

  // Init child sliders
  const popularProductsSlidesNum = document.querySelectorAll('#popularProductsBottomSlider > .swiper-wrapper > .swiper-slide');
  popularProductsSlidesNum.forEach((slide, index) => {
    let i = index + 1;
    new Swiper('#popularProductsProductSlider' + i, {
      slidesPerView: 4.5,
      centeredSlides: true,
      loop: true,
      navigation: {
        nextEl: '#popularProductsProductSlider' + i + ' .swiper-button-next',
        prevEl: '#popularProductsProductSlider' + i + ' .swiper-button-prev',
      },
      breakpoints: {
        0: {
          slidesPerView: 1.5
        },
        1024: {
          slidesPerView: 4.5
        }
      }
    });
  });

  /* #Product Page Gallery Slider
  ======================================================= */
  const thumbs = new Swiper('.product-thumbs .swiper-container', {
    direction: 'vertical',
    slidesPerView: 5,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    freeMode: true,
  });

  const gallery = new Swiper('.product-gallery .swiper-container', {
    thumbs: {
      swiper: thumbs,
    },
    effect: 'fade',
    pagination: {
      el: '.product-gallery .swiper-pagination',
    },
    grabCursor: true,
  });
});