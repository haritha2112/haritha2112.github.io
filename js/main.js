$(document).onReady(function() {
  $("#owl-slider").owlCarousel({
      navigation: false,
      pagination: true,
      itemsCustom : [
        [0, 1],
        [700, 2],
        [960, 3]
     ],
      navigationText: false
  });
})