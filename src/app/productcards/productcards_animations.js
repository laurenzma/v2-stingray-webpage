$(document).ready((_) => {
  var controller = new ScrollMagic.Controller();
  const scene = new ScrollMagic.Scene({
    triggerElement: ".introText"
  }).setClassToggle('.introText', 'show')
  .addTo(controller);



});
