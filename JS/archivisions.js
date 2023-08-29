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

    galleryList.animate({ scrollLeft: scrollPosition }, 400, function () {
      galleryList.scrollLeft(scrollPosition);
    });
  });
});

// DRAGGABLE
document.addEventListener("DOMContentLoaded", function () {
  const galleryList = document.getElementById("galleryList");
  let isDragging = false;
  let startX, scrollLeft;

  // Handle mouse down event to start dragging
  galleryList.addEventListener("mousedown", (e) => {
    isDragging = true;
    startX = e.pageX - galleryList.offsetLeft;
    scrollLeft = galleryList.scrollLeft;
  });

  // Handle mouse up event to stop dragging
  galleryList.addEventListener("mouseup", () => {
    isDragging = false;
  });

  // Handle mouse move event to drag the slick list
  galleryList.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - galleryList.offsetLeft;
    const walk = (x - startX) * 1; // Adjust the sensitivity by multiplying
    galleryList.scrollLeft = scrollLeft - walk;
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
