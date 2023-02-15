document.addEventListener("DOMContentLoaded", function () {
  const siteScroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
  });
  
  /** START -- for stikcy header  **/
  let navbarMain = document.querySelector(".site-header");

  window.addEventListener("scroll", function () {
    navbarMain.classList.toggle("header-sticky", window.scrollY > 100);
  });
  /** END -- for stikcy header **/



});
// DOMContentLoaded  end

// for jQuery
(function () {})(

);