"use strict";
gsap.registerPlugin(ScrollTrigger);
// Mega Menu start
// document.addEventListener("DOMContentLoaded", function () {
//   if (window.innerWidth > 992) {
//     document.querySelectorAll(".navbar .nav-item").forEach(function (everyitem) {
//         everyitem.addEventListener("mouseover", function (e) {
//           let el_link = this.querySelector("a[data-bs-toggle]");
//           if (el_link != null) {
//             let nextEl = el_link.nextElementSibling;
//             el_link.classList.add("show");
//             nextEl.classList.add("show");
//           }
//         });
//         everyitem.addEventListener("mouseleave", function (e) {
//           let el_link = this.querySelector("a[data-bs-toggle]");
//           if (el_link != null) {
//             let nextEl = el_link.nextElementSibling;
//             el_link.classList.remove("show");
//             nextEl.classList.remove("show");
//           }
//         });
//     });
//   }
// });
// DOMContentLoaded  end


const triggerTabList = document.querySelectorAll('#mm-nav-tab>button')
triggerTabList.forEach(triggerEl => {
  const tabTrigger = new bootstrap.Tab(triggerEl);
  triggerEl.addEventListener("mouseover", function (e) {
    e.preventDefault();
    tabTrigger.show();
  });
  triggerEl.addEventListener("mouseleave", function (e) {
    e.preventDefault();
    tabTrigger.hide();
  });
});


