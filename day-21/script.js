document.addEventListener("DOMContentLoaded", function () {
    const arrow = document.querySelector(".arrow");
    const speed = document.querySelector(".speed-value");

    // get geolocation data from navigator
    navigator.geolocation.watchPosition((data) => {
        // console.log(data);
        speed.textContent = Math.round(data.coords.speed);
        arrow.style.transform = `rotate(${data.coords.heading}deg)`;
    }, (error) => {
        // if user doesn't allow geo-tracking
        console.log(error);
        alert("Please let me follow your every move!");
    });
});
