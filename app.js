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

// // Submit Function to Google Sheets
// const scriptURL = "https://script.google.com/macros/s/AKfycbzuR2I9CIP7e49H1AMkA2DZZK9SLHAXUsxsZHyznGlhoUyW9Rsg2pNX5rXYo57rr1m2/exec";
// const form = document.forms["submit-to-google-sheet"];

// // Show Button Submit Done
// const buttonSend = document.querySelector(".field_send");
// const buttonLoading = document.querySelector(".field_send_loading");
// const buttonSuccess = document.querySelector(".field_send_success");
// // / Show Button Submit Done

// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   // Show loading button after Submit ( Send Button Off & Loading Button On)
//   buttonLoading.classList.toogle("d-none");
//   buttonSend.classList.toogle("d-none");
//   // / Show loading button after Submit ( Send Button Off & Loading Button On)

//   fetch(scriptURL, { method: "POST", body: new FormData(form) })
//   .then((response) => {
//     // Loading Button Off Success Button On
//     buttonLoading.classList.toggle("d-none");
//     buttonSend.classList.toogle("d-none");
//     // Show Alert
//     buttonSuccess.classList.toogle("d-none");
//     // Restart Form
//     form.reset();
//     console.log("Success!", response) })
//   .catch(error => console.error('Error!', error.message))
// })
// // / Submit Function to Google Sheets

// // Alert Button Submit
// var alertPlaceholder = document.getElementById('liveAlertPlaceholder')
// var alertTrigger = document.getElementById('liveAlertButton')

// function alert(message, type) {
//   var wrapper = document.createElement('div')
//   wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="button-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'
//   alertPlaceholder.append(wrapper)
// }

// if(alertTrigger) {
//   alertTrigger.addEventListener('click', function() {
//     alert('Your Message has been sending, Thank you for the Message!', 'success')
//   })
// }
