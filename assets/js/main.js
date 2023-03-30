document.addEventListener("DOMContentLoaded", function () {
  const siteScroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    scrollFromAnywhere:true,
    reloadOnContextChange:true,
  });
  

  // logo slider
  var trustedSwiper=new Swiper(".trustedSwiper",{slidesPerView:2,spaceBetween:10,autoplay:{delay:2500,disableOnInteraction:!1},pagination:{el:".swiper-pagination",clickable:!0},breakpoints:{414:{slidesPerView:2,spaceBetween:20},640:{slidesPerView:3,spaceBetween:20},768:{slidesPerView:5,spaceBetween:40},1024:{slidesPerView:6,spaceBetween:50}}});

  singeSlideSwiper(".caseStudy");

});
// DOMContentLoaded  end
function singeSlideSwiper(e){
  var caseStudy = new Swiper(e, {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}
// for jQuery
(function () {})(

);