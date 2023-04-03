document.addEventListener("DOMContentLoaded", function () {
  let scrollContainer = document.querySelector("[data-scroll-container]");
  var scroll;
  scroll = new LocomotiveScroll({
    el: scrollContainer,
    smooth: true,
    getSpeed: true,
    getDirection: true,
    offset:["15%",0],
    scrollFromAnywhere:true,
    reloadOnContextChange:true,
  });
  /* update scroll (height) when all images are loaded */
  imagesLoaded(scrollContainer, { background: true }, () => {
    scroll.update();
    document.body.classList.add('img_loaded');
  });
  

  // logo slider
  const trustedSwiper=new Swiper(".trustedSwiper",{slidesPerView:2,spaceBetween:10,autoplay:{delay:2500,disableOnInteraction:!1},pagination:{el:".swiper-pagination",clickable:!0},breakpoints:{414:{slidesPerView:2,spaceBetween:20},640:{slidesPerView:3,spaceBetween:20},768:{slidesPerView:5,spaceBetween:40},1024:{slidesPerView:6,spaceBetween:50}}});

  singeSlideSwiper(".caseStudy");
  singeSlideSwiper2(".testimonial");

  [...document.querySelectorAll('.ico_03 .tabs .badge.android')].forEach(faq => faq.addEventListener('click', () => [...document.querySelectorAll('.tech_lang.android')].forEach(tech => tech.classList.toggle('large'))));
  
  [...document.querySelectorAll('.ico_03 .tabs .badge.iOS')].forEach(faq => faq.addEventListener('click', () => [...document.querySelectorAll('.tech_lang.iOS')].forEach(tech => tech.classList.toggle('large'))));
  
  [...document.querySelectorAll('.ico_03 .tabs .badge.crossPlatform')].forEach(faq => faq.addEventListener('click', () => [...document.querySelectorAll('.tech_lang.crossPlatform')].forEach(tech => tech.classList.toggle('large'))));
  
  [...document.querySelectorAll('.ico_03 .tabs .badge.db')].forEach(faq => faq.addEventListener('click', () => [...document.querySelectorAll('.tech_lang.db')].forEach(tech => tech.classList.toggle('large'))));
  
  [...document.querySelectorAll('.ico_03 .tabs .badge.designTools')].forEach(faq => faq.addEventListener('click', () => [...document.querySelectorAll('.tech_lang.designTools')].forEach(tech => tech.classList.toggle('large'))));

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
function singeSlideSwiper2(e){
  var testimonial = new Swiper(e, {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: "[class*='swiper-testimonial'] .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: "[class*='swiper-testimonial'] .swiper-button-next",
      prevEl: "[class*='swiper-testimonial'] .swiper-button-prev",
    },
  });
}
function addClassToDivs(elem) {
  const tech_img = [...document.querySelectorAll('.tech_lang')]
  tech_img.forEach((tech) => {
    if (tech.getAttribute("[data-tech = 'android']") === null && elem.classList.contains("android"))  {
      this.classList.toggle('large');
    }
    if (tech.getAttribute("iOS") === null && elem.classList.contains("iOS"))  {
        this.classList.toggle('large');
    }
  });
}
// for jQuery
(function () {})(

);