// Mega Menu End ---------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
  Splitting();

  let scrollContainer = document.querySelector("body");
  imagesLoaded(scrollContainer, { background: true }, () => {
    document.body.classList.add("img_loaded");
  });

  window.addEventListener("scroll", () =>
    document
      .querySelector(".site-header")
      .classList.toggle("header-sticky", window.pageYOffset > 100)
  );
  window.addEventListener("scroll", () =>
    document
      .querySelector(".site-header")
      .classList.toggle("shadow-sm", window.pageYOffset > 100)
  );

  // logo slider
  const trustedSwiper = new Swiper(".trustedSwiper", {
    slidesPerView: 2,
    spaceBetween: 10,
    autoplay: { delay: 2000, disableOnInteraction: !1 },
    effect: "slide",
    loop: !0,
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

  var badges = document.querySelectorAll(".ico_03 .tabs .badge");
  var badgesVal = document.querySelectorAll(".ico_03 .tech_lang");
  badges.forEach(function (badge) {
    badge.addEventListener("click", function () {
      badges.forEach(function (badge) {
        badge.classList.remove("active");
      });
      this.classList.add("active");
      badgesVal.forEach(function (badgeVal) {
        badgeVal.classList.remove("large");
      });
      var dataCls = this.getAttribute("data-tech");
      document
        .querySelectorAll(".ico_03 .tech_lang." + dataCls)
        .forEach(function (badgeVal) {
          badgeVal.classList.add("large");
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

  const playbtn = document.querySelector(".playbtn");
  const videoThumbnail = document.querySelector(".video-thumbnail");
  const video = document.querySelector(".video");
  if (playbtn) {
    playbtn.addEventListener("click", function (e) {
      e.preventDefault();
      e.target.classList.add("active");
      videoThumbnail.classList.add("active");
      video.classList.add("active");
      video.src += "?autoplay=1";
    });
  }

  /* About Us ScrollTrigger Slide Horizontal */
  // gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.defaults({ markers: false });
  var points = gsap.utils.toArray(".point");
  var indicators = gsap.utils.toArray(".indicator");
  var indicators_elem = document.querySelector(".indicators");
  var philosophie = document.querySelector(".philosophie");
  var height = 100 * points.length;

  if (indicators_elem) {
    gsap.set(".indicators", { display: "flex" });
  }
  if (points && philosophie) {
    var tl = gsap.timeline({
      duration: points.length,
      scrollTrigger: {
        trigger: philosophie,
        start: "top bottom",
        end: "+=" + height + "%",
        toggleClass: "active",
        scrub: true,
        id: "points",
        markers: false,
      },
    });
  }
  var philosophie_wrapper = document.querySelector(".philosophie .wrapper");
  if (philosophie_wrapper) {
    var pinner = gsap.timeline({
      scrollTrigger: {
        trigger: philosophie_wrapper,
        start: "30% center",
        end: "+=" + height + "%",
        // end: "+=100%",
        scrub: true,
        pin: ".site-main",
        id: "experience-pin",
        pinSpacing: true,
        markers: false,
        toggleClass: "active",
      },
    });
  }
  var philosophie_wrapper_point = document.querySelector(
    ".philosophie .wrapper .point"
  );
  if (philosophie_wrapper_point) {
    var pinnerEl = gsap.timeline({
      scrollTrigger: {
        trigger: philosophie_wrapper_point,
        start: "30% center",
        end: "+=" + height + "%",
        // end: "+=100%",
        scrub: true,
        // pin: ".site-main",
        // id: "experience-pin",
        markers: false,
        toggleClass: "active",
      },
    });
  }
  if (points) {
    points.forEach(function (elem, i) {
      gsap.set(elem, { position: "absolute", top: 0 });
      tl.to(indicators[i], { backgroundColor: "orange", duration: 0.25 }, i);
      tl.from(elem.querySelector(".img-wrapper"), { autoAlpha: 0 }, i);
      tl.from(
        elem.querySelector(".content-wrapper"),
        { autoAlpha: 0, translateY: 100 },
        i
      );

      if (i != points.length - 1) {
        tl.to(
          indicators[i],
          { backgroundColor: "#adadad", duration: 0.25 },
          i + 0.75
        );
        tl.to(
          elem.querySelector(".content-wrapper"),
          { autoAlpha: 0, translateY: -100 },
          i + 0.75
        );
        tl.to(elem.querySelector(".img-wrapper"), { autoAlpha: 0 }, i + 0.75);
      }
    });
  }
  /* About Us ScrollTrigger Slide Horizontal */
});
// DOMContentLoaded  end
function singeSlideSwiper(e) {
  /* for single slide banner*/
  var caseStudy = new Swiper(e, {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: { el: ".swiper-pagination", clickable: true },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}
function singeSlideSwiper2(e) {
  /* for home page*/
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
  /* for three slide*/
  var twoBoxCenter = new Swiper(e, {
    spaceBetween: 30,
    slidesPerView: 3,
    loop: true,
    // centeredSlides: true,
    slidesPerView: 1,
    spaceBetween: 10,
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: { slidesPerView: 1, spaceBetween: 20 },
      // when window width is >= 480px
      768: { slidesPerView: 2, spaceBetween: 30 },
      // when window width is >= 640px
      1024: { slidesPerView: 3, spaceBetween: 40 },
    },
    autoplay: { delay: 2500, disableOnInteraction: false },
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
singeSlideSwiper3(".card-list-slider");

function slideSwiper2x225(e) {
  /* for 2.5 slide*/
  var twoBoxCenter = new Swiper(e, {
    spaceBetween: 30,
    slidesPerView: 1,
    loop: true,
    // centeredSlides: true,
    slidesPerView: 1,
    spaceBetween: 10,
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: { slidesPerView: 1, spaceBetween: 20 },
      // when window width is >= 480px
      768: { slidesPerView: 2, spaceBetween: 30 },
      // when window width is >= 640px
      1024: { slidesPerView: 2.5, spaceBetween: 30 },
    },
    autoplay: { delay: 2500, disableOnInteraction: false },
    // pagination: {
    //   el: "[class*='swiper-testimonial'] .swiper-pagination",
    //   clickable: true,
    // },
    // navigation: {
    //   nextEl: "[class*='swiper-testimonial'] .swiper-button-next",
    //   prevEl: "[class*='swiper-testimonial'] .swiper-button-prev",
    // },
  });
}
slideSwiper2x225(".devSlider");
function slideSwiper3x325(e) {
  /* for 2.5 slide*/
  var twoBoxCenter = new Swiper(e, {
    spaceBetween: 30,
    slidesPerView: 1,
    loop: true,
    // centeredSlides: true,
    slidesPerView: 1,
    spaceBetween: 10,
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: { slidesPerView: 1, spaceBetween: 20 },
      // when window width is >= 480px
      768: { slidesPerView: 2, spaceBetween: 30 },
      // when window width is >= 640px
      1024: { slidesPerView: 3.025, spaceBetween: 30 },
    },
    autoplay: { delay: 2500, disableOnInteraction: false },
    // pagination: {
    //   el: "[class*='swiper-testimonial'] .swiper-pagination",
    //   clickable: true,
    // },
    // navigation: {
    //   nextEl: "[class*='swiper-testimonial'] .swiper-button-next",
    //   prevEl: "[class*='swiper-testimonial'] .swiper-button-prev",
    // },
  });
}
slideSwiper3x325(".indusSlider");

function singeSlideSwiper6(e) {
  /* for three slide*/
  var testingSlider = new Swiper(e, {
    spaceBetween: 30,
    centeredSlides: true,
    slidesPerView: 3,
    loop: 1,
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: { slidesPerView: 1, spaceBetween: 20 },
      // when window width is >= 480px
      768: { slidesPerView: 2, spaceBetween: 30 },
      // when window width is >= 640px
      1024: { slidesPerView: 3, spaceBetween: 40 },
    },
    autoplay: { delay: 2500, disableOnInteraction: false },
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
singeSlideSwiper6(".testingSlider");

var tl = gsap.timeline({});
var rule = CSSRulePlugin.getRule(".flutter-banner:before"); //get the rule
tl.fromTo(
  rule,
  { opacity: 0, xPercent: "0px" },
  { opacity: 1, xPercent: "330px", duration: 1 }
),
  tl.fromTo(
    ".flutter-banner #fade-in",
    { opacity: 0, y: 50 },
    { opacity: 1, duration: 1, y: 0 }
  ),
  tl.fromTo(
    ".flutter-banner .icon-wrp",
    { opacity: 1, scale: 0 },
    { opacity: 1, duration: 0.5, scale: 1 }
  );

// var rule = CSSRulePlugin.getRule(".flutter-banner:before"); //get the rule
// gsap.to(rule, {opacity: 1, scale: 0}, {opacity: 1, duration: 1,  scale: 1});

// for jQuery
(function () {
  // add Jquery code here
})();
