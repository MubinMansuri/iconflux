document.addEventListener("DOMContentLoaded", function () {
  let scrollContainer = document.querySelector("body");
  imagesLoaded(scrollContainer, { background: true }, () => {
    document.body.classList.add('img_loaded');
  });
  

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
    let additionalXAnim;
    let offset = 0;
    let originalImages = gsap.utils.toArray(".o-big-title .o-big-title__inner .o-big-title__txt");
    const container = document.querySelector(".o-big-title .o-big-title__inner");
    const sliderWidth = container.offsetWidth;

    // DUPLICATE IMAGES FOR LOOP
    originalImages.forEach((image) => {
      var clone = image.cloneNode(true);
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

    const imagesScrollerTrigger = ScrollTrigger.create({
      trigger: '.ico_05',
      start: "top 50%",
      end: "bottom 50%",
      onUpdate: function (self) {
        const velocity = self.getVelocity();
        if (velocity > 0) {
          if (additionalXAnim) additionalXAnim.kill();
          additionalX.val = -velocity / 4000;
          additionalXAnim = gsap.to(additionalX, { val: 0 });
        }
        if (velocity < 0) {
          if (additionalXAnim) additionalXAnim.kill();
          additionalX.val = -velocity / 4000;
          additionalXAnim = gsap.to(additionalX, { val: 0 });
        }
      }
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