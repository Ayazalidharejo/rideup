
 
var swiper = new Swiper(".mySwiper", {
  cssMode: true,
  loop :'infinite',
  
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  
  
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,

  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  }

});



var swiper = new Swiper(".mySwipere", {
  slidesPerView: 3,
  spaceBetween: 10,
  
  pagination: {
    el: ".swiper-pagination",
    clickable: true,

  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
    speed:1000
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  }
});
// const logo = document.querySelector('#logo');
// const icons = logo.querySelectorAll('iconify-icon');

// logo.addEventListener('mouseover', () => {
//   icons.forEach((icon) => {
//     icon.style.display = 'block'; 
//     icon.style.opacity = '1'; 
//   });
// });

// logo.addEventListener('mouseout', () => {
//   icons.forEach((icon) => {
//     icon.style.display = 'none'; 
//     icon.style.opacity = '0'; 
//   });
// });