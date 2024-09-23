const swiper1 = new Swiper('.swiper1', {

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

});

const swiper2 = new Swiper('.swiper2', {
 
   pagination: {
     el: '.swiper-pagination',
     clickable: true,
   },
 
   navigation: {
     nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-prev',
   }, 
 });

 const swiper3 = new Swiper('.swiper3', {
 
   pagination: {
     el: '.swiper-pagination',
     clickable: true,
   },
 
   slideToClickedSlide: true,
   spaceBetween: 64,
   slidesPerView: 1.5,
 });
