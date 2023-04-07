document.addEventListener("DOMContentLoaded", function () {
  let scrollContainer = document.querySelector("body");
  imagesLoaded(scrollContainer, { background: true }, () => {
    document.body.classList.add('img_loaded');
  });
  
  window.addEventListener('scroll', () => document.querySelector('.site-header').classList.toggle('header-sticky', window.pageYOffset > 200));
  window.addEventListener('scroll', () => document.querySelector('.site-header').classList.toggle('shadow-sm', window.pageYOffset > 200));

  // logo slider
  const trustedSwiper=new Swiper(".trustedSwiper",{slidesPerView:2,spaceBetween:10,autoplay:{delay:2500,disableOnInteraction:!1},pagination:{el:".swiper-pagination",clickable:!0},breakpoints:{414:{slidesPerView:2,spaceBetween:20},640:{slidesPerView:3,spaceBetween:20},768:{slidesPerView:5,spaceBetween:40},1024:{slidesPerView:6,spaceBetween:50}}});

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


  // text scrolling
  gsap.registerPlugin(ScrollTrigger);

    const additionalX = { val: 0 };
    let offset = 0;
    let originalImages = gsap.utils.toArray(".o-big-title .o-big-title__inner .o-big-title__txt");
    const container = document.querySelector(".o-big-title .o-big-title__inner");
    const sliderWidth = container.offsetWidth;

    // DUPLICATE IMAGES FOR LOOP
    originalImages.forEach((image) => {
      var clone = image.cloneNode(true);
      clone.classList.add('o-big-title__txt--clone');
      container.appendChild(clone);
    });
    let images = gsap.utils.toArray(".o-big-title .o-big-title__inner .o-big-title__txt");
    // SET ANIMATION
    images.forEach((item) => {
      gsap.to(item, {
        x: "-=" + Number(sliderWidth / 2),
        duration: 30,
        repeat: -1,
        ease: "none",
        modifiers: {
          x: gsap.utils.unitize((x) => {
            offset += additionalX.val;
            x = (parseFloat(x) + offset) % -Number(sliderWidth * 0.5);
            return x;
          })
        }
      });
    });
    gsap.utils.toArray('.ico_05').forEach((section, index) => {
      const w = section.querySelector('.o-big-title .o-big-title__inner');
      const [x, xEnd] = (index % 2) ? ['100%', (w.scrollWidth - section.offsetWidth) * -1] : [w.scrollWidth * -1, 0];
      gsap.fromTo(w, {  x  }, {
        x: xEnd,
        scrollTrigger: { 
          trigger: '.ico_04', 
          scrub: 0.5 
        }
      });
    });

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

// for jQuery
(function () {
  // add Jquery code here
})();