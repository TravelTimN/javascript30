// document.addEventListener("DOMContentLoaded", function() {

    // Get our Elements
    const player = document.querySelector(".player");
    const video = player.querySelector(".viewer");
    const progress = player.querySelector(".progress");
    const progressBar = player.querySelector(".progress-filled");
    const toggle = player.querySelector(".toggle");
    const skipButtons = player.querySelectorAll("[data-skip]");
    const ranges = player.querySelectorAll(".player-slider");



    // Build our Functions
    function togglePlay() {
        // if video is paused, toggle play and vice versa
        const method = video.paused ? "play": "pause";
        video[method]();
        
    }

    function updateButton() {
        const icon = this.paused ? "►" : "❚ ❚";
        toggle.textContent = icon;
    }

    function skip() {
        video.currentTime += parseFloat(this.dataset.skip);
    }


    // Hook-up the Event Listeners
    video.addEventListener("click", togglePlay);
    video.addEventListener("play", updateButton);
    video.addEventListener("pause", updateButton);
    toggle.addEventListener("click", togglePlay);
    skipButtons.forEach(button => {
        button.addEventListener("click", skip);
    });

// });