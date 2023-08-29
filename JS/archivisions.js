// // SLIDE
$(document).ready(function () {
  const galleryList = $("#galleryList");
  const slideWidth = 362 + 37;
  const slidesToShow = 4;

  // Initialize a variable to keep track of the current slide index
  let currentSlide = 0;

  // Handle click on .slick-btn (previous button)
  $(".slick-btn").on("click", function () {
    // Calculate the new slide index
    currentSlide--;
    if (currentSlide < 0) {
      currentSlide = galleryList.children().length - slidesToShow;
      // If you want to loop to the end instead of stopping at the beginning,
      // you can set currentSlide to (galleryList.children().length - slidesToShow)
    }

    // Calculate the new scroll position based on the current slide
    const scrollPosition = currentSlide * slideWidth;

    galleryList.animate({ scrollLeft: scrollPosition }, 200, function () {
      galleryList.scrollLeft(scrollPosition);
    });
  });
});

// DRAGGABLE
document.addEventListener("DOMContentLoaded", function () {
  const galleryList = document.getElementById("galleryList");
  const feedbackList = document.querySelector(".feedback-list");

  let isGalleryDragging = false;
  let isFeedbackDragging = false;
  let galleryStartX, galleryScrollLeft;
  let feedbackStartX, feedbackScrollLeft;

  // Event listeners for the galleryList element
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

  // Event listeners for the feedbackList element
  feedbackList.addEventListener("mousedown", (e) => {
    isFeedbackDragging = true;
    feedbackStartX = e.clientX;
    feedbackScrollLeft = feedbackList.scrollLeft;
    feedbackList.style.cursor = "grabbing";
  });

  feedbackList.addEventListener("mouseup", () => {
    isFeedbackDragging = false;
    feedbackList.style.cursor = "grab";
  });

  feedbackList.addEventListener("mousemove", (e) => {
    if (!isFeedbackDragging) return;
    const deltaX = e.clientX - feedbackStartX;
    feedbackList.scrollLeft = feedbackScrollLeft - deltaX;
  });

  // Prevent the default behavior of dragging elements
  feedbackList.addEventListener("dragover", (e) => {
    e.preventDefault();
  });
});

// VIDEO
document.addEventListener("DOMContentLoaded", function () {
  $(".play-button-wrapper").on("click", function () {
    const videoSrc = $(this).data("src");

    // Set the source of the iframe to load the YouTube video
    $("#videoIframe").attr("src", videoSrc);

    // Show the modal
    $("#videoModal").modal("show");
  });

  // Handle modal close event to stop video playback
  $("#videoModal").on("hidden.bs.modal", function () {
    // Clear the source of the iframe to stop video playback
    $("#videoIframe").attr("src", "");
  });
});

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
});
