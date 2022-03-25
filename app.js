$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 500) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }

    if (this.scrollY > 600) {
      $(".button_up").addClass("show");
    } else {
      $(".button_up").removeClass("show");
    }
  });
});

// Ease when button_up click go to up Script
$(".button_up").click(function () {
  $("html").animate({ scrollTop: 0 });
});

const mediaQuery1 = window.matchMedia("(min-width: 1024px)");
if (mediaQuery1.matches) {
  // Typing Animation Script
  var typed = new Typed(".typing", {
    strings: ["Freelancer", "Web Developer", "Game Developer", "Photographer", "Youtuber"],
    typeSpeed: 110,
    backSpeed: 60,
    loop: true,
  });
}

var typed = new Typed(".typing_2", {
  strings: ["Freelancer", "Web Developer", "Game Developer", "Photographer", "Youtuber"],
  typeSpeed: 110,
  backSpeed: 60,
  loop: true,
});

const mediaQuery3 = window.matchMedia("(max-width: 480px)");
if (mediaQuery3.matches) {
  var typed = new Typed(".typing", {
    strings: ["Freelancer", "Web Develop", "Game Develop", "Photographer", "Youtuber"],
    typeSpeed: 110,
    backSpeed: 60,
    loop: true,
  });
}
