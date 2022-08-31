// let swiper = new swiper(".mySwiper", {
//     spaceBetween: 10,
//     slidesPerView: 4,
//     freeMode: true,
//     watchSlidesProgress: true,
//    });
   
   
//    let swiper2 = new Swiper(".mySwiper2", {
//     spaceBetween: 10,
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//     thumbs: {
//       swiper: swiper,
//     },
//    });
var splide = new Splide( '.splide', {
  type   : 'loop',
  padding: '5rem',
} );

splide.mount();