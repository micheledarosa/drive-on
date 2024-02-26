document.addEventListener("DOMContentLoaded", function() {
    var fadeIns = document.querySelectorAll('.fade-in');
  
    function fadeInElements() {
      fadeIns.forEach(function(fadeIn) {
        if (isElementInViewport(fadeIn)) {
          fadeIn.classList.add('visible');
        }
      });
    }
  
    function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  
    window.addEventListener('scroll', fadeInElements);
    window.addEventListener('resize', fadeInElements);
  
    fadeInElements();
  });  