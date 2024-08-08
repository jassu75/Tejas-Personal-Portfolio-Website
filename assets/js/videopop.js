document.addEventListener("DOMContentLoaded", function() {
    var video = document.getElementById("animal-video");
    var speechBubble = document.getElementById("speech-bubble");
    var speechBubbleButtons = document.getElementById("speech-bubble-buttons");

    // Time in seconds at which to pause the video
    var pauseTime = 3.5;

    function updateVisibility() {
        if (video.paused) {
            speechBubble.style.display = "block";
            speechBubbleButtons.style.display = "block";
        } else {
            speechBubble.style.display = "none";
            speechBubbleButtons.style.display = "none";
        }
    }

    video.addEventListener("timeupdate", function() {
        if (video.currentTime >= pauseTime && !video.paused) {
            video.pause();
            updateVisibility();
        }
    });

    video.addEventListener("play", updateVisibility);
    video.addEventListener("pause", updateVisibility);

    // Initially hide the elements if the video is already playing when the page loads
    updateVisibility();
});
