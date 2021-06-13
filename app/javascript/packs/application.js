// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)


$(document).on("turbolinks:load", function() {
    const noright = document.getElementsByClassName("norightpad")[0];
    const noleft = document.getElementsByClassName("noleftpad")[0];
    const callist = document.getElementsByClassName("callist")[0];
    const wrap = document.getElementsByClassName("wrap")[0];
    const twologo = document.getElementsByClassName("twologo")[0];

    const mealprep = document.getElementsByClassName("chinback")[0];
    const catering = document.getElementsByClassName("faceback")[0];
    const pchef = document.getElementById("desback");
    const about = document.getElementsByClassName("cbaback")[0];
    const home = document.getElementsByClassName("calnav")[0];
    const hb = document.getElementsByClassName("headerback")[0];
    const hbw = document.getElementsByClassName("headerbackwrap")[0];

    //
    //  window.addEventListener("scroll", downScroll);
    //  let cwrapPos = cwrap.getBoundingClientRect().top + 600;
    //    let screenPos = window.innerHeight;
    //  console.log("cwrap " + cwrapPos)
    //  console.log("screenPos " + screenPos)
    //
    //
    // function downScroll() {
    //   cwrapPos = cwrap.getBoundingClientRect().top + 600;
    //   let screenPos = wrap.innerHeight;
    //   if (cwrapPos < screenPos) {
    //  // $(noright).css("padding-right","20px");
    //  // $(noleft).css("padding-left","20px");
    //  console.log("mepe")
    //  console.log("cwrap " + cwrapPos)
    //  console.log("screenPos " + screenPos)
    //   }
    //    };





    var distance = $(callist).offset().top,
    $window = $(window);

   $window.scroll(function() {
    if ( $window.scrollTop() >= distance ) {
       $(noright).css("padding-right","40px");
       $(noleft).css("padding-left","40px");
       $(twologo).css("width","100%");

       $(callist).css("position","fixed");
       $(callist).css("top","0");
    } else {
      $(noright).css("padding-right","0px");
      $(noleft).css("padding-left","0px");
      $(twologo).css("width","0px");

      $(callist).css("position","relative");
      $(callist).css("top","auto");
    }
});




});
$(window).on('load', function() {
  const noright = document.getElementsByClassName("norightpad")[0];
  const noleft = document.getElementsByClassName("noleftpad")[0];
  const callist = document.getElementsByClassName("callist")[0];
  const wrap = document.getElementsByClassName("wrap")[0];
  const twologo = document.getElementsByClassName("twologo")[0];

  const mealprep = document.getElementsByClassName("chinback")[0];
  const catering = document.getElementsByClassName("faceback")[0];
  const pchef = document.getElementById("desback");
  const about = document.getElementsByClassName("cbaback")[0];
  const home = document.getElementsByClassName("calnav")[0];
  const hb = document.getElementsByClassName("headerback")[0];
  const hbw = document.getElementsByClassName("headerbackwrap")[0];
  const pickone = document.getElementsByClassName("pickone")[0];
  const picktwo = document.getElementsByClassName("picktwo")[0];
  const pickthree = document.getElementsByClassName("pickthree")[0];
  const pickfour = document.getElementsByClassName("pickfour")[0];
  const pickfive = document.getElementsByClassName("pickfive")[0];
  pickone.addEventListener('click', () => window.scrollTo({
    top: $(mealprep).offset().top - 200,
    behavior: 'smooth',
  }));
  picktwo.addEventListener('click', () => window.scrollTo({
    top: $(catering).offset().top - 200,
    behavior: 'smooth',
  }));
  pickthree.addEventListener('click', () => window.scrollTo({
    top: $(home).offset().top - 200,
    behavior: 'smooth',
  }));
  pickfour.addEventListener('click', () => window.scrollTo({
    top: $(pchef).offset().top - 200,
    behavior: 'smooth',
  }));
pickfive.addEventListener('click', () => window.scrollTo({
  top: $(about).offset().top - 200,
  behavior: 'smooth',
}));





});
