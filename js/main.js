$(document).ready(function() {
  $("#owl-slider").owlCarousel({
      nav: true,
      loop: true,
      pagination: true,
      responsive: {
        0: {
          items: 1
        },
        500: {
          items: 2
        }
      }
  });
})
