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
  // var badges = $(".ico_03 .tabs .badge");
  // var badgesVal = $(".ico_03 .tech_lang");
  // badges.click(function(){
  //   badges.removeClass("active");
  //   $(this).addClass("active");

  //   badgesVal.removeClass("large");
  //   var dataCls = $(this).attr('data-tech'); 
  //   $(".ico_03 .tech_lang."+dataCls).addClass("large");
  // });
})();