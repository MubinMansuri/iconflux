'use strict';
gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", function () {
  Splitting();

  let scrollContainer = document.querySelector("body");
  imagesLoaded(scrollContainer, { background: true }, () => {document.body.classList.add('img_loaded');});
  
  window.addEventListener('scroll', () => document.querySelector('.site-header').classList.toggle('header-sticky', window.pageYOffset > 100));
  window.addEventListener('scroll', () => document.querySelector('.site-header').classList.toggle('shadow-sm', window.pageYOffset > 100));

  // logo slider
  const trustedSwiper = new Swiper(".trustedSwiper", {
    slidesPerView: 2,
    spaceBetween: 10,
    autoplay: { delay: 2000, disableOnInteraction: !1 },
    effect:'slide',
    loop:!0,
    // pagination: { el: ".swiper-pagination", clickable: !0 },
    breakpoints: {
      414: { slidesPerView: 2, spaceBetween: 20 },
      640: { slidesPerView: 3, spaceBetween: 20 },
      768: { slidesPerView: 5, spaceBetween: 40 },
      1024: { slidesPerView: 6, spaceBetween: 50 },
    },
  });

  singeSlideSwiper(".caseStudy");
  singeSlideSwiper2(".testimonial");

  var badges = document.querySelectorAll('.ico_03 .tabs .badge');
  var badgesVal = document.querySelectorAll('.ico_03 .tech_lang');
  badges.forEach(function(badge) {
    badge.addEventListener('click', function() {
      badges.forEach(function(badge) {
        badge.classList.remove('active');
      });
      this.classList.add('active');
      badgesVal.forEach(function(badgeVal) {
        badgeVal.classList.remove('large');
      });
      var dataCls = this.getAttribute('data-tech');
      document.querySelectorAll('.ico_03 .tech_lang.' + dataCls).forEach(function(badgeVal) {
        badgeVal.classList.add('large');
      });
    });
  });
  /* text scrolling */
  // const icoCursor = document.querySelector('.icoCursor');
  // gsap.set(".icoCursor", {xPercent: -50, yPercent: -50});  let xTo = gsap.quickTo(".icoCursor", "x", {duration: 0.6, ease: "power3"}),yTo = gsap.quickTo(".icoCursor", "y", {duration: 0.6, ease: "power3"});
  // window.addEventListener("mousemove", e => {xTo(e.clientX);yTo(e.clientY);});
  // window.addEventListener("click", () => {
  //   if (icoCursor.classList.contains("click")) {
  //     icoCursor.classList.remove("click");
  //     void icoCursor.offsetWidth; // trigger a DOM reflow
  //     icoCursor.classList.add("click");
  //   } else {
  //     icoCursor.classList.add("click");
  //   }
  // });

  const playbtn = document.querySelector('.playbtn');
  const videoThumbnail = document.querySelector('.video-thumbnail');
  const video = document.querySelector('.video');
  if(playbtn){
    playbtn.addEventListener('click',function(e){
      e.preventDefault();
      e.target.classList.add('active');
      videoThumbnail.classList.add('active');
      video.classList.add('active');
      video.src += '?autoplay=1';
    });
  }

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

function singeSlideSwiper3(e) {
  var twoBoxCenter = new Swiper(e, {
    spaceBetween: 30,
    slidesPerView: 3.5,
    loop: true,
    centeredSlides: true,
    slidesPerView: 1,
    spaceBetween: 10,
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      // when window width is >= 480px
      768: {
        slidesPerView: 1.5,
        spaceBetween: 30
      },
      // when window width is >= 640px
      1024: {
        slidesPerView: 3.5,
        spaceBetween: 40
      }
    },
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
singeSlideSwiper3(".twoBoxCenter");


gsap.timeline({
  repeat: 0,
})
  .add('fade-in')
  .to('#fade-in', {
    delay: 0.1,
    duration: 3,
    opacity: 1,
  }, 0)
  .add(loadingTimeline, 0);



// for jQuery
(function () {
  // add Jquery code here
})();