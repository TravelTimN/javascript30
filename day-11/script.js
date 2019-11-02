document.addEventListener("DOMContentLoaded", function() {

    /*
        * grab all of the elements
    */

    const player = document.querySelector(".player");
    const video = player.querySelector(".viewer");
    const progress = player.querySelector(".progress");
    const progressBar = player.querySelector(".progress-filled");
    const toggle = player.querySelector(".toggle");
    const skipButtons = player.querySelectorAll("[data-skip]");
    const skipBackwards = player.querySelector(".backwards");
    const skipFowards = player.querySelector(".forwards");
    const ranges = player.querySelectorAll(".player-slider");



    /*
        * building the functions
    */

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

    function skipBack() {
        video.currentTime += parseFloat(skipBackwards.dataset.skip);
    }

    function skipFwd() {
        video.currentTime += parseFloat(skipFowards.dataset.skip);
    }

    // function fullScreen() {
        
    //     const method = video.requestFullscreen() ? cancelFullscreen(): requestFullscreen();
    //     video[method]();
    // }
    function fullScreen() {
        if (video.requestFullscreen) {
            video.requestFullscreen();
        } else if (video.mozRequestFullScreen) {
            video.mozRequestFullScreen();
        } else if (video.webkitRequestFullscreen) {
            video.webkitRequestFullscreen();
        } else if (video.msRequestFullscreen) {
            video.msRequestFullscreen();
        }
    }

    function handleRangeUpdate() {
        video[this.name] = this.value;
    }

    function handleProgress() {
        const percent = (video.currentTime/ video.duration) * 100;
        progressBar.style.flexBasis = `${percent}%`;
    }

    function scrub(e) {
        const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
        video.currentTime = scrubTime;
    }



    /*
        * hook-up the event listeners
    */

    // keyCodes (similar to YouTube)
    document.body.onkeyup = (e) => {
        if (e.keyCode == 32 || e.keyCode == 75) {
            togglePlay();
        } else if (e.keyCode == 74) {
            skipBack();
        } else if (e.keyCode == 76) {
            skipFwd();
        } else if (e.keyCode == 70) {
            fullScreen();
        }
    }

    // video
    video.addEventListener("click", togglePlay);
    video.addEventListener("play", updateButton);
    video.addEventListener("pause", updateButton);
    video.addEventListener("timeupdate", handleProgress);

    // play button / toggle
    toggle.addEventListener("click", togglePlay);

    // skip buttons
    skipButtons.forEach(button => {
        button.addEventListener("click", skip);
    });

    // ranges
    ranges.forEach(range => {
        range.addEventListener("change", handleRangeUpdate);
    });
    ranges.forEach(range => {
        range.addEventListener("mousemove", handleRangeUpdate);
    });

    // progress bar
    let mousedown = false;
    progress.addEventListener("click", scrub);
    progress.addEventListener("mousemove", (e) => mousedown && scrub(e));
    progress.addEventListener("mousedown", () => mousedown = true);
    progress.addEventListener("mouseup", () => mousedown = false);

});