// SLIDE
$(document).ready(function () {
  $(".slick-list").slick({
    slidesToShow: 3.5,
    slidesToScroll: 1,
    arrows: true,
    infinite: false,
    autoplay: false,
  });
  $(".prev-btn").click(function () {
    $(".slick-list").slick("slickPrev");
  });

  $(".next-btn").click(function () {
    $(".slick-list").slick("slickNext");
  });
  $(".prev-btn").addClass("slick-disabled");
  $(".slick-list").on("afterChange", function () {
    if ($(".slick-prev").hasClass("slick-disabled")) {
      $(".prev-btn").addClass("slick-disabled");
    } else {
      $(".prev-btn").removeClass("slick-disabled");
    }
    if ($(".slick-next").hasClass("slick-disabled")) {
      $(".next-btn").addClass("slick-disabled");
    } else {
      $(".next-btn").removeClass("slick-disabled");
    }
  });
});

// VIDEO
// Get the video element and play button element
const video = document.getElementById("video");
const circlePlayButton = document.getElementById("circle-play-b");

function togglePlay() {
  if (video.paused || video.ended) {
    video.play();
  } else {
    video.pause();
  }
}

circlePlayButton.addEventListener("click", togglePlay);
video.addEventListener("playing", function () {
  circlePlayButton.style.opacity = 0;
});
video.addEventListener("pause", function () {
  circlePlayButton.style.opacity = 1;
});
