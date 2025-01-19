$(document).ready(function () {
  // Initialize WOW.js
  new WOW().init();

  // Typing Animation
  (function ($) {
    $.fn.writeText = function (content) {
      var contentArray = content.split(""),
        current = 0,
        elem = this;
      setInterval(function () {
        if (current < contentArray.length) {
          elem.text(elem.text() + contentArray[current++]);
        }
      }, 80);
    };
  })(jQuery);

  $("#holder").writeText("WEB DESIGNER + FRONT-END DEVELOPER");

  // Navbar Toggle
  $(".fa-bars").click(function () {
    $(".nav-screen").animate({ right: "0px" }, 200);
  });

  $(".fa-times").click(function () {
    $(".nav-screen").animate({ right: "-285px" }, 200);
  });

  // Smooth Scrolling
  $("a[href*='#']:not([href='#'])").click(function () {
    if (
      location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html,body").animate({ scrollTop: target.offset().top }, 700);
        return false;
      }
    }
  });


  // Skill Bar Animation
  $(".skillbar").each(function () {
    $(this)
      .find(".skillbar-bar")
      .animate({ width: $(this).attr("data-percent") }, 2500);
  });

  // FullPage.js Initialization
  $("#fullpage").fullpage({
    scrollBar: true,
    responsiveWidth: 400,
    navigation: true,
    anchors: ["home", "about", "education", "experience", "skills", "projects", "contact"],
  });

  // Move Section Down
  $("#moveDown").click(function () {
    $.fn.fullpage.moveSectionDown();
  });

  window.addEventListener("scroll", () => {
    const items = document.querySelectorAll(".timeline-item");
    items.forEach((item) => {
      const rect = item.getBoundingClientRect();
      if (rect.top < window.innerHeight - 50) {
        item.classList.add("fadeInDown");
      } else {
        item.classList.remove("fadeInDown");
      }
    });
  });
});

function submitForm(event) {
  event.preventDefault();  // Prevents the form from submitting to the server

  // Get the form data
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;

  // Log the form data to the console
  console.log('Form Data Submitted:');
  console.log('Name: ' + name);
  console.log('Email: ' + email);
  console.log('Message: ' + message);

  // Show the modal popup
  var modal = document.getElementById("popupModal");
  modal.style.display = "block";

  // Close the modal when the user clicks on the "x"
  var span = document.getElementsByClassName("close")[0];
  span.onclick = function () {
    modal.style.display = "none";
  }

  // Automatically close the modal after 3 seconds (3000 milliseconds)
  setTimeout(function () {
    modal.style.display = "none";
  }, 3000);


}
