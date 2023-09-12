// NAVBAR CLOSING
document.addEventListener("DOMContentLoaded", function () {
  // Select the navigation menu and the button that toggles it
  const navMenu = document.querySelector(".navbar-collapse");
  const navButton = document.querySelector(".navbar-toggler");

  // Add a click event listener to the entire document
  document.addEventListener("click", function (event) {
    // Check if the navigation menu is open and if the click did not originate from the menu or the button
    if (
      navMenu.classList.contains("show") &&
      !navMenu.contains(event.target) &&
      event.target !== navButton
    ) {
      // Close the navigation menu by removing the "show" class
      navMenu.classList.remove("show");
    }
  });

  // // DRAGGABLE _ FEEDBACK / GALLERY
  const galleryList = document.getElementById("galleryList");
  const feedbackList = document.querySelector(".feedback-list");

  let isGalleryDragging = false;
  let isFeedbackDragging = false;
  let galleryStartX, galleryScrollLeft;
  let feedbackStartX, feedbackScrollLeft;

  // GALLERY
  galleryList.addEventListener("mousedown", (e) => {
    isGalleryDragging = true;
    galleryStartX = e.pageX - galleryList.offsetLeft;
    galleryScrollLeft = galleryList.scrollLeft;
  });

  galleryList.addEventListener("mouseup", () => {
    isGalleryDragging = false;
  });

  galleryList.addEventListener("mousemove", (e) => {
    if (!isGalleryDragging) return;
    e.preventDefault();
    const x = e.pageX - galleryList.offsetLeft;
    const walk = (x - galleryStartX) * 1; // Adjust sensitivity as needed
    galleryList.scrollLeft = galleryScrollLeft - walk;
  });

  // FEEDBACK
  feedbackList.addEventListener("mousedown", (e) => {
    isFeedbackDragging = true;
    feedbackStartX = e.pageX - feedbackList.offsetLeft;
    feedbackScrollLeft = feedbackList.scrollLeft;
  });

  feedbackList.addEventListener("mouseup", () => {
    isFeedbackDragging = false;
  });

  feedbackList.addEventListener("mousemove", (e) => {
    if (!isFeedbackDragging) return;
    e.preventDefault();
    const x = e.pageX - feedbackList.offsetLeft;
    const walk = (x - feedbackStartX) * 1; // Adjust sensitivity as needed
    feedbackList.scrollLeft = feedbackScrollLeft - walk;
  });
});

// // SLIDE _ GALLERY
$(document).ready(function () {
  const galleryList = $("#galleryList");
  const slideWidth = 362 + 37;
  const slidesToShow = 4;

  // Initialize a variable to keep track of the current slide index
  let currentSlide = 0;

  // Handle click on .slick-btn (previous button)
  $(".slick-btn").on("click", function () {
    // Calculate the new slide index in the opposite direction
    currentSlide++;
    if (currentSlide >= galleryList.children().length - slidesToShow + 1) {
      currentSlide = 0;
    }

    // Calculate the new scroll position based on the current slide
    const scrollPosition = currentSlide * slideWidth;

    galleryList.animate({ scrollLeft: scrollPosition }, 200, function () {
      galleryList.scrollLeft(scrollPosition);
    });
  });
});

// VIDEO _ REGISTER
// Function to handle video popup click
$(".video").on("click", function (e) {
  e.preventDefault();

  // Show video popup elements
  $(
    "#video-popup-overlay, #video-popup-iframe-container, #video-popup-container, #video-popup-close"
  ).show();

  var srchref = "",
    autoplay = "",
    id = $(this).data("id");

  if ($(this).data("type") == "vimeo") {
    srchref = "//player.vimeo.com/video/";
  } else if ($(this).data("type") == "youtube") {
    srchref = "https://www.youtube.com/embed/";
  }

  if ($(this).data("autoplay")) {
    autoplay = "?autoplay=1";
  }

  // Set the video source
  $("#video-popup-iframe").attr("src", srchref + id + autoplay);

  // Show the video popup container when the iframe is loaded
  $("#video-popup-iframe").on("load", function () {
    $("#video-popup-container").show();
  });
});

// Function to close video popup
$("#video-popup-close, #video-popup-overlay").on("click", function (e) {
  // Hide video popup elements and reset the iframe source
  $(
    "#video-popup-iframe-container, #video-popup-container, #video-popup-close, #video-popup-overlay"
  ).hide();
  $("#video-popup-iframe").attr("src", "");
});

// COUNT STATISTIC
let valueDisplays = document.querySelectorAll(".firgures-number");
let interval = 3000;
valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  console.log(duration);
  let counter = setInterval(function () {
    startValue += 1;
    valueDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});

// Active
function addActiveClassToLinks(containerClass) {
  // Get all the anchor elements within the specified container
  const links = document.querySelectorAll(`.${containerClass} a`);

  // Add a click event listener to each anchor element
  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      // Prevent the default behavior of the anchor element (e.g., navigating to a new page)
      event.preventDefault();

      // Remove the 'active' class from all anchor elements within the container
      links.forEach((otherLink) => {
        otherLink.classList.remove("active");
      });

      // Add the 'active' class to the clicked anchor element
      link.classList.add("active");
    });
  });
}

// Call the function for both containers
addActiveClassToLinks("gallery-list-item");
addActiveClassToLinks("project-list-item");
